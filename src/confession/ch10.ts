import type { ChapterNote } from './types';

const note: ChapterNote = {
  n: 10,
  summary:
    '教会蒙召宣告神的国，也要成为神国的记号。基督差遣教会作他的见证、使万民作门徒。教会用言语和行动作见证：传福音、呼召悔改、宣告和平、释放受压的，也活出与周围不同的生活，像山上的城。',
  overview: [
    [{ text: '教会蒙召宣告神的国，并成为神国的记号。基督差遣教会作他的见证，使万民作门徒，给他们施洗，教导他们遵守他所吩咐的一切。', fn: 1 }],
    [
      { text: '耶稣宣告神的国近了，呼召人悔改信福音。', fn: 2 },
      { text: '复活以后，他差遣门徒：父怎样差遣了他，他也照样差遣他们，又叫他们受圣灵。', fn: 3 },
      { text: '教会靠着圣灵的能力继续耶稣的事工，聚集一群承认基督为主和救主的新子民。' },
    ],
    [{ text: '教会活出耶稣的道路，按着神国的样式来塑造自己，让世界看见在基督作主之下的生活是什么样子。教会像“山上的城、万民的光”，以和周围社会不同的生活来见证复活。', fn: 4 }],
    [
      { text: '教会用言语和行动作见证：寻找失丧的人、呼召悔改、宣告脱离罪的救恩、传讲和平、释放受欺压的、为公义祷告，像耶稣那样服侍。教会邀请人加入神的子民，但不强迫。教会也可以成为神医治的管道，包括用油膏抹。', fn: 5 },
      { text: '忠心的见证人甘心为救主受苦，甚至舍命。', fn: 6 },
    ],
    [
      { text: '见证是回应耶稣“使人作门徒”的呼召。新信徒学习敬拜、团契、教育、互助、作决定、服侍和宣教。', fn: 7 },
      { text: '新信徒也帮助教会发现使命的新方面。', fn: 8 },
    ],
    [
      { text: '教会的使命是向各国各族的人，正如门徒被吩咐要“直到地极”作见证。', fn: 9 },
      { text: '使命不需要任何国家或帝国保护，因为基督徒在每种文化中都是客旅。教会是神从各族中召出来的子民，它的使命是使分裂的群体和好，成为一个新人，', fn: 10 },
      { text: '预示万民和平地流归耶和华山的那一天。', fn: 11 },
    ],
  ],
  points: [
    { title: '被差遣', text: '父差遣了耶稣，耶稣也照样差遣教会。使命是交给整个群体的，不只是传道人。' },
    { title: '言语与行动', text: '传福音和服侍缺一不可：言语解释行动，行动印证言语。' },
    { title: '活出神国的样子', text: '教会本身就是见证，像山上的城，让人看见在基督作主之下的生活。' },
    { title: '不强迫', text: '大胆传讲和好的福音，但从不强迫人。“见证人”和“殉道者”在新约原文是同一个词。' },
    { title: '向万民', text: '使命不受国界限制，目标是使分裂的群体在基督里和好。' },
  ],
  terms: [
    ['使命 / 宣教', 'mission'],
    ['见证', 'witness'],
    ['使万民作门徒', 'make disciples of all nations'],
    ['山上的城', 'a city on a hill'],
    ['不强迫', 'without coercion'],
    ['另类文化', 'alternative culture'],
  ],
  footnotes: [
    {
      fn: 1,
      refs: '徒 1:8；太 28:19-20',
      about: '大使命',
      verses: [
        {
          zh: '所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗。凡我所吩咐你们的，都教训他们遵守，我就常与你们同在，直到世界的末了。',
          en: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.',
          ref: '马太福音 28:19-20',
        },
      ],
    },
    {
      fn: 2,
      refs: '可 1:15',
      about: '神的国近了',
      verses: [
        { zh: '日期满了，神的国近了。你们当悔改，信福音！', en: 'The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel.', ref: '马可福音 1:15' },
      ],
    },
    { fn: 3, refs: '约 20:21-22；徒 10:36', about: '父怎样差遣我，我也照样差遣你们', verses: [] },
    {
      fn: 4,
      refs: '太 5:13-16；赛 42:6',
      about: '世上的光、山上的城',
      verses: [
        { zh: '你们是世上的光。城造在山上是不能隐藏的。', en: 'Ye are the light of the world. A city that is set on an hill cannot be hid.', ref: '马太福音 5:14' },
      ],
    },
    { fn: 5, refs: '可 6:13；雅 5:14-15', about: '用油膏抹，为病人祷告', verses: [] },
    { fn: 6, refs: '林后 5:14', about: '基督的爱激励我们', verses: [] },
    { fn: 7, refs: '徒 2:41-47', about: '初期教会的生活', verses: [] },
    { fn: 8, refs: '徒 10；15', about: '外邦人归主，教会更明白使命', verses: [] },
    { fn: 9, refs: '徒 1:8', about: '直到地极', verses: [] },
    { fn: 10, refs: '弗 2:15-16', about: '在基督里成为一个新人', verses: [] },
    {
      fn: 11,
      refs: '赛 2:2-4',
      about: '万民流归耶和华的山',
      verses: [
        {
          zh: '他必在列国中施行审判，为许多国民断定是非。他们要将刀打成犁头，把枪打成镰刀。这国不举刀攻击那国，他们也不再学习战事。',
          en: 'And he shall judge among the nations, and shall rebuke many people: and they shall beat their swords into plowshares, and their spears into pruninghooks: nation shall not lift up sword against nation, neither shall they learn war any more.',
          ref: '以赛亚书 2:4',
        },
      ],
    },
  ],
  commentary: [
    { title: '代表基督和教会', text: '基督差遣教会继续他的使命。宣教士和传福音的人是代表基督和教会出去的，不是凭自己。大使命是藉着使徒交给整个群体的。' },
    { title: '言语和行动', text: '使命包括传福音和服侍。单有一样都不够：言语解释行动，行动印证言语。' },
    { title: '医治', text: '身体和心灵的医治与救恩紧密相关，原文同一个词既是“得救”也是“痊愈”（如“你的信救了你”）。教会继续耶稣医治的事工，包括祷告和用油膏抹。' },
    { title: '和平与见证', text: '和平既是福音的内容，也是传福音的方式。福音有能力使任何人悔改得救，教会大胆地传讲和好，但不强迫。新约里“见证人”和“殉道者”是同一个词。' },
    { title: '另类文化', text: '教会蒙召成为一种另类文化，在主流文化、少数文化和海外跨文化宣教。它挑战与信仰冲突的文化迷思，例如个人主义、物质主义、军国主义、民族主义、种族主义、性别歧视，以及否认感官和理性以外一切的世界观。' },
    { title: '唯一的救主', text: '教会宣告耶稣是世界唯一的救主。忠心的见证是不强迫的：承认神在万民中都留下了见证，为基督的工作作证，邀请人跟随他。使命出于爱，也帮助教会更明白福音。' },
  ],
  questions: [
    '“父怎样差遣了我，我也照样差遣你们。”你觉得神现在把你差遣到哪里？（家庭、工作、朋友圈……）',
    '言语和行动哪一样你比较容易做到？哪一样需要多操练？',
    '本章说教会要像“山上的城”。别人从你的生活中能看到什么不同？',
    '本章列出了一些和信仰冲突的文化迷思（个人主义、物质主义等）。哪一个对你影响最大？',
  ],
  next: '第 11 章讲洗礼：信徒受洗是洁净的记号，也是在教会面前立志跟随耶稣。',
};

export default note;
