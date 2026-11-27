"""生成 src/bible/cuv.json（和合本简体，公版）。

来源：scrollmapper/bible_databases 的 ChiUn.json（和合本繁体，1919 年出版，公有领域），
用 OpenCC 转成简体，并整理标点：「」→“”、『』→‘’、去掉分词空格。
用法：pip install opencc && python3 scripts/build-bible.py ChiUn.json
输出格式：[书卷][章][节] = 经文；和上一节合并的节为 null（和合本有些节是两节合译）。
"""
import json, re, sys
import opencc

cc = opencc.OpenCC('t2s')
FIX = [('著', '着'), ('显着', '显著'), ('着名', '著名'), ('昭着', '昭著'), ('着作', '著作')]


def clean(s: str) -> str:
    s = re.sub(r'\s+', '', s)
    s = cc.convert(s)
    for a, b in FIX:
        s = s.replace(a, b)
    s = s.replace('「', '“').replace('」', '”').replace('『', '‘').replace('』', '’')
    s = s.replace('〈', '（').replace('〉', '）').replace('﹞', '）')
    s = re.sub(r'\.{3,}', '……', s)
    s = s.replace('‧', '·').replace('•', '·').replace('─', '——').replace('．', '·')
    return s


src = json.load(open(sys.argv[1], encoding='utf-8'))
out = []
for book in src['books']:
    chapters = []
    for ch in book['chapters']:
        vs = []
        for v in ch['verses']:
            t = v['text'].strip()
            vs.append(None if t == 'a' else clean(t))
        chapters.append(vs)
    out.append(chapters)

# 约 7:53 在源数据里被并进了 8:1，按和合本拆开
if not out[42][6][52] and out[42][7][0].startswith('于是各人都回家去了；'):
    out[42][6][52] = '于是各人都回家去了。'
    out[42][7][0] = out[42][7][0].replace('于是各人都回家去了；', '', 1)

json.dump(out, open('src/bible/cuv.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print('ok', sum(len(c) for b in out for c in b), 'verses')
