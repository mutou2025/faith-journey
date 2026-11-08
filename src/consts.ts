export const SITE_TITLE = '信仰之路';
export const SITE_SUBTITLE = '一个初信者的成长记录';
export const SITE_DESCRIPTION =
  '记录我信主之后的成长：主日讲道笔记、经文学习、圣经事件和个人感想，也和你分享耶稣基督的好消息。';

export const CATEGORIES = [
  { name: '主日笔记', slug: 'sermon', desc: '每个主日听道后的学习笔记，经文中英对照。' },
  { name: '经文学习', slug: 'scripture', desc: '自己读经时的整理和默想。' },
  { name: '圣经事件', slug: 'bible-events', desc: '圣经里重要事件的背景、意义和应用。' },
  { name: '个人感想', slug: 'reflections', desc: '生活里的感恩、挣扎和见证。' },
  { name: '圣经资料', slug: 'resources', desc: '整理好的经文和参考资料，方便查阅和使用。' },
] as const;

export type CategoryName = (typeof CATEGORIES)[number]['name'];

export function categoryByName(name: string) {
  return CATEGORIES.find((c) => c.name === name)!;
}
