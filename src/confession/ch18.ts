import type { ChapterNote } from './types';

const note: ChapterNote = {
  n: 18,
  summary:
    '作门徒就是认识在圣灵里的生命。当我们经历与神的关系，基督的生、死、复活就在我们里面成形，我们渐渐长成他的样式。祷告、读经、默想、敬拜、唱诗、简朴、见证和服侍等属灵操练，帮助我们与神的关系不断加深。',
  overview: [
    [{ text: '我们相信作门徒就是认识在圣灵里的生命。当我们经历与神的关系，基督的生、死、复活就在我们里面成形，我们长成他的样式。在个人和群体的敬拜中，圣灵都同在，带领我们更深地进入神的智慧。' }],
    [
      { text: '我们承认基督、接受洗礼，就与神有了新的关系。整个生命都被释放、改变、重整、更新，我们降服自己，让圣灵把我们塑造成基督的样式。', fn: 1 },
      { text: '无论个人还是教会，都要反映基督的道路，被圣灵充满，长进连于元首基督，教会就在爱中被建立。', fn: 2 },
    ],
    [
      { text: '我们从基督支取圣灵的生命，像枝子从葡萄树支取生命；常在他里面，就能结果子。', fn: 3 },
      { text: '在圣灵的同在中，我们与圣灵的步伐一致，在行动中显出圣灵的果子，', fn: 4 },
      { text: '使外在的行为与内在的生命相符。' },
    ],
    [
      { text: '祷告、查经、默想神、群体敬拜、唱诗、简朴、见证和服侍等属灵操练，是在敬虔上操练自己。', fn: 5 },
      { text: '它们使我们与神的关系不断加深，预备我们面对试炼和苦难；在平静的日子操练，困难的时候就更容易认出神的同在。' },
    ],
    [
      { text: '没有什么能使我们与神在基督耶稣里的爱隔绝；', fn: 6 },
      { text: '神能使用喜乐和苦难来培育我们属灵的成长。', fn: 7 },
      { text: '基督在我们里面，是我们得荣耀的盼望。', fn: 8 },
      { text: '我们期待那面对面的日子，那时我们部分的认识就要完全。', fn: 9 },
    ],
  ],
  points: [
    { title: '在圣灵里的生命', text: '灵性不是脱离生活的神秘经验，而是基督的生命在我们里面成形。' },
    { title: '常在葡萄树上', text: '像枝子连于葡萄树，常在基督里才能结果子。' },
    { title: '内外一致', text: '外在的行为要与内在的生命相符，灵性和伦理不能分开。' },
    { title: '属灵操练', text: '祷告、读经、默想、敬拜、唱诗、简朴、见证、服侍。平时操练，难时得力。' },
    { title: '个人与群体', text: '个人灵修和群体敬拜都是圣灵工作的场合。' },
  ],
  terms: [
    ['灵性', 'spirituality'],
    ['属灵操练', 'spiritual disciplines'],
    ['常在', 'abide'],
    ['降服（Gelassenheit）', 'yieldedness'],
    ['跟随基督（Nachfolge）', 'following Christ'],
  ],
  footnotes: [
    {
      fn: 1,
      refs: '林后 3:17-18；腓 3:21',
      about: '变成主的形状，荣上加荣',
      verses: [
        {
          zh: '我们众人既然敞着脸得以看见主的荣光，好像从镜子里返照，就变成主的形状，荣上加荣，如同从主的灵变成的。',
          en: 'But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord.',
          ref: '哥林多后书 3:18',
        },
      ],
    },
    { fn: 2, refs: '弗 4:15-16', about: '长进连于元首基督', verses: [] },
    {
      fn: 3,
      refs: '约 15:5-8',
      about: '我是葡萄树，你们是枝子',
      verses: [
        {
          zh: '我是葡萄树，你们是枝子。常在我里面的，我也常在他里面，这人就多结果子；因为离了我，你们就不能做什么。',
          en: 'I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.',
          ref: '约翰福音 15:5',
        },
      ],
    },
    { fn: 4, refs: '诗 1；加 5:22-26', about: '圣灵的果子；靠圣灵行事', verses: [] },
    {
      fn: 5,
      refs: '提前 4:7-8',
      about: '在敬虔上操练自己',
      verses: [
        {
          zh: '在敬虔上操练自己。操练身体益处还少；惟独敬虔，凡事都有益处，因有今生和来生的应许。',
          en: 'Exercise thyself rather unto godliness. For bodily exercise profiteth little: but godliness is profitable unto all things, having promise of the life that now is, and of that which is to come.',
          ref: '提摩太前书 4:7-8',
        },
      ],
    },
    { fn: 6, refs: '罗 8:35-39', about: '谁能使我们与基督的爱隔绝', verses: [] },
    { fn: 7, refs: '太 5:1-12；诗 119:67', about: '八福；受苦以前我走迷了路', verses: [] },
    {
      fn: 8,
      refs: '西 1:27',
      about: '基督在你们心里成了有荣耀的盼望',
      verses: [],
    },
    {
      fn: 9,
      refs: '林前 13:12',
      about: '那时就要面对面了',
      verses: [
        {
          zh: '我们如今仿佛对着镜子观看，模糊不清，到那时就要面对面了。我如今所知道的有限，到那时就全知道，如同主知道我一样。',
          en: 'For now we see through a glass, darkly; but then face to face: now I know in part; but then shall I know even as also I am known.',
          ref: '哥林多前书 13:12',
        },
      ],
    },
  ],
  commentary: [
    { title: '重洗派的用词', text: '“灵性”是比较新的词。重洗派和门诺会用的是敬虔、谦卑、Gelassenheit（降服）、Frömmigkeit（敬虔）、Nachfolge（跟随基督）等词。这些观念都把灵性和伦理、行动看成分不开的，所以本信条把灵性放在门徒生活里讨论。' },
    { title: '两种灵性传统', text: '一种受希腊哲学影响，追求被吸纳进神里面，爱邻舍只是副产品；另一种出于圣经，追求以基督的生、死、复活为中心、与神立约相交。本信条认同第二种，用圣经中的基督和他的道路来定义基督徒的灵性。' },
    { title: '个人与群体', text: '圣灵同在于个人，也同在于群体；聚集的教会和每个信徒都被称为圣灵的殿。个人灵修和群体敬拜、个人行动和群体活动，都是圣灵工作的场合。' },
    { title: '操练不止这些', text: '本章列出的属灵操练并不完整，禁食、写灵修日记、施舍等也可以包括。操练本身是好的，也带来果效：查经加深对神的认识，敬拜带来成长和赞美，施舍使我们不被财物捆绑，也帮助穷人。' },
  ],
  questions: [
    '你现在有哪些固定的属灵操练？哪一种最帮助你亲近神？',
    '“平时操练，难时得力”，你有没有过这样的经历？',
    '约翰福音 15:5 说“离了我，你们就不能做什么”。在什么事上你最容易忘记依靠主？',
    '你想尝试哪一种新的属灵操练（例如默想经文、灵修日记、禁食、简朴生活）？',
  ],
  hope: {
    zh: '就是历世历代所隐藏的奥秘，但如今向他的圣徒显明了。神愿意叫他们知道，这奥秘在外邦人中有何等丰盛的荣耀，就是基督在你们心里成了有荣耀的盼望。',
    en: 'Even the mystery which hath been hid from ages and from generations, but now is made manifest to his saints: To whom God would make known what is the riches of the glory of this mystery among the Gentiles; which is Christ in you, the hope of glory:',
    ref: '歌罗西书 1:26-27',
  },
  next: '第 19 章讲家庭、单身与婚姻：神的心意是人在家庭中开始生命并蒙福，也邀请所有人加入神的家。',
};

export default note;
