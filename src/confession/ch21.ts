import type { ChapterNote } from './types';

const note: ChapterNote = {
  n: 21,
  summary:
    '万物都属于神，神呼召教会忠心地管理他所托付的一切：福音、恩赐、时间、大地、金钱和财物。我们过简朴的生活，彼此互助，追求经济上的公义，乐意慷慨地奉献，先求神的国，并在今天就活出神所应许的安息与公义。',
  overview: [
    [{ text: '我们相信万物都属于神，神呼召教会作他所托付一切的忠心管家。' }],
    [
      { text: '作为神的仆人，我们首要的呼召是在神的家中作管家。', fn: 1 },
      { text: '赐我们在基督里新生命的神，也赐下属灵的恩赐，为了教会的造就和使命。', fn: 2 },
      { text: '和好的信息托付给了每个信徒，好让福音的奥秘藉着教会被世界知道。', fn: 3 },
    ],
    [
      { text: '时间也属于神，要谨慎使用。', fn: 4 },
      { text: '从起初，神的子民就被呼召守特别的安息和敬拜的日子。旧约中第七日是圣日，因为神在创造之后安息了；', fn: 5 },
      { text: '安息日也是圣的，因为神拯救希伯来人脱离了埃及的奴役。', fn: 6 },
      { text: '藉着耶稣，一切时间都是圣的，被分别出来为了拯救、医治和公义。', fn: 7 },
      { text: '教会现在守一个圣洁安息的日子，通常是每周的第一日，并在一切时间里活出安息日的公义。' },
    ],
    [
      { text: '神是造物主，拥有万物。安息年和禧年表明土地属于神，以色列也属于神。', fn: 8 },
      { text: '耶稣开始传道时，宣告了“耶和华的恩年”（常与禧年连在一起）：好消息临到贫穷的人，被掳的得释放，受压制的得自由。', fn: 9 },
      { text: '耶路撒冷的教会藉着传道、医病和凡物公用活出禧年；其他早期教会也把钱分享给有需要的人。', fn: 10 },
    ],
    [
      { text: '作为大地的管家，基督徒照顾它，使土地和活物得到安息和更新。', fn: 11 },
      { text: '作为金钱和财物的管家，我们过简朴的生活，彼此互助，维护经济公义，并且慷慨、乐意地奉献。', fn: 12 },
      { text: '我们依靠神的供应，不为生活所需忧虑，而是先求神的国。', fn: 13 },
      { text: '被发财的欲望辖制的生活，不能事奉神。' },
    ],
    [
      { text: '基督徒是神家中的管家，被分别出来事奉神，今天就活出神所应许的安息与公义，', fn: 14 },
      { text: '一边等候主人回来，等候万物在新天新地中复兴。' },
    ],
  ],
  points: [
    { title: '万物属神', text: '我们不是主人，而是管家：福音、恩赐、时间、大地、金钱都是神托付的。' },
    { title: '时间是圣的', text: '守安息日，也在一切时间里活出安息日的公义、医治和拯救。' },
    { title: '禧年的精神', text: '土地属于神；耶稣宣告的恩年包括释放被掳的、帮助贫穷的。' },
    { title: '简朴与慷慨', text: '简朴不是为了省钱，而是出于对神的依靠；乐意奉献、彼此互助、追求经济公义。' },
    { title: '照顾受造界', text: '管家职分也包括照顾大地和动植物，不只是人。' },
  ],
  terms: [
    ['管家职分', 'stewardship'],
    ['安息日', 'Sabbath'],
    ['禧年', 'Jubilee'],
    ['简朴的生活', 'simple living'],
    ['互助', 'mutual aid'],
    ['经济公义', 'economic justice'],
  ],
  footnotes: [
    { fn: 1, refs: '路 12:35-48；林前 4:1-2', about: '忠心有见识的管家', verses: [] },
    { fn: 2, refs: '彼前 4:10-11；多 1:7；2:5', about: '神百般恩赐的好管家', verses: [] },
    { fn: 3, refs: '林后 5:18-20；弗 3:1-10', about: '和好的职分', verses: [] },
    {
      fn: 4,
      refs: '诗 31:15；弗 5:15-16；西 4:5',
      about: '爱惜光阴',
      verses: [
        {
          zh: '你们要谨慎行事，不要像愚昧人，当像智慧人。要爱惜光阴，因为现今的世代邪恶。',
          en: "So be careful how you live. Don't live like fools, but like those who are wise. Make the most of every opportunity in these evil days.",
          ref: '以弗所书 5:15-16',
        },
      ],
    },
    { fn: 5, refs: '出 20:8-11', about: '当记念安息日，守为圣日', verses: [] },
    { fn: 6, refs: '申 5:12-15', about: '记念神拯救你出埃及', verses: [] },
    {
      fn: 7,
      refs: '可 2:27-28',
      about: '安息日是为人设立的',
      verses: [
        {
          zh: '又对他们说：“安息日是为人设立的，人不是为安息日设立的。所以，人子也是安息日的主。”',
          en: "Then Jesus said to them, \"The Sabbath was made to meet the needs of people, and not people to meet the requirements of the Sabbath. So the Son of Man is Lord, even over the Sabbath!\"",
          ref: '马可福音 2:27-28',
        },
      ],
    },
    { fn: 8, refs: '利 25:23, 42, 55', about: '地是我的', verses: [] },
    { fn: 9, refs: '路 4:16-21', about: '报告神悦纳人的禧年', verses: [] },
    { fn: 10, refs: '徒 2:44-45；4:32-37；林后 8:1-15', about: '凡物公用，均平', verses: [] },
    {
      fn: 11,
      refs: '诗 24:1；创 1:26-28',
      about: '地和其中所充满的都属耶和华',
      verses: [
        {
          zh: '地和其中所充满的，世界和住在其间的，都属耶和华。',
          en: "The earth is the Lord's, and everything in it. The world and all its people belong to him.",
          ref: '诗篇 24:1',
        },
      ],
    },
    {
      fn: 12,
      refs: '腓 4:11-12；林后 8:13-14；雅 5:4；林后 9:7',
      about: '知足；乐意捐的人是神所喜爱的',
      verses: [
        {
          zh: '各人要随本心所酌定的，不要作难，不要勉强，因为捐得乐意的人是神所喜爱的。',
          en: "You must each decide in your heart how much to give. And don't give reluctantly or in response to pressure. \"For God loves a person who gives cheerfully.\"",
          ref: '哥林多后书 9:7',
        },
      ],
    },
    {
      fn: 13,
      refs: '太 6:24-33',
      about: '不能又事奉神，又事奉玛门',
      verses: [
        {
          zh: '一个人不能事奉两个主；不是恶这个爱那个，就是重这个轻那个。你们不能又事奉神，又事奉玛门。',
          en: "No one can serve two masters. For you will hate one and love the other; you will be devoted to one and despise the other. You cannot serve God and be enslaved to money.",
          ref: '马太福音 6:24',
        },
      ],
    },
    {
      fn: 14,
      refs: '太 11:28-29；启 7:15-17',
      about: '到我这里来，我就使你们得安息',
      verses: [
        {
          zh: '凡劳苦担重担的人可以到我这里来，我就使你们得安息。',
          en: "Then Jesus said, \"Come to me, all of you who are weary and carry heavy burdens, and I will give you rest.\"",
          ref: '马太福音 11:28',
        },
      ],
    },
  ],
  commentary: [
    { title: '“管家”的意思', text: '新约里“管家”主要和福音有关，但广义上是说神是一家之主，基督徒是被托付责任的仆人、管理者或儿女，包括分享福音和管理时间、财物和金钱。' },
    { title: '简朴与互助', text: '简朴的生活是出于对神的依靠，不是为节省而节省。互助（包括凡物公用）延续了以色列照顾寡妇、孤儿、寄居者和穷人的传统，十一奉献和初熟的果子也是这种分享的一部分。' },
    { title: '安息日的公义', text: '经济公义是安息日循环的一部分。安息日、安息年和禧年带来安息、归还土地、免债和释放，使经济定期趋向平等。基督徒要寻求神的国，拒绝消费主义、贪婪和占有欲。' },
    { title: '禧年的实践', text: '旧约确实实行过安息年和禧年。耶路撒冷教会持续的分享，可以看作禧年在城市中的应用。' },
    { title: '照顾全部受造界', text: '管家职分包括照顾所有受造之物，不只是人。动物和田地也因安息日受益，所以要正确使用地球的资源。' },
  ],
  questions: [
    '如果你的时间、金钱和能力都是神“托付”的，这周你会怎样用得不一样？',
    '你有规律的安息吗？安息怎样提醒你“我不是主人”？',
    '哥林多后书 9:7 说要“乐意”地捐。什么会使奉献变得勉强？什么会使它变得喜乐？',
    '在照顾环境、简朴生活上，你可以做哪一件小事？',
  ],
  next: '第 22 章讲和平、公义与不抵抗：和平是神的旨意，在基督里完全显明。',
};

export default note;
