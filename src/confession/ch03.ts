import type { ChapterNote } from './types';

const note: ChapterNote = {
  n: 3,
  summary:
    '圣灵是神永恒的灵，曾住在基督里，现在赐能力给教会，是我们在基督里新生命的源头，又浇灌在信徒身上，作我们和万物将来得赎的凭据。',
  overview: [
    [{ text: '我们信圣灵是神永恒的灵。他住在耶稣基督里，赐能力给教会，是我们在基督里生命的源头，并且浇灌在信徒身上，作为我们和整个受造界得赎的凭据。' }],
    [
      { text: '藉着圣灵，世界被造；先知和写圣经的人被感动；人得以遵行神的律法；马利亚怀孕；耶稣受洗时被膏。', fn: 1 },
      { text: '靠着圣灵的能力，耶稣宣告神的国、医治病人、接受十字架的死，并且复活。' },
    ],
    [
      { text: '五旬节那天，神开始把圣灵浇灌凡有血气的，从万民中聚集教会。', fn: 2 },
      { text: '教会是圣灵的居所，赞美神、结出圣灵的果子。圣灵的恩赐呼召每个基督徒参与事奉；圣灵的引导使教会在教导和行动上合一；靠着圣灵的能力，教会传道、教导、作见证、医治、爱人，也跟随耶稣受苦。' },
    ],
    [
      { text: '圣灵呼召人悔改，叫人为罪自己责备自己，并带领向他敞开的人走义路。', fn: 3 },
      { text: '圣经劝我们顺服圣灵，不要抗拒、不要消灭他的感动。', fn: 4 },
      { text: '藉着水和圣灵，我们重生进入神的家。圣灵住在每个神的儿女里面；我们若和基督一同受苦，也必和他一同承受产业。', fn: 5 },
      { text: '圣灵教导我们，叫我们想起耶稣的话，引导我们进入真理，赐我们胆量传讲神的道。', fn: 6 },
    ],
    [{ text: '圣灵使我们能过基督徒的群体生活，在苦难中安慰我们，在逼迫中与我们同在，在软弱时为我们代求，保证我们身体得赎，也保证将来整个受造界的救赎。', fn: 7 }],
  ],
  points: [
    { title: '圣灵是神', text: '他是神永恒的灵，与父和子同为一。从创造到耶稣的一生，都有圣灵的工作。' },
    { title: '五旬节与教会', text: '圣灵浇灌凡有血气的，从万民中建立教会。教会是圣灵的殿，靠他结果子、领受恩赐、得着合一。' },
    { title: '在个人身上的工作', text: '叫人知罪、悔改、重生，住在信徒里面，教导、提醒、引导进入真理，赐胆量作见证。' },
    { title: '陪伴与盼望', text: '在苦难里安慰，在软弱时代求；他是我们将来得赎的凭据。' },
    { title: '以基督为准', text: '分辨是不是出于神的灵，标准是耶稣基督：真正的圣灵总是使人更像圣经中的基督。' },
  ],
  terms: [
    ['圣灵', 'Holy Spirit'],
    ['五旬节', 'Pentecost'],
    ['圣灵的果子', 'fruit of the Spirit'],
    ['恩赐', 'gifts'],
    ['重生', 'born anew'],
    ['凭据 / 保证', 'guarantee'],
  ],
  footnotes: [
    { fn: 1, refs: '诗 104:30；弥 3:8；结 36:26-27；路 1:35；3:22', about: '圣灵在创造、先知、马利亚和耶稣受洗中的工作', verses: [] },
    {
      fn: 2,
      refs: '珥 2:28-29；徒 2:16-18',
      about: '圣灵浇灌凡有血气的',
      verses: [
        {
          zh: '以后，我要将我的灵浇灌凡有血气的。你们的儿女要说预言；你们的老年人要做异梦，少年人要见异象。',
          en: 'And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions:',
          ref: '约珥书 2:28',
        },
      ],
    },
    {
      fn: 3,
      refs: '约 16:8-10',
      about: '叫世人为罪、为义、为审判自己责备自己',
      verses: [
        {
          zh: '他既来了，就要叫世人为罪、为义、为审判，自己责备自己。',
          en: 'And when he is come, he will reprove the world of sin, and of righteousness, and of judgment:',
          ref: '约翰福音 16:8',
        },
      ],
    },
    {
      fn: 4,
      refs: '赛 63:10；徒 5:3；弗 4:30；帖前 5:19',
      about: '不要叫圣灵担忧，不要消灭圣灵的感动',
      verses: [
        {
          zh: '不要叫神的圣灵担忧；你们原是受了他的印记，等候得赎的日子来到。',
          en: 'And grieve not the holy Spirit of God, whereby ye are sealed unto the day of redemption.',
          ref: '以弗所书 4:30',
        },
      ],
    },
    {
      fn: 5,
      refs: '约 3:5；罗 8:14-17',
      about: '重生，成为神的儿女',
      verses: [
        {
          zh: '圣灵与我们的心同证我们是神的儿女；',
          en: 'The Spirit itself beareth witness with our spirit, that we are the children of God:',
          ref: '罗马书 8:16',
        },
      ],
    },
    {
      fn: 6,
      refs: '约 14:26；16:13；林前 2:14；徒 4:24-31',
      about: '圣灵教导、提醒、引导进入真理',
      verses: [
        {
          zh: '但保惠师，就是父因我的名所要差来的圣灵，他要将一切的事指教你们，并且要叫你们想起我对你们所说的一切话。',
          en: 'But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things, and bring all things to your remembrance, whatsoever I have said unto you.',
          ref: '约翰福音 14:26',
        },
      ],
    },
    {
      fn: 7,
      refs: '太 10:20；林后 5:5；罗 8:26-27；弗 1:13-14；罗 8:18-23',
      about: '安慰、代求、得赎的凭据',
      verses: [
        {
          zh: '况且，我们的软弱有圣灵帮助；我们本不晓得当怎样祷告，只是圣灵亲自用说不出来的叹息替我们祷告。',
          en: 'Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered.',
          ref: '罗马书 8:26',
        },
      ],
    },
  ],
  commentary: [
    { title: '神的同在和能力', text: '圣经把圣灵描写成神在世上的同在和能力，从创造（创 1:2）开始，也常在意想不到的地方工作。耶稣靠着圣灵医病、赶鬼、宣告神国、献上自己并复活。这位神的灵、耶稣的灵，就是圣灵，与父和子为一。' },
    { title: '以基督为分辨的标准', text: '约翰福音和保罗书信讲“神的灵”和“基督的灵”用的是相似的话。基督升天以后，圣灵的工作总是与耶稣基督相符，所以基督是分辨“哪个灵出于神”的标准。' },
    { title: '圣灵的时代', text: '复活以后，我们活在圣灵浇灌“凡有血气”的时代，不分性别、年龄、地位和族群。圣灵把神的爱浇灌在我们心里，使我们成为神的儿女。' },
    { title: '向圣灵敞开', text: '圣灵的膏抹是给所有人的，但行恶的人躲避光，悔改的人领受圣灵。当我们“虚心”、愿意走十字架道路时，最能向圣灵敞开。圣灵使人勇敢传道、爱仇敌、在苦难中有盼望，并结出加拉太书 5:22-23 的果子。' },
    { title: '教会和个人都是圣灵的殿', text: '教会聚集祷告赞美时，圣灵同在。圣灵赐恩赐给每个肢体，使教会在爱中被建立、得着合一，并在作决定、劝勉和管教上得着引导。' },
    { title: '关于预言', text: '有人认为预言在使徒以后就停止了，也有人把现在的启示放在圣经之上。本章认为圣灵今天仍然启示神的旨意（林前 14:26-33），但新的启示不会违背圣经中基督的道路，需要在信仰群体中按基督和圣经来检验。' },
  ],
  questions: [
    '回想一下：圣灵在你身上做过哪些工作？（知罪、安慰、提醒你耶稣的话、给你勇气……）',
    '加拉太书 5:22-23 的九种果子里，你最希望圣灵在你身上多结出哪一种？',
    '“消灭圣灵的感动”在日常生活里可能是什么样子？',
    '本章说分辨圣灵的标准是耶稣基督。遇到“我觉得是神的感动”时，可以怎样按这个标准来分辨？',
  ],
  hope: {
    zh: '圣灵所结的果子，就是仁爱、喜乐、和平、忍耐、恩慈、良善、信实、温柔、节制。这样的事没有律法禁止。',
    en: 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.',
    ref: '加拉太书 5:22-23',
  },
  next: '第 4 章讲圣经：神藉着圣灵默示圣经，它是信仰和生活最可靠的标准。',
};

export default note;
