import type { ChapterNote } from './types';

const note: ChapterNote = {
  n: 4,
  summary:
    '圣经都是神藉着圣灵默示的，为要教导人得救、学习公义。我们接受圣经为神的话，是信仰和生活完全可靠的标准，并在圣灵带领下、在教会中、与耶稣基督相和谐地解释圣经。',
  overview: [
    [{ text: '圣经都是神藉着圣灵默示的，为要教导人得救、在公义上受训练。我们接受圣经是神的话，是信仰和生活完全可靠、值得信赖的标准，并在圣灵引导下、在教会中，与耶稣基督相和谐地去解释它。' }],
    [
      { text: '神在许多世代里动工，使旧约和新约被默示、被写下来。', fn: 1 },
      { text: '神藉着圣灵感动作见证的人，写下人得救、信仰与生活的引导、以及敬虔所需要的。', fn: 2 },
    ],
    [
      { text: '我们接受圣经是写下来的神的话。神曾藉着先知和使徒说话，', fn: 3 },
      { text: '更藉着那活的道，真实无伪地启示神的真理。', fn: 4 },
      { text: '圣经也是用人的语言写成、完全可靠可信的神的话。', fn: 5 },
      { text: '神继续藉着活的道和写下的道说话。', fn: 6 },
      { text: '因为耶稣基督是成了肉身的道，整本圣经都以他为中心，也在他身上应验。', fn: 7 },
    ],
    [{ text: '圣经是讲道和教导信仰与生活的权威来源和标准，用来分辨真理与错谬、善与恶，也引导祷告和敬拜。其他的声音，比如传统、文化、经验、理性和政治权力，都要被圣经检验和纠正。', fn: 8 }],
    [
      { text: '圣经是教会必不可少的书，圣灵藉着它培育人顺服地信耶稣，引导教会的教导、见证和敬拜。我们立志恒常喜爱读经、查经、默想圣经。', fn: 9 },
      { text: '我们一同参与解释圣经，分辨神在今天说什么，并用圣经的光察验一切。', fn: 10 },
      { text: '个人对经文的领受，要在信仰群体中被检验。' },
    ],
  ],
  points: [
    { title: '神所默示', text: '圣经是神藉着圣灵感动人写成的，是用人的语言写下的神的话。' },
    { title: '以基督为中心', text: '耶稣是成了肉身的道，整本圣经都指向他、在他身上应验。解经要与基督相和谐。' },
    { title: '最高的标准', text: '传统、文化、经验、理性和政治权力都要被圣经检验，而不是反过来。' },
    { title: '在群体中读经', text: '我们一起读、一起解释；个人的领受要在教会中被检验。' },
    { title: '喜爱神的话', text: '恒常地读经、查经、默想，是信徒生命的养分。' },
  ],
  terms: [
    ['默示', 'inspired'],
    ['神的话', 'the Word of God'],
    ['活的道', 'the living Word'],
    ['权威', 'authority'],
    ['解释圣经', 'interpret Scripture'],
    ['信仰群体', 'faith community'],
  ],
  footnotes: [
    {
      fn: 1,
      refs: '耶 30:2；耶 36；提后 3:16',
      about: '圣经是神所默示的',
      verses: [
        {
          zh: '圣经都是神所默示的，于教训、督责、使人归正、教导人学义都是有益的，',
          en: "All Scripture is inspired by God and is useful to teach us what is true and to make us realize what is wrong in our lives. It corrects us when we are wrong and teaches us to do what is right.",
          ref: '提摩太后书 3:16',
        },
      ],
    },
    {
      fn: 2,
      refs: '彼后 1:21',
      about: '人被圣灵感动说出神的话',
      verses: [
        {
          zh: '因为预言从来没有出于人意的，乃是人被圣灵感动，说出神的话来。',
          en: "or from human initiative. No, those prophets were moved by the Holy Spirit, and they spoke from God.",
          ref: '彼得后书 1:21',
        },
      ],
    },
    { fn: 3, refs: '出 20:1；耶 1:9-10；加 1:11-12；来 1:1-4', about: '神藉先知和使徒说话', verses: [] },
    { fn: 4, refs: '约 1:14, 18；启 19:13', about: '活的道', verses: [] },
    {
      fn: 5,
      refs: '箴 30:5；约 10:35',
      about: '神的话完全可靠',
      verses: [
        { zh: '神的言语句句都是炼净的；投靠他的，他便作他们的盾牌。', en: "Every word of God proves true. He is a shield to all who come to him for protection.", ref: '箴言 30:5' },
      ],
    },
    {
      fn: 6,
      refs: '赛 55:10-11；约 20:31',
      about: '神的话必不徒然返回',
      verses: [
        {
          zh: '我口所出的话也必如此，决不徒然返回，却要成就我所喜悦的，在我发他去成就的事上必然亨通。',
          en: "It is the same with my word. I send it out, and it always produces fruit. It will accomplish all I want it to, and it will prosper everywhere I send it.",
          ref: '以赛亚书 55:11',
        },
      ],
    },
    {
      fn: 7,
      refs: '太 5:17；路 24:27；徒 4:11',
      about: '整本圣经指向基督',
      verses: [
        {
          zh: '于是从摩西和众先知起，凡经上所指着自己的话都给他们讲解明白了。',
          en: "Then Jesus took them through the writings of Moses and all the prophets, explaining from all the Scriptures the things concerning himself.",
          ref: '路加福音 24:27',
        },
      ],
    },
    {
      fn: 8,
      refs: '可 7:13；徒 5:29-32；西 2:6-23',
      about: '一切都要用圣经来检验',
      verses: [
        { zh: '彼得和众使徒回答说：顺从神，不顺从人，是应当的。', en: "But Peter and the apostles replied, \"We must obey God rather than any human authority.\"", ref: '使徒行传 5:29' },
      ],
    },
    {
      fn: 9,
      refs: '诗 1:2；提前 4:13；提后 3:15-17',
      about: '昼夜思想神的话',
      verses: [
        { zh: '惟喜爱耶和华的律法，昼夜思想，这人便为有福！', en: "But they delight in the law of the Lord, meditating on it day and night.", ref: '诗篇 1:2' },
      ],
    },
    {
      fn: 10,
      refs: '徒 15:13-20；来 4:2-8, 12',
      about: '在群体中分辨神的话',
      verses: [
        {
          zh: '神的道是活泼的，是有功效的，比一切两刃的剑更快，甚至魂与灵，骨节与骨髓，都能刺入、剖开，连心中的思念和主意都能辨明。',
          en: "For the word of God is alive and powerful. It is sharper than the sharpest two-edged sword, cutting between soul and spirit, between joint and marrow. It exposes our innermost thoughts and desires.",
          ref: '希伯来书 4:12',
        },
      ],
    },
  ],
  commentary: [
    { title: '“神的话”的几层意思', text: '圣经里“神的话”可以指：神藉摩西、先知、使徒传的信息；耶稣宣讲的神国；被传讲的福音；成了肉身的道；以及写下来的神的话。称圣经为神的话，一方面显出“道”的丰富，一方面承认它对教会有权威，其他一切都要用它来衡量。' },
    { title: '权威来自神', text: '圣经的权威最终来自默示它的神（提后 3:16-17）。教会是“承认”这权威，而不是“赋予”它权威。圣经没有解释默示是怎样发生的，我们相信圣经可靠，是因为默示它的那一位是信实真实的。' },
    { title: '正典', text: '旧约 39 卷、新约 27 卷被承认为神所默示的。以色列分律法、先知、圣卷三个阶段，用了几百年接受旧约；到四世纪，教会普遍承认了旧约、福音书、保罗书信，后来逐渐承认新约其他书卷。' },
    { title: '门诺会的读经重点', text: '和其他新教徒一样，门诺会强调圣经在教义上的权威；此外还强调：圣经对伦理、社会和教会治理也有权威；解经要与耶稣基督相和谐；个人的解释要在会众中被检验。' },
  ],
  questions: [
    '你现在有固定的读经习惯吗？什么时候、怎样读最适合你？',
    '本章说传统、文化、经验、理性都要被圣经检验。在你生活里，哪一样最容易“盖过”圣经的声音？',
    '“与耶稣基督相和谐地解经”是什么意思？遇到难懂的经文时，这个原则可以怎样帮助我们？',
    '为什么个人的领受需要在群体中被检验？你在读经小组中有没有过这样的经历？',
  ],
  next: '第 5 章讲创造与神的护理：神创造万有，也一直保守、更新他所造的。',
};

export default note;
