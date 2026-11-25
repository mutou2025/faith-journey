import type { ChapterNote } from './types';

const note: ChapterNote = {
  n: 23,
  summary:
    '教会是神“圣洁的国度”，蒙召完全效忠它的头基督，并向万国见证神拯救的爱。政府是神设立来维持秩序的，基督徒尊重掌权的、为他们祷告，也为城市求平安；但我们最终只承认耶稣是主。',
  overview: [
    [{ text: '我们相信教会是神“圣洁的国度”，', fn: 1 }, { text: '蒙召完全效忠它的头基督，并向万国见证神拯救的爱。' }],
    [
      { text: '教会是只效忠神的属灵、社会和政治群体。作为神国的子民，', fn: 2 },
      { text: '基督徒信靠神的爱作为保护；教会没有地理的边界，也不需要暴力来保护自己。唯一的基督徒国度就是教会，它由各族各国的人组成，', fn: 3 },
      { text: '为神的荣耀作见证。' },
    ],
    [
      { text: '执政掌权的是神设立来维持秩序的，蒙召要公义地行事。', fn: 4 },
      { text: '但国家往往要求人完全效忠，就变成偶像，悖逆神的旨意。', fn: 5 },
      { text: '即使在最好的时候，政府也无法完全按神的公义行事，因为除了教会，没有一个国度承认基督的主权是它的根基。' },
    ],
    [
      { text: '基督徒尊重掌权的人，为所有在政府中的人祷告，愿他们得救、明白真道。', fn: 6 },
      { text: '我们可以参与政府或其他机构，但不能违背基督的爱和圣洁，也不能动摇对基督的忠诚。我们像“山上的城”作见证，', fn: 7 },
      { text: '作基督的使者，', fn: 8 },
      { text: '呼召国家和机构走向公义、和平与怜悯，并为神差我们去的那城求平安。', fn: 9 },
    ],
    [{ text: '基督的死和复活胜过了一切执政掌权的，包括所有的政府。', fn: 10 }, { text: '因为耶稣被高举为万主之主，教会不承认任何其他权柄是最终的。' }],
  ],
  points: [
    { title: '圣洁的国度', text: '教会是来自各族各国的神的子民，没有国界，首先效忠基督。' },
    { title: '政府是神设立的', text: '政府的职责是维持秩序、公义行事；基督徒尊重并为掌权者祷告。' },
    { title: '警惕偶像化', text: '国家要求完全的效忠时，就成了偶像。最终的主只有耶稣。' },
    { title: '为城市求平安', text: '以“山上的城”和“基督的使者”的身份，呼召社会走向公义、和平与怜悯。' },
    { title: '在群体中分辨', text: '兵役、担任公职、投票、纳税等问题，个人需要教会一起帮助分辨。' },
  ],
  terms: [
    ['圣洁的国度', 'holy nation'],
    ['效忠', 'allegiance'],
    ['执政掌权的', 'governing authorities'],
    ['基督的使者', 'ambassadors for Christ'],
    ['求平安', 'seek the welfare'],
  ],
  footnotes: [
    {
      fn: 1,
      refs: '彼前 2:9',
      about: '被拣选的族类，圣洁的国度',
      verses: [
        {
          zh: '惟有你们是被拣选的族类，是有君尊的祭司，是圣洁的国度，是属神的子民，要叫你们宣扬那召你们出黑暗入奇妙光明者的美德。',
          en: "But you are not like that, for you are a chosen people. You are royal priests, a holy nation, God's very own possession. As a result, you can show others the goodness of God, for he called you out of the darkness into his wonderful light.",
          ref: '彼得前书 2:9',
        },
      ],
    },
    {
      fn: 2,
      refs: '腓 3:20；弗 2:19',
      about: '我们是天上的国民',
      verses: [
        {
          zh: '我们却是天上的国民，并且等候救主，就是主耶稣基督从天上降临。',
          en: "But we are citizens of heaven, where the Lord Jesus Christ lives. And we are eagerly waiting for him to return as our Savior.",
          ref: '腓立比书 3:20',
        },
      ],
    },
    { fn: 3, refs: '启 7:9', about: '从各国各族来的人站在宝座前', verses: [] },
    { fn: 4, refs: '罗 13:1-7', about: '在上有权柄的是神所命的', verses: [] },
    { fn: 5, refs: '结 28；但 7-8；启 13', about: '国家权势的自高与悖逆', verses: [] },
    {
      fn: 6,
      refs: '提前 2:1-4',
      about: '为君王和一切在位的祷告',
      verses: [
        {
          zh: '为君王和一切在位的，也该如此，使我们可以敬虔、端正、平安无事地度日。',
          en: "Pray this way for kings and all who are in authority so that we can live peaceful and quiet lives marked by godliness and dignity.",
          ref: '提摩太前书 2:2',
        },
      ],
    },
    { fn: 7, refs: '太 5:13-16；赛 49:6', about: '世上的盐、世上的光', verses: [] },
    { fn: 8, refs: '林后 5:20', about: '我们作基督的使者', verses: [] },
    {
      fn: 9,
      refs: '耶 29:7',
      about: '为那城求平安',
      verses: [
        {
          zh: '我所使你们被掳到的那城，你们要为那城求平安，为那城祷告耶和华；因为那城得平安，你们也随着得平安。',
          en: "And work for the peace and prosperity of the city where I sent you into exile. Pray to the Lord for it, for its welfare will determine your welfare.",
          ref: '耶利米书 29:7',
        },
      ],
    },
    { fn: 10, refs: '西 2:15', about: '仗着十字架胜过执政掌权的', verses: [] },
  ],
  commentary: [
    { title: '“圣洁的国度”', text: '这个说法可能听起来陌生，但新约的用语（国度、主、教会作为“会众”）本来就带有政治含义。在君士坦丁之前，基督徒把自己看成住在列国中的神的国民。基督教成为国教后，入教变成强制的，皇帝被看成信仰的保护者。教会和国家是分开的，常常彼此竞争；基督徒尊敬政府，但只敬畏神，要“顺从神，不顺从人”（徒 5:29）。' },
    { title: '政府的界限', text: '神唯一的心意是人得救、加入神的子民。国家受限于对暴力的依赖，也常想取代神的位置。但一个相对公义、维持秩序的政府，好过无政府或压迫，所以基督徒可以向政府作见证，请它朝更高的标准迈进。' },
    { title: '需要群体分辨', text: '个人需要教会帮助分辨怎样“在世界但不属世界”。会遇到的问题包括兵役、担任公职、在政府工作、投票、纳税、经济、诉诸法庭、宣誓效忠、国旗、学校教育和影响立法等。参第 17、20、22 章。' },
  ],
  questions: [
    '“我们是天上的国民”（腓 3:20），这怎样影响你看待自己在现在所住的国家？',
    '你有为政府领袖祷告的习惯吗？可以怎样为他们祷告？',
    '耶利米书 29:7 说要为所住的城求平安。你可以为你的城市做些什么？',
    '在什么情况下，“顺从神，不顺从人”会成为一个真实的选择？',
  ],
  next: '最后一章（第 24 章）讲神的王权：我们的盼望在于神的国，以及基督再来时它的完全实现。',
};

export default note;
