// 信仰历程时间线。以后有新的节点，直接在数组末尾加一项即可。
// 注意：这里是公开内容，不写人名、教会名、城市和精确日期。
export interface JourneyNode {
  when: string; // 只写到年、季节或月份
  title: string;
  text: string;
  verse?: { zh: string; en: string; ref: string };
  link?: { href: string; label: string };
}

export const JOURNEY: JourneyNode[] = [
  {
    when: '来加拿大之前',
    title: '一段艰难的日子',
    text: '我们一家经历过一段很艰难的日子，常常觉得无助，心里没有平安，也不知道可以依靠谁。',
  },
  {
    when: '刚到加拿大',
    title: '异乡的孤单',
    text: '人生地不熟，语言也不通，除了家人几乎不和别人来往。心里很孤单，也很焦虑。',
  },
  {
    when: '2024 年春',
    title: '第一次走进教会',
    text: '一位朋友邀请我们去教会。我们抱着认识一些朋友的想法去了，没想到从此每个主日都去。',
    verse: {
      zh: '凡劳苦担重担的人可以到我这里来，我就使你们得安息。',
      en: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
      ref: '马太福音 11:28',
    },
  },
  {
    when: '2024 年',
    title: '每个主日，一家人一起去教会',
    text: '孩子在儿童主日学里听圣经故事，回家还会讲给我们听。我们也参加了教会的英文交流小组，教会成了我们在异乡第一个觉得被接纳、觉得安全的地方。',
  },
  {
    when: '2024 年',
    title: '被接纳，被代祷',
    text: '我们把过去的难处讲给牧师和弟兄姊妹听。他们没有一句责备，只是为我们祷告、为我们祝福。多年的重担好像被轻轻放下了。',
    verse: {
      zh: '耶和华靠近伤心的人，拯救灵性痛悔的人。',
      en: 'The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.',
      ref: '诗篇 34:18',
    },
  },
  {
    when: '2025 年',
    title: '开始参加查经小组',
    text: '每周和弟兄姊妹一起读经、分享、祷告，慢慢明白圣经的话，也学着在生活里信靠神。',
  },
  {
    when: '2025 年夏',
    title: '受洗',
    text: '我在我们的教会受洗，在弟兄姊妹面前公开宣告：我愿意一生跟随耶稣。',
    verse: {
      zh: '若有人在基督里，他就是新造的人，旧事已过，都变成新的了。',
      en: 'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.',
      ref: '哥林多后书 5:17',
    },
  },
  {
    when: '2025 年秋',
    title: '开始在教会做义工',
    text: '以前我是被接待、被帮助的那一个，现在也能用自己的一点时间去接待别人、服侍别人，心里很喜乐。',
  },
  {
    when: '2026 年秋',
    title: '开始整理主日笔记',
    text: '把每个主日听到的道认真记下来，经文中英对照，免得忘记神对我说的话。',
    link: { href: '/category/sermon/', label: '看主日笔记' },
  },
  {
    when: '2026 年 11 月',
    title: '建立这个网站',
    text: '把成长的点点滴滴记在这里，也希望和更多人分享耶稣基督的好消息。',
    verse: {
      zh: '我们晓得万事都互相效力，叫爱神的人得益处，就是按他旨意被召的人。',
      en: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.',
      ref: '罗马书 8:28',
    },
    link: { href: '/gospel/', label: '认识福音' },
  },
  {
    when: '2026 年 11 月',
    title: '加入每周四的线上读经小组',
    text: '第一次参加，大家一起读《创世记》第 15 章，先彼此代祷，再读经、分享。结束的时候大家都说时间过得太快，意犹未尽。从此每周四晚上，又多了一段和弟兄姊妹一起亲近神的时间。',
    verse: {
      zh: '亚伯兰信耶和华，耶和华就以此为他的义。',
      en: 'And he believed in the LORD; and he counted it to him for righteousness.',
      ref: '创世记 15:6',
    },
  },
];
