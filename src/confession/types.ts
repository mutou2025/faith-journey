export type Para = { text: string; fn?: number }[];
export type V = { zh: string; en: string; ref: string };

export type ChapterNote = {
  n: number;
  summary: string; // 一句话总结
  excerpt?: Para[]; // 书中原文摘录（只放拍照的段落，按段落，fn 为脚注号）
  excerptNote?: string;
  overview?: Para[]; // 没有中文原文时：按英文原版用自己的话整理的本章内容
  points: { title: string; text: string }[];
  terms: [string, string][]; // 中英关键词
  footnotes: { fn: number; refs: string; about: string; verses: V[] }[];
  commentary: { title: string; text: string }[];
  questions: string[];
  hope?: V;
  next?: string;
};

