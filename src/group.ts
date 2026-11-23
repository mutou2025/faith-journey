// 读经小组：每周四晚 9:00（多伦多时间）线上聚会。
// 隐私：网站是公开的，带领人只写首字母，不放 Zoom 链接/密码、电话和私人代祷内容。
// 每周更新：在 meetings 里改本周的 chapter/theme/questions/passage 即可。

export type Verse = { v: number; zh: string; en: string };
export type Meeting = {
  date: string; // YYYY-MM-DD（多伦多日期）
  leader?: string; // 只写称呼或首字母
  chapter?: string; // 例：创世记 16
  theme?: string;
  special?: string; // 例：圣诞庆祝
  questions?: string[];
  keyVerse?: { zh: string; en: string; ref: string };
  passage?: Verse[];
};

export const GROUP = {
  name: '周四线上读经小组',
  weekday: '每周四',
  time: '晚上 9:00',
  tz: 'America/Toronto',
  tzLabel: '多伦多时间',
  durationMin: 45,
  book: '创世记',
  bookChapters: 50,
  flow: [
    { title: '彼此代祷', text: '先为彼此的需要祷告。具体的事在群里分享，网站上不写。' },
    { title: '一起读经', text: '轮流读本周的章节，可以用中文或英文。' },
    { title: '分享讨论', text: '围绕几个问题分享领受，没有标准答案，说说你看到的就好。' },
  ],
};

export const meetings: Meeting[] = [
  { date: '2026-09-17', leader: 'A' },
  { date: '2026-09-24', leader: 'A' },
  { date: '2026-10-01', leader: 'A' },
  { date: '2026-10-08', leader: 'R' },
  { date: '2026-10-15' },
  { date: '2026-10-22', leader: 'E' },
  { date: '2026-10-29', leader: 'E' },
  { date: '2026-11-05', leader: 'M' },
  { date: '2026-11-12', leader: 'M' },
  { date: '2026-11-19', leader: 'M', chapter: '创世记 15', theme: '神与亚伯兰立约' },
  {
    date: '2026-11-26',
    leader: 'A',
    chapter: '创世记 16',
    theme: '看顾人的神：撒莱、夏甲与以实玛利',
    keyVerse: {
      zh: '夏甲就称那对她说话的耶和华为“看顾人的神”。',
      en: 'And she called the name of the LORD that spake unto her, Thou God seest me.',
      ref: '创世记 16:13',
    },
    questions: [
      '上一章神刚应许亚伯兰会有后裔（15:4-6），这一章撒莱为什么想出“借使女得孩子”的办法？亚伯兰又是怎样回应的？',
      '撒莱、亚伯兰、夏甲三个人，各自在哪里做错了，又各自受了什么苦？',
      '夏甲逃到旷野，神的使者问她“你从哪里来？要往哪里去？”（16:8）。如果神今天这样问你，你会怎么回答？',
      '神给孩子起名“以实玛利”，意思是“神听见”；夏甲称神为“看顾人的神”。对一个被忽视、受欺负的外邦使女来说，这意味着什么？',
      '你有没有等不及神的时间、想自己“帮神一把”的经历？结果怎样？这一周可以把哪件事重新交给神？',
    ],
    passage: [
      { v: 1, zh: '亚伯兰的妻子撒莱不给他生儿女。撒莱有一个使女，名叫夏甲，是埃及人。', en: 'Now Sarai Abram\'s wife bare him no children: and she had an handmaid, an Egyptian, whose name was Hagar.' },
      { v: 2, zh: '撒莱对亚伯兰说：“耶和华使我不能生育。求你和我的使女同房，或者我可以因她得孩子（得孩子：原文是被建立）”。亚伯兰听从了撒莱的话。', en: 'And Sarai said unto Abram, Behold now, the Lord hath restrained me from bearing: I pray thee, go in unto my maid; it may be that I may obtain children by her. And Abram hearkened to the voice of Sarai.' },
      { v: 3, zh: '于是亚伯兰的妻子撒莱将使女埃及人夏甲给了丈夫为妾；那时亚伯兰在迦南已经住了十年。', en: 'And Sarai Abram\'s wife took Hagar her maid the Egyptian, after Abram had dwelt ten years in the land of Canaan, and gave her to her husband Abram to be his wife.' },
      { v: 4, zh: '亚伯兰与夏甲同房，夏甲就怀了孕；她见自己有孕，就小看她的主母。', en: 'And he went in unto Hagar, and she conceived: and when she saw that she had conceived, her mistress was despised in her eyes.' },
      { v: 5, zh: '撒莱对亚伯兰说：“我因你受屈。我将我的使女放在你怀中，她见自己有了孕，就小看我。愿耶和华在你我中间判断。”', en: 'And Sarai said unto Abram, My wrong be upon thee: I have given my maid into thy bosom; and when she saw that she had conceived, I was despised in her eyes: the Lord judge between me and thee.' },
      { v: 6, zh: '亚伯兰对撒莱说：“使女在你手下，你可以随意待她。”撒莱苦待她，她就从撒莱面前逃走了。', en: 'But Abram said unto Sarai, Behold, thy maid is in thy hand; do to her as it pleaseth thee. And when Sarai dealt hardly with her, she fled from her face.' },
      { v: 7, zh: '耶和华的使者在旷野书珥路上的水泉旁遇见她，', en: 'And the angel of the Lord found her by a fountain of water in the wilderness, by the fountain in the way to Shur.' },
      { v: 8, zh: '对她说：“撒莱的使女夏甲，你从哪里来？要往哪里去？”夏甲说：“我从我的主母撒莱面前逃出来。”', en: 'And he said, Hagar, Sarai\'s maid, whence camest thou? and whither wilt thou go? And she said, I flee from the face of my mistress Sarai.' },
      { v: 9, zh: '耶和华的使者对她说：“你回到你主母那里，服在她手下”；', en: 'And the angel of the Lord said unto her, Return to thy mistress, and submit thyself under her hands.' },
      { v: 10, zh: '又说：“我必使你的后裔极其繁多，甚至不可胜数”；', en: 'And the angel of the Lord said unto her, I will multiply thy seed exceedingly, that it shall not be numbered for multitude.' },
      { v: 11, zh: '并说：“你如今怀孕要生一个儿子，可以给他起名叫以实玛利（就是神听见的意思），因为耶和华听见了你的苦情。', en: 'And the angel of the Lord said unto her, Behold, thou art with child, and shalt bear a son, and shalt call his name Ishmael; because the Lord hath heard thy affliction.' },
      { v: 12, zh: '他为人必像野驴。他的手要攻打人，人的手也要攻打他；他必住在众弟兄的东边。”', en: 'And he will be a wild man; his hand will be against every man, and every man\'s hand against him; and he shall dwell in the presence of all his brethren.' },
      { v: 13, zh: '夏甲就称那对她说话的耶和华为“看顾人的神”。因而说：“在这里我也看见那看顾我的吗？”', en: 'And she called the name of the Lord that spake unto her, Thou God seest me: for she said, Have I also here looked after him that seeth me?' },
      { v: 14, zh: '所以这井名叫庇耳‧拉海‧莱。这井正在加低斯和巴列中间。', en: 'Wherefore the well was called Beer–lahai–roi; behold, it is between Kadesh and Bered.' },
      { v: 15, zh: '后来夏甲给亚伯兰生了一个儿子；亚伯兰给他起名叫以实玛利。', en: 'And Hagar bare Abram a son: and Abram called his son\'s name, which Hagar bare, Ishmael.' },
      { v: 16, zh: '夏甲给亚伯兰生以实玛利的时候，亚伯兰年八十六岁。', en: 'And Abram was fourscore and six years old, when Hagar bare Ishmael to Abram.' },
    ],
  },
  { date: '2026-12-03', leader: 'A' },
  { date: '2026-12-10', leader: 'R' },
  { date: '2026-12-17', leader: 'R' },
  { date: '2026-12-24', special: '庆祝圣诞' },
  { date: '2026-12-31', special: '迎接新年' },
];

/** 多伦多当前日期 YYYY-MM-DD */
export function torontoToday(d = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: GROUP.tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
}

/** 构建时“下一次”聚会：日期 >= 今天的第一个（周四当天仍算本周） */
export function nextMeeting(today = torontoToday()): Meeting | undefined {
  return meetings.find((m) => m.date >= today) ?? meetings[meetings.length - 1];
}

/** 本周预告：下一次有章节内容的聚会 */
export function previewMeeting(today = torontoToday()): Meeting | undefined {
  return meetings.find((m) => m.date >= today && m.chapter) ?? [...meetings].reverse().find((m) => m.chapter);
}

export function chapterNum(m?: Meeting): number {
  const n = m?.chapter?.match(/(\d+)/);
  return n ? Number(n[1]) : 0;
}

export function fmtDate(iso: string): string {
  const [, mo, d] = iso.split('-').map(Number);
  return `${mo} 月 ${d} 日`;
}
