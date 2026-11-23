export const SITE_TITLE = '信仰之路';
export const SITE_URL = 'https://faith-journey-eight.vercel.app';
export const AUTHOR = 'Fawn';
export const SITE_KEYWORDS = ['基督教', '信仰', '主日讲道', '讲道笔记', '圣经', '和合本', 'KJV', '中英对照', '福音', '耶稣基督'];
export const SITE_SUBTITLE = '一个基督徒的成长记录';
export const SITE_DESCRIPTION =
  '记录我信主之后的成长：主日讲道笔记、圣经事件和圣经资料，也和你分享耶稣基督的好消息。';

export const CATEGORIES = [
  { name: '主日笔记', slug: 'sermon', desc: '每个主日听道后的学习笔记，经文中英对照。' },
  { name: '经文学习', slug: 'scripture', desc: '自己读经时的整理和默想。', hidden: true },
  { name: '圣经事件', slug: 'bible-events', desc: '圣经里重要事件的背景、意义和应用。' },
  { name: '个人感想', slug: 'reflections', desc: '生活里的感恩、挣扎和见证。', hidden: true },
  { name: '圣经资料', slug: 'resources', desc: '整理好的经文和参考资料，方便查阅和使用。' },
] as const;

// hidden: 个人内容，暂不在网站上显示（文章也不生成页面）。去掉 hidden 即可恢复。
export const HIDDEN_CATEGORIES: string[] = CATEGORIES.filter((c) => 'hidden' in c && c.hidden).map((c) => c.name);
export const PUBLIC_CATEGORIES = CATEGORIES.filter((c) => !HIDDEN_CATEGORIES.includes(c.name));

export type CategoryName = (typeof CATEGORIES)[number]['name'];

export function categoryByName(name: string) {
  return CATEGORIES.find((c) => c.name === name)!;
}
