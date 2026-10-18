#!/usr/bin/env python3
"""ASR check for a narrated post: transcribe every part with local whisper-server
and compare it with the text it was supposed to say.

Usage: asr_check.py <manifest.json> <en|zh> [--port 8179]

Flags a part when similarity < 0.85, the length ratio is off by more than 15%,
or the transcript contains a run of the private reference transcript (leakage).
Prints flagged parts; writes qa.json next to the manifest. Words are not the
same as voice: someone still has to listen.
"""
import argparse
import difflib
import json
import re
import subprocess
import time
import urllib.request
import uuid
from pathlib import Path

REF_TEXT = Path.home() / "Library/Application Support/home-ai/mac-voice/voices/zach/reference.txt"
MODEL = Path.home() / ".cache/whisper-cpp/ggml-large-v3.bin"
ZH_NUM = "零〇一二三四五六七八九十百千万亿两点"
EN_NUM = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
          "eleven", "twelve", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty",
          "ninety", "hundred", "thousand", "first", "second", "third", "fourth", "fortyfour", "fortyfive"}


def tokens(text, lang):
    text = text.lower()
    if lang == "zh":
        text = re.sub(rf"[0-9{ZH_NUM}%％]", "", text)
        return re.findall(r"[\u3400-\u9fff]|[a-z]+", text)
    words = re.findall(r"[a-z]+", text.replace("-", ""))
    return [w for w in words if w not in EN_NUM]   # numbers come back as digits or words


def transcribe(port, wav):
    boundary = uuid.uuid4().hex
    body = b"".join([
        f"--{boundary}\r\nContent-Disposition: form-data; name=\"file\"; filename=\"a.wav\"\r\n"
        "Content-Type: audio/wav\r\n\r\n".encode(), wav.read_bytes(), b"\r\n",
        *[f"--{boundary}\r\nContent-Disposition: form-data; name=\"{k}\"\r\n\r\n{v}\r\n".encode()
          for k, v in (("response_format", "json"), ("temperature", "0.0"))],
        f"--{boundary}--\r\n".encode()])
    req = urllib.request.Request(f"http://127.0.0.1:{port}/inference", data=body,
                                 headers={"Content-Type": f"multipart/form-data; boundary={boundary}"})
    with urllib.request.urlopen(req, timeout=300) as r:
        return json.load(r)["text"].strip()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("manifest", type=Path)
    ap.add_argument("lang", choices=["en", "zh"])
    ap.add_argument("--port", type=int, default=8179)
    a = ap.parse_args()
    manifest = json.loads(a.manifest.read_text())
    run_dir = a.manifest.parent
    n = 6 if a.lang == "zh" else 4
    ref = tokens(REF_TEXT.read_text(encoding="utf-8"), "zh") + tokens(REF_TEXT.read_text(encoding="utf-8"), "en")
    leak = {tuple(ref[i:i + n]) for i in range(max(0, len(ref) - n + 1))}
    prompt = "以下是普通话的句子，使用简体中文。" if a.lang == "zh" else "The following is a spoken English essay."
    server = subprocess.Popen(["whisper-server", "-m", str(MODEL), "-l", a.lang, "--host", "127.0.0.1",
                               "--port", str(a.port), "--convert", "-nt", "-t", "6", "--prompt", prompt],
                              stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    try:
        for _ in range(120):
            try:
                urllib.request.urlopen(f"http://127.0.0.1:{a.port}/", timeout=2)
                break
            except Exception:
                time.sleep(1)
        results, flagged = [], []
        for i, part in enumerate(manifest["parts"]):
            heard = transcribe(a.port, run_dir / part["file"])
            want, got = tokens(part["text"], a.lang), tokens(heard, a.lang)
            sim = difflib.SequenceMatcher(None, want, got, autojunk=False).ratio()
            ratio = len(got) / max(1, len(want))
            leaked = any(tuple(got[j:j + n]) in leak for j in range(max(0, len(got) - n + 1)))
            row = {"part": i, "similarity": round(sim, 3), "length_ratio": round(ratio, 2),
                   "leak": leaked, "text": part["text"], "heard": heard}
            results.append(row)
            if sim < 0.85 or abs(ratio - 1) > 0.15 or leaked:
                flagged.append(row)
            print(f"part {i:2d} sim={sim:.3f} ratio={ratio:.2f}{' LEAK' if leaked else ''}", flush=True)
        (run_dir / "qa.json").write_text(json.dumps(results, ensure_ascii=False, indent=1))
        print(f"\n{len(flagged)} flagged of {len(results)}")
        for row in flagged:
            print(f"\n#{row['part']} sim={row['similarity']} ratio={row['length_ratio']}\n  want: {row['text']}\n  heard: {row['heard']}")
    finally:
        server.terminate()


if __name__ == "__main__":
    main()
