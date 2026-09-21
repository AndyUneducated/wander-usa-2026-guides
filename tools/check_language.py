#!/usr/bin/env python3
"""Enforce the project's language policy.

The published guide content is Chinese; everything a maintainer reads — code
comments, documentation, commit messages — is English. This script finds Chinese
text that has leaked into the second category.

  python3 tools/check_language.py           # summary, exits 1 on any violation
  python3 tools/check_language.py --list    # also print every offending line

It strips string literals before looking at code, so a Chinese UI label such as
'展开' or a regex that matches Chinese page text does not register as a Chinese
comment. Those literals are reported separately as an informational section and
never fail the run: matching and emitting Chinese content is exactly what the
site's code is supposed to do.
"""
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
CJK = re.compile(r'[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]')

# Generated review checklists quote the Chinese source data verbatim, so they are
# data extracts rather than documentation.
DOC_SKIP = ('tools/review/',)


def tracked(*globs):
    out = subprocess.run(['git', 'ls-files', *globs], cwd=ROOT,
                         capture_output=True, text=True, encoding='utf-8')
    paths = [ROOT / p for p in out.stdout.split('\n') if p.strip()]
    return [p for p in paths if p.is_file()]


def js_comments(text):
    """Yield (line_no, comment) for // and /* */ comments outside string literals."""
    i, line, n = 0, 1, len(text)
    while i < n:
        c = text[i]
        if c == '\n':
            line += 1
            i += 1
        elif c in '"\'`':
            q, i = c, i + 1
            while i < n and text[i] != q:
                if text[i] == '\\':
                    i += 1
                elif text[i] == '\n':
                    line += 1
                i += 1
            i += 1
        elif c == '/' and i + 1 < n and text[i + 1] == '/':
            j = text.find('\n', i)
            j = n if j < 0 else j
            yield line, text[i:j]
            i = j
        elif c == '/' and i + 1 < n and text[i + 1] == '*':
            j = text.find('*/', i)
            j = n if j < 0 else j + 2
            yield line, text[i:j]
            line += text.count('\n', i, j)
            i = j
        else:
            i += 1


def css_comments(text):
    for m in re.finditer(r'/\*.*?\*/', text, re.S):
        yield text.count('\n', 0, m.start()) + 1, m.group(0)


def py_comments(text):
    for k, raw in enumerate(text.split('\n'), 1):
        if raw.strip().startswith('#'):
            yield k, raw.strip()
    # Docstrings, minus the embedded JS that the browser tests inject: any Chinese
    # in there sits in a string literal or a regex that matches page content, and
    # code_strings already reports those.
    for m in re.finditer(r'"""(.*?)"""', text, re.S):
        body = re.sub(r"'[^'\n]*'|\"[^\"\n]*\"|/[^/\n]+/[gimsuy]*", '', m.group(0))
        yield text.count('\n', 0, m.start()) + 1, body


def whole_file(text):
    yield 1, text


def code_strings(text):
    for m in re.finditer(r"'[^'\n]*'|\"[^\"\n]*\"", text):
        yield text.count('\n', 0, m.start()) + 1, m.group(0)


def scan(files, extract):
    rows = []
    for f in files:
        hits = [(k, c) for k, c in extract(f.read_text(encoding='utf-8'))
                if CJK.search(c)]
        if hits:
            rows.append((f.relative_to(ROOT).as_posix(), hits))
    return sorted(rows, key=lambda r: -len(r[1]))


def report(title, rows, show):
    n = sum(len(h) for _, h in rows)
    print(f'\n=== {title}: {n} hit(s) in {len(rows)} file(s) ===')
    for path, hits in rows:
        print(f'  {len(hits):>4}  {path}')
        if show:
            for k, c in hits[:200]:
                print(f'        {k}: ' + ' '.join(c.split())[:150])
    return n


def main():
    show = '--list' in sys.argv

    docs = [f for f in tracked('*.md')
            if not f.relative_to(ROOT).as_posix().startswith(DOC_SKIP)]
    enforced = [
        ('JS comments', scan(tracked('*.js'), js_comments)),
        ('CSS comments', scan(tracked('*.css'), css_comments)),
        ('Python comments', scan(tracked('*.py'), py_comments)),
        ('Documentation', scan(docs, whole_file)),
    ]
    bad = sum(report(t, rows, show) for t, rows in enforced)

    print('\n--- informational: Chinese inside string literals ---')
    print('    (expected — this code matches and emits the site\'s Chinese content)')
    report('Code strings', scan(tracked('tools/*.py', 'assets/*.js'), code_strings), show)

    if bad:
        print(f'\n❌ {bad} Chinese comment(s) or doc section(s) must be translated')
        return 1
    print('\n✅ Comments and documentation are English')
    return 0


if __name__ == '__main__':
    sys.exit(main())
