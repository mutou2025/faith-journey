import type { ChapterNote } from './types';

const note: ChapterNote = {
  n: 2,
  summary:
    '耶稣基督是成了肉身的道、世人的救主。他顺服以至于死在十字架上，叫我们与神和好；神使他从死里复活。他是先知、教师、大祭司和君王，是完全的人也是完全的神，是教会的头，也是将要再来的主。',
  overview: [
    [
      { text: '我们信耶稣基督是成了肉身的神的道、世人的救主。他自己卑微，顺服以至于死在十字架上，救我们脱离罪的辖制，使我们与神和好。', fn: 1 },
      { text: '他从死里复活，以大能显明是神的儿子。', fn: 2 },
      { text: '他是教会的头、被高举的主、被杀的羔羊，将要再来在荣耀中作王。除了耶稣基督，没有人能立别的根基。', fn: 3 },
    ],
    [
      { text: '我们承认耶稣是基督（弥赛亚），神藉着他为万民预备了新约。他是大卫的后裔，应验了神藉以色列所赐的应许。', fn: 4 },
      { text: '作为先知，他宣告神的国，呼召人悔改；作为传授神智慧的教师，他让人明白神对生活的心意；作为信实的大祭司，他为罪献上最终的赎罪，现在仍为我们代求；作为选择十字架道路的君王，他显明神的能力是仆人式的。', fn: 5 },
    ],
    [
      { text: '我们接受耶稣是世人的救主。', fn: 6 },
      { text: '他传道、教导、医病，向远处和近处的人宣告罪得赦免与平安。', fn: 7 },
      { text: '他呼召门徒，开始了新的信仰群体。', fn: 8 },
      { text: '受苦的时候，他爱仇敌，不用暴力抵抗，给我们留下榜样。', fn: 9 },
      { text: '他流血舍命，把生命交给父，担当众人的罪，使我们与神和好。', fn: 10 },
      { text: '神使他复活，胜过死亡，解除了罪恶权势的武装。', fn: 11 },
    ],
    [
      { text: '我们承认耶稣是神的独生子，由圣灵成孕、童贞女马利亚所生。他是完全的人，受过试探却没有犯罪，是人的典范。', fn: 12 },
      { text: '他也是完全的神，神本性一切的丰盛都乐意住在他里面。他与天父有亲密的关系，也教门徒称神为“阿爸，父”。', fn: 13 },
      { text: '他是那不能看见之神的像，万有都是藉着他、为着他造的。', fn: 14 },
    ],
    [
      { text: '耶稣是教会的头，教会是他的身体。', fn: 15 },
      { text: '信徒在基督里，基督也住在信徒里，教会因此在破碎的世界里继续他怜悯、公义与和平的事工。', fn: 16 },
    ],
    [{ text: '我们敬拜耶稣，他被高举为万有之主，是我们的主，也是世界还没有认出来的主。我们确信他要再来审判全人类；他是羔羊，要作王直到永永远远。', fn: 17 }],
  ],
  points: [
    { title: '道成肉身的救主', text: '耶稣是成了肉身的神的道。他顺服至死，叫我们与神和好；他复活，证明他是神的儿子。' },
    { title: '四重职分', text: '先知（宣告神国、呼召悔改）、教师（传授神的智慧）、大祭司（赎罪并代求）、君王（走十字架道路，显明仆人式的能力）。' },
    { title: '我们的榜样', text: '他爱仇敌、不以暴力抵抗，给我们留下脚踪。跟随基督包括跟随他的生活方式。' },
    { title: '完全的人，完全的神', text: '他受过试探却没有犯罪，是人的典范；神一切的丰盛也住在他里面，他是看不见之神的像。' },
    { title: '教会的头、再来的主', text: '教会是他的身体，继续他的事工；他要再来审判，作王到永远。' },
  ],
  terms: [
    ['道成肉身', 'the Word become flesh'],
    ['弥赛亚 / 基督', 'Messiah / Christ'],
    ['先知、教师、大祭司、君王', 'prophet, teacher, high priest, king'],
    ['使……和好', 'reconcile'],
    ['阿爸，父', 'Abba, Father'],
    ['被杀的羔羊', 'the slain Lamb'],
  ],
  footnotes: [
    {
      fn: 1,
      refs: '腓 2:5-8',
      about: '基督自己卑微，顺服至死',
      verses: [
        {
          zh: '既有人的样子，就自己卑微，存心顺服，以至于死，且死在十字架上。',
          en: "he humbled himself in obedience to God and died a criminal's death on a cross.",
          ref: '腓立比书 2:8',
        },
      ],
    },
    { fn: 2, refs: '罗 1:4', about: '因从死里复活，以大能显明是神的儿子', verses: [] },
    {
      fn: 3,
      refs: '林前 3:11',
      about: '唯一的根基',
      verses: [
        {
          zh: '因为那已经立好的根基就是耶稣基督，此外没有人能立别的根基。',
          en: "For no one can lay any foundation other than the one we already have—Jesus Christ.",
          ref: '哥林多前书 3:11',
        },
      ],
    },
    { fn: 4, refs: '撒下 7:13-14；赛 9:1-6；罗 1:3；林后 6:18', about: '大卫的后裔，应验弥赛亚的应许', verses: [] },
    {
      fn: 5,
      refs: '赛 42:1-9；太 4:17；路 4:43；太 5-7；来 2:17；彼前 3:18；罗 8:34；来 7:25；约 18:36-37；启 5:8-14；7:17',
      about: '先知、教师、大祭司、君王',
      verses: [],
    },
    {
      fn: 6,
      refs: '徒 4:12；约一 4:14',
      about: '世人的救主',
      verses: [
        {
          zh: '除他以外，别无拯救；因为在天下人间，没有赐下别的名，我们可以靠着得救。',
          en: "There is salvation in no one else! God has given no other name under heaven by which we must be saved.",
          ref: '使徒行传 4:12',
        },
      ],
    },
    { fn: 7, refs: '弗 2:13-22', about: '向远处、近处的人传和平', verses: [] },
    { fn: 8, refs: '可 3:13-19', about: '呼召十二门徒', verses: [] },
    {
      fn: 9,
      refs: '太 26:50；彼前 2:21-23',
      about: '受苦时不报复，留下榜样',
      verses: [
        {
          zh: '你们蒙召原是为此；因基督也为你们受过苦，给你们留下榜样，叫你们跟随他的脚踪行。',
          en: "For God called you to do good, even if it means suffering, just as Christ suffered for you. He is your example, and you must follow in his steps.",
          ref: '彼得前书 2:21',
        },
      ],
    },
    {
      fn: 10,
      refs: '路 23:46；罗 5:18；林后 5:19',
      about: '舍命叫世人与神和好',
      verses: [
        {
          zh: '这就是神在基督里叫世人与自己和好，不将他们的过犯归到他们身上，并且将这和好的道理托付了我们。',
          en: "For God was in Christ, reconciling the world to himself, no longer counting people's sins against them. And he gave us this wonderful message of reconciliation.",
          ref: '哥林多后书 5:19',
        },
      ],
    },
    {
      fn: 11,
      refs: '西 2:15；弗 1:20-21',
      about: '复活胜过罪恶的权势',
      verses: [
        {
          zh: '既将一切执政的、掌权的掳来，明显给众人看，就仗着十字架夸胜。',
          en: "In this way, he disarmed the spiritual rulers and authorities. He shamed them publicly by his victory over them on the cross.",
          ref: '歌罗西书 2:15',
        },
      ],
    },
    {
      fn: 12,
      refs: '来 4:15；罗 5:14-21；彼前 2:21',
      about: '受过试探却没有犯罪',
      verses: [
        {
          zh: '因我们的大祭司并非不能体恤我们的软弱。他也曾凡事受过试探，与我们一样，只是他没有犯罪。',
          en: "This High Priest of ours understands our weaknesses, for he faced all of the same testings we do, yet he did not sin.",
          ref: '希伯来书 4:15',
        },
      ],
    },
    { fn: 13, refs: '可 14:36；太 6:9-13；罗 8:15；加 4:6', about: '“阿爸，父”', verses: [] },
    {
      fn: 14,
      refs: '西 1:15-17, 19',
      about: '看不见之神的像',
      verses: [
        {
          zh: '爱子是那不能看见之神的像，是首生的，在一切被造的以先。',
          en: "Christ is the visible image of the invisible God. He existed before anything was created and is supreme over all creation,",
          ref: '歌罗西书 1:15',
        },
      ],
    },
    { fn: 15, refs: '弗 1:22-23', about: '基督是教会的头', verses: [] },
    { fn: 16, refs: '西 1:24', about: '教会继续基督的事工', verses: [] },
    {
      fn: 17,
      refs: '徒 17:31；腓 2:11；启 5:12-14',
      about: '万口承认耶稣是主',
      verses: [
        {
          zh: '无不口称耶稣基督为主，使荣耀归与父神。',
          en: "and every tongue declare that Jesus Christ is Lord, to the glory of God the Father.",
          ref: '腓立比书 2:11',
        },
      ],
    },
  ],
  commentary: [
    {
      title: '重洗派的基督论重点',
      text: '本章从重洗派—门诺会的角度强调：耶稣在赎罪中的顺服和受苦；谦卑和服侍是通向被高举的道路；信徒在群体中经历基督；信仰与生活合一；和平是基督品格的核心。这些都在福音的中心。',
    },
    {
      title: '为什么多了“教师”',
      text: '一些新教传统说基督有先知、祭司、君王三重职分。本章按旧约智慧书的背景，加上“教师”。作为门徒，我们也参与基督这四方面的工作。',
    },
    {
      title: '神性与人性',
      text: '历代信经都承认基督有人性和神性，圣经本身没有用“性”这个词。用这种说法时，不要偏重任何一边，要以圣经对他的启示为准。',
    },
    {
      title: '神的儿子',
      text: '耶稣作为神的儿子，完全参与三一神的品格和作为：他参与创造，从起初就与神同在；他应许父要奉他的名差圣灵来。耶稣称神为“阿爸”，是亚兰语里很亲密的称呼，有点像“爸爸”。',
    },
  ],
  questions: [
    '本章说耶稣是先知、教师、大祭司和君王。你最常经历的是他哪一方面？哪一方面你比较少想到？',
    '耶稣“选择十字架的道路”来作王，显明神的能力是仆人式的。这和世界对“能力”的看法有什么不同？',
    '彼得前书 2:21 说基督给我们留下榜样。在被误解或被伤害的时候，跟随他的脚踪是什么样子？',
    '耶稣教门徒称神为“阿爸，父”。你祷告时，和神的关系更像哪一种？',
  ],
  next: '第 3 章讲圣灵：住在基督里、赐能力给教会、也是我们在基督里新生命的源头。',
};

export default note;
