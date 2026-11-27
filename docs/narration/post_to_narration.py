#!/usr/bin/env python3
"""Turn a bilingual post into narration input for ~/home-ai/mac-voice/narrate.py.

Writes, for each language block (en, zh), a `blocks.json` (ordered
{"section", "text"} items) and the matching `narrated-script.txt` that
narrate.py checks against. Headings start a new section and are read aloud;
links, emphasis and code marks are dropped, their text kept. Sources come from
front matter and are not read.

Usage: post_to_narration.py _posts/<post>.md <out-dir>
"""
import json
import re
import sys
from pathlib import Path

import yaml


def spoken(line, lang="en"):
    line = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", line)                 # images
    line = re.sub(r"\[((?:[^\[\]]|\[[^\]]*\])+)\]\([^)]*\)", r"\1", line)  # links -> text
    line = re.sub(r"\*\*(.+?)\*\*|__(.+?)__", lambda m: m.group(1) or m.group(2), line)
    line = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"\1", line)
    line = re.sub(r"(?<!\w)_(?!\s)(.+?)(?<!\s)_(?!\w)", r"\1", line)
    line = re.sub(r"`([^`]+)`", r"\1", line)
    line = re.sub(r"<[^>]+>", "", line)
    # Turn visual arrows into spoken transitions instead of unpronounceable symbols.
    to_word = " to " if lang == "en" else "到"
    and_word = " to " if lang == "en" else "和"
    comma = ", " if lang == "en" else "，"
    line = re.sub(r"(?<=\w)→(?=\w)", to_word, line)
    line = re.sub(r"\s*→\s*", comma, line)
    line = re.sub(r"\s*↔\s*", and_word, line)
    return re.sub(r"\s+", " ", line).strip()


def end_sentence(text, lang):
    if re.search(r"[.!?。！？…:：]$", text):
        return text
    return text + ("。" if lang == "zh" else ".")


def blocks_for(body, title, lang):
    blocks = [{"section": "title", "text": end_sentence(title, lang)}]
    section = "intro"
    paragraph = []
    in_fence = False

    def flush():
        if paragraph:
            text = spoken(" ".join(paragraph) if lang == "en" else "".join(paragraph), lang)
            if text:
                blocks.append({"section": section, "text": text})
            paragraph.clear()

    for raw in body.split("\n"):
        line = raw.strip()
        if line.startswith("```"):
            flush()
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        if re.match(r"^\|.*\|$", line):            # markdown tables
            flush()
            continue
        if re.match(r"^\{:.*\}$", line):          # kramdown attribute lines
            continue
        heading = re.match(r"^#{2,4}\s+(.*)$", line)
        if heading:
            flush()
            section = spoken(heading.group(1), lang)
            if lang == "zh":
                # Keep numbered headings together ("2、...") so the sentence splitter never isolates "2.".
                section = re.sub(r"^(\d+)\.\s+", r"\1、", section)
            blocks.append({"section": section, "text": end_sentence(section, lang)})
            continue
        if line == "---" or line.startswith("<"):
            flush()
            continue
        line = re.sub(r"^>\s?", "", line)
        if not line:
            flush()
            continue
        item = re.match(r"^([-*]|\d+\.)\s+(.*)$", line)
        if item:
            flush()
            text = spoken(item.group(2), lang)
            if text:
                blocks.append({"section": section, "text": end_sentence(text, lang)})
            continue
        paragraph.append(line)
    flush()
    return blocks


def main():
    post, out = Path(sys.argv[1]), Path(sys.argv[2])
    _, front, body = post.read_text(encoding="utf-8").split("---", 2)
    meta = yaml.safe_load(front)
    parts = {
        "en": re.search(r'<div class="lang-en"[^>]*>(.*?)\n</div>', body, re.S),
        "zh": re.search(r'<div class="lang-zh[^"]*"[^>]*>(.*?)\n</div>', body, re.S),
    }
    titles = {"en": meta["title"], "zh": meta.get("title_zh") or meta["title"]}
    for lang, match in parts.items():
        if not match:
            continue
        blocks = blocks_for(match.group(1), titles[lang], lang)
        target = out / lang
        target.mkdir(parents=True, exist_ok=True)
        (target / "blocks.json").write_text(json.dumps(blocks, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
        (target / "narrated-script.txt").write_text("\n\n".join(b["text"] for b in blocks) + "\n", encoding="utf-8")
        print(f"{lang}: {len(blocks)} blocks, {sum(len(b['text']) for b in blocks)} chars -> {target}")


if __name__ == "__main__":
    main()
