import type { ChapterNote } from './types';

const note: ChapterNote = {
  n: 1,
  summary:
    '我们敬拜独一、圣洁、慈爱的神：圣父、圣子、圣灵。他创造万有，在耶稣基督里带来救恩，又呼召一群子民来敬拜他、为他作见证。神远超过我们的理解，却在他的儿子身上把自己启示出来；他的一切属性都在“爱”里完全。',
  overview: [
    [
      { text: '神是真实存在的，凡凭信心亲近他的人，他都喜悦。', fn: 1 },
      { text: '我们敬拜那位独一、圣洁、慈爱的神，他永远是圣父、圣子、圣灵。', fn: 2 },
      { text: '神创造了一切看得见和看不见的，藉着耶稣基督带来救恩和新生命，并且继续扶持教会和万有，直到世代的终结。' },
    ],
    [
      { text: '从亚伯拉罕和撒拉开始，神呼召一群有信心的子民：只敬拜他，为神对人和万物的心意作见证，并且爱人如己。', fn: 3 },
      { text: '我们因着基督的信实，在圣灵感动下承认他是救主和主，就加入了这群子民。', fn: 4 },
    ],
    [
      { text: '我们谦卑地承认，神远远超过人所能明白的。', fn: 5 },
      { text: '神曾用多种方法向人说话，最重要的是藉着他的儿子，就是成了肉身的道，把神的本性和品格显明出来。', fn: 6 },
    ],
    [
      { text: '神的属性看起来像是成对的：可畏的荣耀与长久的怜悯，在“圣洁的爱”里完全；至高的主权与无尽的慈悲，在“全能的爱”里完全；无所不知与对万物的看顾，在“保守的爱”里完全；恩典与对罪的忿怒，在“公义的爱”里完全；乐意赦免与改变人的大能，在“救赎的爱”里完全；无限的公义与长久的忍耐，在“受苦的爱”里完全；无限的自由与不断的舍己，在“信实的爱”里完全。', fn: 7 },
      { text: '愿荣耀归给这位圣洁、永远慈爱的三一真神。' },
    ],
  ],
  points: [
    { title: '独一的三一神', text: '只有一位神，他永远是圣父、圣子、圣灵。我们敬拜的是这位又圣洁、又慈爱的神。' },
    { title: '创造、拯救、扶持', text: '神创造万有，藉着耶稣基督带来救恩，现在仍然扶持教会和整个世界。' },
    { title: '呼召一群子民', text: '从亚伯拉罕和撒拉开始，神呼召人来敬拜他、为他作见证、爱人如己。我们是因着基督加入这群人的。' },
    { title: '超越却可以认识', text: '神远超我们的理解，但他在耶稣基督身上真实地启示了自己，所以我们可以真认识他。' },
    { title: '一切都在爱里', text: '神的公义和怜悯、忿怒和恩典并不矛盾，都在他的爱里完全合一。所以本章说“公义的爱”“受苦的爱”，而不是把公义和爱对立起来。' },
  ],
  terms: [
    ['神', 'God'],
    ['圣父、圣子、圣灵', 'Father, Son, and Holy Spirit'],
    ['三一的', 'triune'],
    ['启示', 'revelation'],
    ['圣洁的爱', 'holy love'],
    ['公义的爱', 'righteous love'],
    ['受苦的爱', 'suffering love'],
    ['信实的爱', 'faithful love'],
  ],
  footnotes: [
    {
      fn: 1,
      refs: '出 3:13-14；来 11:6',
      about: '神是“自有永有的”；到神面前来的人必须信有神',
      verses: [
        {
          zh: '人非有信，就不能得神的喜悦；因为到神面前来的人必须信有神，且信他赏赐那寻求他的人。',
          en: "And it is impossible to please God without faith. Anyone who wants to come to him must believe that God exists and that he rewards those who sincerely seek him.",
          ref: '希伯来书 11:6',
        },
      ],
    },
    {
      fn: 2,
      refs: '出 20:1-6；申 6:4；太 28:19；林后 13:14',
      about: '独一的神；奉父、子、圣灵的名',
      verses: [
        { zh: '以色列啊，你要听！耶和华我们神是独一的主。', en: "Listen, O Israel! The Lord is our God, the Lord alone.", ref: '申命记 6:4' },
        {
          zh: '所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗。',
          en: "Therefore, go and make disciples of all the nations, baptizing them in the name of the Father and the Son and the Holy Spirit.",
          ref: '马太福音 28:19',
        },
      ],
    },
    { fn: 3, refs: '创 12:2-3；利 19:18；罗 4:11-25；彼前 3:9-11', about: '神呼召亚伯拉罕，叫万族因他得福；爱人如己', verses: [] },
    { fn: 4, refs: '加 2:20；罗 3:22', about: '因信基督，我们与神的子民联合', verses: [] },
    {
      fn: 5,
      refs: '出 3:13-14；伯 37；赛 40:18-25；罗 11:33-36',
      about: '神远超人的理解',
      verses: [
        {
          zh: '深哉，神丰富的智慧和知识！他的判断何其难测！他的踪迹何其难寻！',
          en: "Oh, how great are God's riches and wisdom and knowledge! How impossible it is for us to understand his decisions and his ways!",
          ref: '罗马书 11:33',
        },
      ],
    },
    {
      fn: 6,
      refs: '约 1:14, 18；来 1:1-4',
      about: '神藉着儿子向我们说话',
      verses: [
        {
          zh: '道成了肉身，住在我们中间，充充满满地有恩典有真理。我们也见过他的荣光，正是父独生子的荣光。',
          en: "So the Word became human and made his home among us. He was full of unfailing love and faithfulness. And we have seen his glory, the glory of the Father's one and only Son.",
          ref: '约翰福音 1:14',
        },
      ],
    },
    {
      fn: 7,
      refs: '出 20:4-6；34:5-7；诗 25:4-10；赛 6；54:10；太 5:48；罗 2:5-11；3:21-26；约一 4:8, 16',
      about: '神的圣洁、公义、怜悯与爱',
      verses: [
        {
          zh: '神爱我们的心，我们也知道也信。神就是爱；住在爱里面的，就是住在神里面，神也住在他里面。',
          en: "We know how much God loves us, and we have put our trust in his love. God is love, and all who live in love live in God, and God lives in them.",
          ref: '约翰一书 4:16',
        },
      ],
    },
  ],
  commentary: [
    {
      title: '三位一体',
      text: '我们藉着启示认识的神，就是神真实的样子。承认神是圣父、圣子、圣灵，就是承认圣子和圣灵都完全是神，而神是三而一的。早期重洗派多用圣经的语言来讲神，“三一”这个词虽然不在圣经里，但很贴切。',
    },
    {
      title: '创造主和救赎主是同一位',
      text: '创造主的标准和救赎主启示的标准并不冲突。不能说“作为创造主的神”允许暴力，而“作为救赎主的神”才要求和平。神对人生活的心意，在耶稣基督身上显明得最完全。',
    },
    {
      title: '在关系中认识神',
      text: '我们对神的认识主要来自神与他子民的关系和历史，从呼召亚伯拉罕和撒拉开始。但这位神也是全地和全人类的神，在呼召特定的子民之前，他已经藉着创造向人说话。',
    },
    {
      title: '神的属性在爱里合一',
      text: '神超越人的理解，又真的可以被认识，我们的认识就在这两者之间。神的公义和怜悯在我们看来好像矛盾，在神里面却完全合一。圣经把神的爱放在很重要的位置，所以本章用“公义的爱”这样的说法。',
    },
  ],
  questions: [
    '本章说神“远超过人所能明白的”，却又可以真实地认识。你最近对神有什么新的认识？',
    '本章把神的属性两两配对，比如“恩典与忿怒”在“公义的爱”里完全。哪一对最让你有感触？为什么？',
    '神呼召子民“只敬拜他、作见证、爱人如己”。这三件事在你的生活里各是什么样子？',
    '为什么本章强调认识神最重要的途径是耶稣基督？读约翰福音 1:14, 18 想一想。',
  ],
  next: '认识了神，第 2 章接着讲神怎样藉着耶稣基督把自己完全启示出来。',
};

export default note;
