// 解析经文出处，例如：约3:16、约翰福音3章16节、罗 8:28-30、诗23、1 Cor 13:4、John 3:16
import { BOOKS, type Book } from './books';

export interface Ref {
  book: Book;
  chapter: number;
  verse?: number;
  verseEnd?: number;
}

const norm = (s: string) =>
  s
    .replace(/(\d)\s+(\d)/, '$1:$2')
    .toLowerCase()
    .replace(/[\s.·]+/g, '')
    .replace(/[：:]/g, ':')
    .replace(/[－—–~～至到]/g, '-')
    .replace(/[，,、]/g, ',')
    .replace(/[０-９]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 0xfee0));

type Key = { key: string; book: Book; strong: boolean };
const KEYS: Key[] = BOOKS.flatMap((b) => {
  const strong = [b.name, b.slug, norm(b.en), ...(b.aliases ?? [])].map((k) => ({ key: norm(k), book: b, strong: true }));
  return [...strong, { key: norm(b.abbr), book: b, strong: b.abbr.length > 1 }];
}).sort((a, b) => b.key.length - a.key.length);

/** 只有书名（如“罗马书”）时返回 chapter 0，表示去这卷书的目录 */
export function parseRef(input: string): Ref | null {
  const s = norm(input);
  if (!s) return null;
  for (const k of KEYS) {
    if (!s.startsWith(k.key)) continue;
    const rest = s.slice(k.key.length);
    if (rest === '') return k.strong ? { book: k.book, chapter: 0 } : null;
    // 3 / 3:16 / 3:16-18 / 3章16节 / 3篇 / 3章16-18节
    const m = rest.match(/^第?(\d{1,3})(?:章|篇)?(?:[:章]?(\d{1,3})节?(?:-(\d{1,3})节?)?)?$/);
    if (!m) continue;
    const chapter = +m[1];
    const verse = m[2] ? +m[2] : undefined;
    const verseEnd = m[3] ? +m[3] : undefined;
    return { book: k.book, chapter, verse, verseEnd: verseEnd && verse && verseEnd > verse ? verseEnd : undefined };
  }
  return null;
}

export const refHref = (r: Ref) =>
  r.chapter === 0 || r.chapter > r.book.chapters
    ? `/bible/${r.book.slug}/`
    : `/bible/${r.book.slug}/${r.chapter}/${r.verse ? `#v${r.verse}${r.verseEnd ? `-${r.verseEnd}` : ''}` : ''}`;
