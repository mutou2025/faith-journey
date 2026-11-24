import type { ChapterNote } from './types';

const note: ChapterNote = {
  n: 8,
  summary:
    '神藉着耶稣的生平、受死和复活，把脱离罪的救恩和新生命白白赐给所有人。人藉着悔改、接受耶稣为救主和主，与神和好，进入神的子民中间。救恩是本乎恩，不是靠功劳；今天经历的救恩，是将来完全救恩的预尝。',
  overview: [
    [{ text: '神藉着耶稣的一生、受死和复活，把脱离罪的救恩和新的生活方式赐给所有人。人藉着悔改、接受耶稣为救主和主来领受，就与神和好，被带进神子民的群体。信徒相信那使基督复活的大能也能拯救他们，现在就跟随基督，并盼望在将来的世代得着完全的救恩。' }],
    [
      { text: '从起初，神就以恩典和怜悯行事：行神迹奇事、拯救他的百姓、与以色列立约。', fn: 1 },
      { text: '时候满足，神差他的儿子来；他忠心至死，死在十字架上，为所有人开了救恩的路。', fn: 2 },
      { text: '基督的血设立了新约。', fn: 3 },
      { text: '他医治、赦罪，救人脱离恶的捆绑和伤害他们的人。', fn: 4 },
      { text: '藉着死和复活，他打破了罪和死的权势，', fn: 5 },
      { text: '涂抹了我们的罪债，', fn: 6 },
      { text: '开了新生命的路。', fn: 7 },
      { text: '救恩是本乎神的恩典，不是靠我们的功劳。', fn: 8 },
    ],
    [
      { text: '人听见福音时，圣灵感动人接受这礼物，神不强迫地使人与他和好。人的回应包括：降服于恩典、单单信靠神、悔改、离开恶、加入蒙赎的群体，并在言语和行为上显出信心的顺服。', fn: 9 },
      { text: '与神和好也包括与人和好，特别是在教会里。', fn: 10 },
      { text: '洗礼公开见证人得救，并立志忠于神和教会。藉着重生，信徒被收纳进神的家，越来越被改变成基督的样式。', fn: 11 },
    ],
    [{ text: '现在经历的救恩，是将来救恩的预尝。那时基督要胜过罪和死，蒙赎的人要永远与神相交。' }],
  ],
  points: [
    { title: '神主动施恩', text: '从出埃及到差遣儿子，救恩一直是神主动的恩典，不是人的功劳。' },
    { title: '基督成就的', text: '他的死和复活打破罪与死的权势、涂抹罪债、开了新生命的路，并用自己的血设立新约。' },
    { title: '人的回应', text: '悔改、信靠、离开恶、加入教会，并在生活中活出信心的顺服。信心和顺服是分不开的。' },
    { title: '和好是双向的', text: '与神和好，也包括与人和好。' },
    { title: '已经与还没有', text: '现在得着的救恩是预尝，将来在基督再来时才得以完全。' },
  ],
  terms: [
    ['救恩', 'salvation'],
    ['恩典', 'grace'],
    ['悔改', 'repent'],
    ['新约', 'new covenant'],
    ['因信称义', 'justification by faith'],
    ['重生', 'new birth'],
    ['赎罪 / 救赎论', 'atonement'],
  ],
  footnotes: [
    { fn: 1, refs: '诗 74:12；申 6:20-25；出 20:1-17', about: '神拯救以色列、与他们立约', verses: [] },
    {
      fn: 2,
      refs: '约 3:16；加 4:4；来 1:1-2',
      about: '神差他的儿子',
      verses: [
        {
          zh: '神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。',
          en: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
          ref: '约翰福音 3:16',
        },
      ],
    },
    { fn: 3, refs: '太 26:28；林前 11:25', about: '立约的血', verses: [] },
    { fn: 4, refs: '罗 5:1-5；可 2:1-12', about: '医治与赦罪', verses: [] },
    { fn: 5, refs: '罗 8:2；来 2:14-15', about: '打破罪和死的权势', verses: [] },
    {
      fn: 6,
      refs: '罗 3:24-25；西 2:13-14；可 10:45',
      about: '涂抹罪债，舍命作多人的赎价',
      verses: [
        {
          zh: '因为人子来，并不是要受人的服侍，乃是要服侍人，并且要舍命，作多人的赎价。',
          en: 'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.',
          ref: '马可福音 10:45',
        },
      ],
    },
    { fn: 7, refs: '罗 6:4', about: '一举一动有新生的样式', verses: [] },
    {
      fn: 8,
      refs: '弗 2:8-9',
      about: '得救本乎恩',
      verses: [
        {
          zh: '你们得救是本乎恩，也因着信；这并不是出于自己，乃是神所赐的；也不是出于行为，免得有人自夸。',
          en: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.',
          ref: '以弗所书 2:8-9',
        },
      ],
    },
    { fn: 9, refs: '罗 1:5；路 19:8-10', about: '信而顺服（撒该的回应）', verses: [] },
    { fn: 10, refs: '罗 5:6-10', about: '我们还作仇敌的时候就与神和好', verses: [] },
    {
      fn: 11,
      refs: '罗 12:2；林后 3:18',
      about: '心意更新而变化',
      verses: [
        {
          zh: '不要效法这个世界，只要心意更新而变化，叫你们察验何为神的善良、纯全、可喜悦的旨意。',
          en: 'And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.',
          ref: '罗马书 12:2',
        },
      ],
    },
  ],
  commentary: [
    { title: '三种理解十字架的方式', text: '历史上有三种主要的赎罪观，都有圣经根据：基督是得胜者，打破罪与死的权势；基督代替我们偿还罪债；基督的爱感动人以爱回应。' },
    { title: '得救的不同经历', text: '有人经历一次很明显的悔改归主，也有人在信仰群体中慢慢被培育。无论哪一种，接受救恩都是个人自愿的决定；在基督徒家庭长大也不会自动得救。' },
    { title: '描述救恩的不同说法', text: '“因信称义”在立约的关系中被经历：神施恩，人信靠并顺服，二者分不开。“重生”“被收纳进神的家”也是描述救恩的方式。新约把救恩和平安（shalom）连在一起，基督不报复的受苦也是我们的榜样。' },
    { title: '在群体中得救', text: '神拯救个人，但救恩是在一群人中间活出来的。教会是在见证人面前立约、彼此负责的地方。' },
    { title: '救恩的范围', text: '救恩包括罪得赦免、脱离恶势力的捆绑、从得罪我们的人手中得释放，以及医治。最终的救恩建立在复活的大能上。' },
  ],
  questions: [
    '你是怎样认识救恩的？更像一次明显的转折，还是在群体中慢慢被培育？',
    '本章说信心和顺服分不开。撒该（路 19:8-10）得救后做了什么？',
    '“与神和好也包括与人和好”。有没有一段关系，是你现在想求神帮助去修复的？',
    '三种理解十字架的方式（得胜、代赎、爱的感动）中，哪一种最打动你？',
  ],
  next: '第 9 章讲教会：接受救恩的人被聚集成为新的群体，就是基督的身体。',
};

export default note;
