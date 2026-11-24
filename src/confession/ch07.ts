import type { ChapterNote } from './types';

const note: ChapterNote = {
    n: 7,
    summary:
      '从亚当夏娃开始，人选择离开神；罪不只是做错几件事，而是背弃与神所立的约，破坏一切关系，并让人落在罪恶与死亡的权势之下。但神没有任凭这些权势掌权到底，也没有让人毫无盼望。',
    excerpt: [
      [
        { text: '我们承认，从亚当夏娃开始，人类便违背了神，向试探让步，并选择了犯罪。因为罪的缘故，全人类都达不到创造主的本意、亏损了神的形像、混乱了世界的秩序，及限制了他们对人的爱。因为罪的缘故，人类便为罪恶和死亡所奴役。', fn: 1 },
      ],
      [
        { text: '罪是离弃神，为自己与被造物制造偶像。我们个人或是群体选择行不公义、不公平的事，就是犯罪。', fn: 2 },
        { text: '当我们不去行善，不因神是造物主和救赎主而归给祂当得的荣耀，就是犯罪。在罪中，我们不忠于跟神跟祂的子民所立的约、破坏了正常的关系、自私地运用能力、施行暴力，而且与神分离。结果，我们不能恰当地敬拜神。', fn: 3 },
      ],
      [{ text: '辖制、分歧、毁坏与死亡的权势，透过罪在人类和所有的受造物中放纵。它们反过来使人类更加受制……' }],
    ],
    excerptNote: '摘自中文版第 33 页（原书为繁体，这里转成简体）。第三段后半在下一页，没有拍到，下面的要点按英文原版补全。',
    points: [
      {
        title: '罪从哪里来',
        text: '从亚当夏娃开始，人违背神、向试探让步，主动选择了罪。罪不是神造的，也不能只怪环境或软弱，人要为自己的选择负责。',
      },
      {
        title: '罪是什么',
        text: '根本上是“离弃神”：把自己或被造之物当成神来依靠。它包括做了不公义的事（作恶），也包括该行的善没有去行（不作为）；可以是个人的罪，也可以是群体一起犯的罪。',
      },
      {
        title: '罪带来什么',
        text: '达不到神造人的本意、亏损神的形像、扰乱世界的秩序、限制我们去爱人；破坏我们与神、与神的子民所立的约，使人自私用权、施行暴力，与神分离，最后连敬拜神都不能正确。',
      },
      {
        title: '罪背后的权势',
        text: '辖制、分裂、毁坏和死亡的权势透过罪在世上放纵：工作变得劳苦，安息变得空虚；人越犯罪就越被捆绑。这些权势会透过个人、群体，以及政治、经济、社会、宗教的体制运作，把人从公义中拉走。',
      },
      {
        title: '仍有盼望',
        text: '本章最后一句（英文原版）说：神没有任凭这些权势至终掌权，也没有撇下人类毫无盼望。这正好引到下一章“救恩”。',
      },
    ],
    terms: [
      ['罪', 'Sin'],
      ['违背 / 悖逆', 'disobey'],
      ['试探者', 'the tempter'],
      ['神的形像', 'the image of God'],
      ['偶像（以被造物为神）', 'making gods of creation and of ourselves'],
      ['不公义、不公平', 'unrighteousness and injustice'],
      ['约', 'covenant'],
      ['辖制、分歧、毁坏与死亡', 'domination, division, destruction, and death'],
      ['邪恶的权势', 'powers of evil'],
      ['盼望', 'hope'],
    ],
    footnotes: [
      {
        fn: 1,
        refs: '创 2:17；3:22-24；6:11-12；罗 1:21-32；6:23',
        about: '人从一开始的违背，以及罪带来的死亡',
        verses: [
          {
            zh: '只是分别善恶树上的果子，你不可吃，因为你吃的日子必定死。',
            en: 'But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die.',
            ref: '创世记 2:17',
          },
          {
            zh: '世界在神面前败坏，地上满了强暴。',
            en: 'The earth also was corrupt before God, and the earth was filled with violence.',
            ref: '创世记 6:11',
          },
          {
            zh: '因为，他们虽然知道神，却不当作神荣耀他，也不感谢他。他们的思念变为虚妄，无知的心就昏暗了。',
            en: 'Because that, when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened.',
            ref: '罗马书 1:21',
          },
          {
            zh: '因为罪的工价乃是死；惟有神的恩赐，在我们的主基督耶稣里，乃是永生。',
            en: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.',
            ref: '罗马书 6:23',
          },
        ],
      },
      {
        fn: 2,
        refs: '但以理书 第 9 章',
        about: '但以理代表全民族认罪：罪也可以是群体的',
        verses: [
          {
            zh: '我们犯罪作孽，行恶叛逆，偏离你的诫命典章。',
            en: 'We have sinned, and have committed iniquity, and have done wickedly, and have rebelled, even by departing from thy precepts and from thy judgments:',
            ref: '但以理书 9:5',
          },
        ],
      },
      {
        fn: 3,
        refs: '赛 1:12-17',
        about: '没有公义的敬拜，神不喜悦',
        verses: [
          {
            zh: '你们要洗濯、自洁，从我眼前除掉你们的恶行；要止住作恶，学习行善，寻求公平，解救受欺压的；给孤儿伸冤，为寡妇辨屈。',
            en: 'Wash you, make you clean; put away the evil of your doings from before mine eyes; cease to do evil; learn to do well; seek judgment, relieve the oppressed, judge the fatherless, plead for the widow.',
            ref: '以赛亚书 1:16-17',
          },
        ],
      },
      {
        fn: 4,
        refs: '罗 6:12-18；弗 6:10-12',
        about: '不再让罪作王；属灵的争战',
        verses: [
          {
            zh: '所以，不要容罪在你们必死的身上作王，使你们顺从身子的私欲。',
            en: 'Let not sin therefore reign in your mortal body, that ye should obey it in the lusts thereof.',
            ref: '罗马书 6:12',
          },
          {
            zh: '因我们并不是与属血气的争战，乃是与那些执政的、掌权的、管辖这幽暗世界的，以及天空属灵气的恶魔争战。',
            en: 'For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places.',
            ref: '以弗所书 6:12',
          },
        ],
      },
      {
        fn: 5,
        refs: '诗 14:2-4；罗 3:9-18',
        about: '人靠自己行善、认识真理的努力，总被罪败坏',
        verses: [
          {
            zh: '耶和华从天上垂看世人，要看有明白的没有，有寻求神的没有。他们都偏离正路，一同变为污秽；并没有行善的，连一个也没有。',
            en: 'The Lord looked down from heaven upon the children of men, to see if there were any that did understand, and seek God. They are all gone aside, they are all together become filthy: there is none that doeth good, no, not one.',
            ref: '诗篇 14:2-3',
          },
          {
            zh: '就如经上所记：没有义人，连一个也没有。',
            en: 'As it is written, There is none righteous, no, not one:',
            ref: '罗马书 3:10',
          },
        ],
      },
      {
        fn: 6,
        refs: '弗 2:1-3；加 4:1-3',
        about: '人在罪中如同死了，受世上的势力辖管',
        verses: [
          {
            zh: '你们死在过犯罪恶之中，他叫你们活过来。',
            en: 'And you hath he quickened, who were dead in trespasses and sins;',
            ref: '以弗所书 2:1',
          },
          {
            zh: '我们为孩童的时候，受管于世俗小学之下，也是如此。',
            en: 'Even so we, when we were children, were in bondage under the elements of the world:',
            ref: '加拉太书 4:3',
          },
        ],
      },
    ],
    commentary: [
      {
        title: '罪是真实的',
        text: '罪不是错觉，也不能全推给疾病、环境或“魔鬼叫我做的”。人要为罪负责，罪也有真实的后果。圣经同时也说到罪背后有位格的恶者，称为蛇、试探人的、撒但、说谎之人的父、那恶者、魔鬼。',
      },
      {
        title: '罪也在群体和体制里',
        text: '“执政的、掌权的”等权势本身不一定是恶的，但容易扭曲神的心意，反过来辖制人。所以罪不只是个人的事，群体、国家和制度也会有一种“风气”，推着人去做自己单独时不会做的恶。暴力、族群之间的仇恨、男人对女人的压制、恶劣的生活和工作环境，都是例子。',
      },
      {
        title: '罪是对约的不忠',
        text: '犯罪不只是违反某一条规定，更是背弃神所赐的约，是对与神关系的不忠，不顺服神的旨意。圣经里“不义”和“不公”常是同一个词，所以不用把“个人的罪”和“社会的罪”分得太开。',
      },
      {
        title: '人人都在罪中，人人都要负责',
        text: '亚当夏娃的罪影响了所有人，但每个人仍要为自己的行为负责。人的选择虽然有限，却仍可以选择进入与神的约，或者继续被罪捆绑。圣经也警告，坚持在罪中会与神永远分离（参第 24 章）。',
      },
      {
        title: '罪影响整个人',
        text: '不要把罪只归到人的某一部分，比如理性、性或身体。“顺从肉体”会表现在许多态度和行为上，是整个人都受了影响。',
      },
      {
        title: '罪扭曲了工作和安息',
        text: '工作本身没有被神咒诅，但也不该被理想化。创世记 3:17 受咒诅的是“地”，也就是在罪的世界里做工的环境，所以工作变得劳苦，安息也常常得不到真正的满足。',
      },
    ],
    questions: [
      '本章把罪定义为“离弃神，为自己与被造物制造偶像”。在今天的生活里，有哪些东西最容易代替神，成为我们心里依靠的“偶像”？',
      '罪不只是做了坏事，也包括“该行的善没有去行”。这一周，有没有哪件我知道该做、却没有去做的善事？',
      '罪会“破坏正常的关系”。罪怎样影响我们和神、和家人、和身边的人的关系？',
      '本章说罪也可以是群体的，甚至藏在体制里。读但以理书 9 章，但以理为什么用“我们”来认罪？这对我们有什么提醒？',
      '为什么犯罪的结果是“不能恰当地敬拜神”？对照以赛亚书 1:12-17，神看重的敬拜是什么样的？',
      '本章最后说神没有让人毫无盼望。读罗马书 6:23 和以弗所书 2:4-5，盼望在哪里？',
    ],
    hope: {
      zh: '然而，神既有丰富的怜悯，因他爱我们的大爱，当我们死在过犯中的时候，便叫我们与基督一同活过来。（你们得救是本乎恩。）',
      en: 'But God, who is rich in mercy, for his great love wherewith he loved us, even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved;)',
      ref: '以弗所书 2:4-5',
    },
    next: '第 7 章讲到人落在罪中，第 8 章“救恩”接着讲神怎样藉着耶稣基督把人从罪中救出来。',
  };

export default note;
