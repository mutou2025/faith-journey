// 圣经 66 卷书目录：网址用的 slug、中文全名、常用简称、英文名、其他可识别的写法
export interface Book {
  slug: string;
  name: string;
  abbr: string;
  en: string;
  testament: 'OT' | 'NT';
  group: string;
  aliases?: string[];
  /** 章数 */
  chapters: number;
}

const raw: [string, string, string, string, string, string[]?][] = [
  ['gen', '创世记', '创', 'Genesis', '摩西五经', ['创世纪', 'gn', 'ge']],
  ['exo', '出埃及记', '出', 'Exodus', '摩西五经', ['ex', 'exod']],
  ['lev', '利未记', '利', 'Leviticus', '摩西五经', ['lv']],
  ['num', '民数记', '民', 'Numbers', '摩西五经', ['nm', 'nu']],
  ['deu', '申命记', '申', 'Deuteronomy', '摩西五经', ['dt', 'deut']],
  ['jos', '约书亚记', '书', 'Joshua', '历史书', ['josh']],
  ['jdg', '士师记', '士', 'Judges', '历史书', ['judg']],
  ['rut', '路得记', '得', 'Ruth', '历史书', ['ru']],
  ['1sa', '撒母耳记上', '撒上', '1 Samuel', '历史书', ['1sam']],
  ['2sa', '撒母耳记下', '撒下', '2 Samuel', '历史书', ['2sam']],
  ['1ki', '列王纪上', '王上', '1 Kings', '历史书', ['列王记上', '1kgs']],
  ['2ki', '列王纪下', '王下', '2 Kings', '历史书', ['列王记下', '2kgs']],
  ['1ch', '历代志上', '代上', '1 Chronicles', '历史书', ['1chr']],
  ['2ch', '历代志下', '代下', '2 Chronicles', '历史书', ['2chr']],
  ['ezr', '以斯拉记', '拉', 'Ezra', '历史书'],
  ['neh', '尼希米记', '尼', 'Nehemiah', '历史书'],
  ['est', '以斯帖记', '斯', 'Esther', '历史书', ['esth']],
  ['job', '约伯记', '伯', 'Job', '诗歌智慧书'],
  ['psa', '诗篇', '诗', 'Psalms', '诗歌智慧书', ['ps', 'psalm']],
  ['pro', '箴言', '箴', 'Proverbs', '诗歌智慧书', ['prov', 'pr']],
  ['ecc', '传道书', '传', 'Ecclesiastes', '诗歌智慧书', ['eccl', 'qoh']],
  ['sng', '雅歌', '歌', 'Song of Songs', '诗歌智慧书', ['song', 'sos', 'songofsolomon']],
  ['isa', '以赛亚书', '赛', 'Isaiah', '大先知书', ['is']],
  ['jer', '耶利米书', '耶', 'Jeremiah', '大先知书'],
  ['lam', '耶利米哀歌', '哀', 'Lamentations', '大先知书'],
  ['ezk', '以西结书', '结', 'Ezekiel', '大先知书', ['ezek', 'eze']],
  ['dan', '但以理书', '但', 'Daniel', '大先知书', ['dn']],
  ['hos', '何西阿书', '何', 'Hosea', '小先知书'],
  ['jol', '约珥书', '珥', 'Joel', '小先知书', ['joel']],
  ['amo', '阿摩司书', '摩', 'Amos', '小先知书', ['am']],
  ['oba', '俄巴底亚书', '俄', 'Obadiah', '小先知书', ['obad', 'ob']],
  ['jon', '约拿书', '拿', 'Jonah', '小先知书', ['jonah']],
  ['mic', '弥迦书', '弥', 'Micah', '小先知书'],
  ['nam', '那鸿书', '鸿', 'Nahum', '小先知书', ['nah']],
  ['hab', '哈巴谷书', '哈', 'Habakkuk', '小先知书'],
  ['zep', '西番雅书', '番', 'Zephaniah', '小先知书', ['zeph']],
  ['hag', '哈该书', '该', 'Haggai', '小先知书'],
  ['zec', '撒迦利亚书', '亚', 'Zechariah', '小先知书', ['zech']],
  ['mal', '玛拉基书', '玛', 'Malachi', '小先知书'],
  ['mat', '马太福音', '太', 'Matthew', '福音书', ['matt', 'mt']],
  ['mrk', '马可福音', '可', 'Mark', '福音书', ['mk', 'mar']],
  ['luk', '路加福音', '路', 'Luke', '福音书', ['lk']],
  ['jhn', '约翰福音', '约', 'John', '福音书', ['jn', 'joh']],
  ['act', '使徒行传', '徒', 'Acts', '历史书', ['acts']],
  ['rom', '罗马书', '罗', 'Romans', '保罗书信', ['ro', 'rm']],
  ['1co', '哥林多前书', '林前', '1 Corinthians', '保罗书信', ['1cor']],
  ['2co', '哥林多后书', '林后', '2 Corinthians', '保罗书信', ['2cor']],
  ['gal', '加拉太书', '加', 'Galatians', '保罗书信', ['ga']],
  ['eph', '以弗所书', '弗', 'Ephesians', '保罗书信'],
  ['php', '腓立比书', '腓', 'Philippians', '保罗书信', ['phil']],
  ['col', '歌罗西书', '西', 'Colossians', '保罗书信'],
  ['1th', '帖撒罗尼迦前书', '帖前', '1 Thessalonians', '保罗书信', ['1thess']],
  ['2th', '帖撒罗尼迦后书', '帖后', '2 Thessalonians', '保罗书信', ['2thess']],
  ['1ti', '提摩太前书', '提前', '1 Timothy', '保罗书信', ['1tim']],
  ['2ti', '提摩太后书', '提后', '2 Timothy', '保罗书信', ['2tim']],
  ['tit', '提多书', '多', 'Titus', '保罗书信'],
  ['phm', '腓利门书', '门', 'Philemon', '保罗书信', ['philem']],
  ['heb', '希伯来书', '来', 'Hebrews', '普通书信'],
  ['jas', '雅各书', '雅', 'James', '普通书信', ['jam', 'jms']],
  ['1pe', '彼得前书', '彼前', '1 Peter', '普通书信', ['1pet', '1pt']],
  ['2pe', '彼得后书', '彼后', '2 Peter', '普通书信', ['2pet', '2pt']],
  ['1jn', '约翰一书', '约壹', '1 John', '普通书信', ['约一', '约翰壹书', '1john']],
  ['2jn', '约翰二书', '约贰', '2 John', '普通书信', ['约二', '约翰贰书', '2john']],
  ['3jn', '约翰三书', '约叁', '3 John', '普通书信', ['约三', '约翰叁书', '3john']],
  ['jud', '犹大书', '犹', 'Jude', '普通书信', ['jude']],
  ['rev', '启示录', '启', 'Revelation', '启示文学', ['rv', 're']],
];

const CHAPTERS = [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4, 28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1, 22];

export const BOOKS: Book[] = raw.map(([slug, name, abbr, en, group, aliases], i) => ({
  slug, name, abbr, en, group, aliases, testament: i < 39 ? 'OT' : 'NT', chapters: CHAPTERS[i],
}));

export const bookBySlug = (slug: string) => BOOKS.find((b) => b.slug === slug);
