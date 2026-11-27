// 仅在构建时使用（不要在浏览器端脚本里 import，体积约 3MB）
import cuv from './cuv.json';
import { BOOKS } from './books';

export const CUV = cuv as (string | null)[][][];

export interface VerseRow { n: number; label: string; text: string }

/** 某一章的经文；和合本中两节合译的，标成“14-15” */
export function chapterVerses(bookIndex: number, chapter: number): VerseRow[] {
  const vs = CUV[bookIndex][chapter - 1];
  const rows: VerseRow[] = [];
  vs.forEach((t, i) => {
    if (t === null) {
      const last = rows[rows.length - 1];
      if (last) last.label = `${last.label.split('-')[0]}-${i + 1}`;
      return;
    }
    rows.push({ n: i + 1, label: String(i + 1), text: t });
  });
  return rows;
}

export const bookIndex = (slug: string) => BOOKS.findIndex((b) => b.slug === slug);
