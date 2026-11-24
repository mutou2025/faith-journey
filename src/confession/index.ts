// 《这是我们的信仰：门诺会的圣经信念》(Confession of Faith in a Mennonite Perspective, 1995) 逐章学习笔记
// 新增或修改一章：编辑 chNN.ts，然后在下面 notes 里引入。页面 /confession/<n>/ 会自动生成。
import type { ChapterNote } from './types';
import ch01 from './ch01';
import ch02 from './ch02';
import ch03 from './ch03';
import ch04 from './ch04';
import ch05 from './ch05';
import ch06 from './ch06';
import ch07 from './ch07';
import ch08 from './ch08';
import ch09 from './ch09';
import ch10 from './ch10';
import ch11 from './ch11';
import ch12 from './ch12';
import ch13 from './ch13';
import ch14 from './ch14';
import ch15 from './ch15';
import ch16 from './ch16';
import ch17 from './ch17';
import ch18 from './ch18';
import ch19 from './ch19';
import ch20 from './ch20';
import ch21 from './ch21';
import ch22 from './ch22';
import ch23 from './ch23';
import ch24 from './ch24';

export type { ChapterNote, V } from './types';

// 章名：中文为暂译，书里的正式译名以纸本为准（confirmed: true 的已与纸本核对）
export const chapters: { n: number; zh: string; en: string; confirmed?: boolean }[] = [
  { n: 1, zh: '神', en: 'God' },
  { n: 2, zh: '耶稣基督', en: 'Jesus Christ' },
  { n: 3, zh: '圣灵', en: 'Holy Spirit' },
  { n: 4, zh: '圣经', en: 'Scripture' },
  { n: 5, zh: '创造与神的护理', en: 'Creation and Divine Providence' },
  { n: 6, zh: '人的被造与呼召', en: 'The Creation and Calling of Human Beings' },
  { n: 7, zh: '罪', en: 'Sin', confirmed: true },
  { n: 8, zh: '救恩', en: 'Salvation' },
  { n: 9, zh: '耶稣基督的教会', en: 'The Church of Jesus Christ' },
  { n: 10, zh: '教会的使命', en: 'The Church in Mission' },
  { n: 11, zh: '洗礼', en: 'Baptism' },
  { n: 12, zh: '主的晚餐', en: "The Lord's Supper" },
  { n: 13, zh: '洗脚', en: 'Foot Washing' },
  { n: 14, zh: '教会的纪律', en: 'Discipline in the Church' },
  { n: 15, zh: '事奉与领导', en: 'Ministry and Leadership' },
  { n: 16, zh: '教会的秩序与合一', en: 'Church Order and Unity' },
  { n: 17, zh: '门徒生活', en: 'Discipleship and the Christian Life' },
  { n: 18, zh: '基督徒的灵性操练', en: 'Christian Spirituality' },
  { n: 19, zh: '家庭、单身与婚姻', en: 'Family, Singleness, and Marriage' },
  { n: 20, zh: '诚实与不起誓', en: 'Truth and the Avoidance of Oaths' },
  { n: 21, zh: '基督徒的管家职分', en: 'Christian Stewardship' },
  { n: 22, zh: '和平、公义与不抵抗', en: 'Peace, Justice, and Nonresistance' },
  { n: 23, zh: '教会与政府和社会的关系', en: "The Church's Relation to Government and Society" },
  { n: 24, zh: '神的王权', en: 'The Reign of God', confirmed: true },
];


export const notes: ChapterNote[] = [ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08, ch09, ch10, ch11, ch12, ch13, ch14, ch15, ch16, ch17, ch18, ch19, ch20, ch21, ch22, ch23, ch24].sort((a, b) => a.n - b.n);

export const resources = [
  { href: 'https://mennonitechurch.ca/cof', label: '加拿大门诺会：信仰告白介绍', desc: '英文，可在线阅读各章' },
  {
    href: 'https://www.mennoniteusa.org/wp-content/uploads/2024/02/Confession-of-Faith-In-a-Mennonite-Perspective.pdf',
    label: '英文原版全文 PDF',
    desc: '每章附经文出处和注释（Commentary）',
  },
  { href: 'https://mennoniteusa.org/confession-of-faith/', label: '美国门诺会：信仰告白', desc: '英文介绍页' },
  {
    href: 'https://www.cmu.ca/docs/cmupress/CMU-Understanding-the-Faith-from-a-Mennonite-Perspective.pdf',
    label: '《Understanding the Faith from a Mennonite Perspective》',
    desc: '配套的英文学习材料',
  },
];
