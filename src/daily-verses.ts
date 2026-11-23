// 从《崇拜辅助经文（中英对照）》这篇文章里取出每一段经文，供「每日诵读」轮换使用。
import raw from './content/posts/2026-11-08-worship-scriptures.md?raw';

export interface DailyVerse { section: string; ref: string; refEn: string; zh: string; en: string }

const SECTION_NAMES: Record<string, string> = {
  一: '宣召经文',
  二: '启应文 · 切实相爱',
  三: '饶恕与和睦同居',
  四: '神的信实',
  五: '奉献与祝福',
};

export function getDailyVerses(): DailyVerse[] {
  const out: DailyVerse[] = [];
  let section = '';
  for (const line of raw.split('\n')) {
    const h = line.match(/^##\s*([一二三四五六七八九十]+)、/);
    if (h) { section = SECTION_NAMES[h[1]] ?? line.replace(/^##\s*/, ''); continue; }
    const m = line.match(/^\|\s*\d+\s*\|(.+?)\|(.+?)\|(.+?)\|\s*$/);
    if (!m || !section) continue;
    const [ref, refEn = ''] = m[1].split('\\<br>').map((s) => s.trim());
    out.push({ section, ref, refEn, zh: m[2].trim(), en: m[3].trim() });
  }
  return out;
}
