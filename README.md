# 信仰之路

一个初信基督徒的成长记录网站：主日讲道笔记、经文学习、圣经事件、个人感想和圣经资料，并有一页「认识福音」用来和朋友分享。

用 [Astro](https://astro.build) 生成静态网站，部署在 [Vercel](https://vercel.com)。

## 怎样发布新文章

每篇文章就是 `src/content/posts/` 里的一个 `.md` 文件，文件名用 `日期-英文简称.md`，比如 `2026-11-15-good-shepherd.md`（文件名就是网址）。

1. 复制 [docs/文章模板.md](docs/文章模板.md) 的内容。
2. 在 GitHub 打开 `src/content/posts/`，点 **Add file → Create new file**，粘贴并修改。
3. 文件开头 `---` 之间的几行要填好：
   - `title`：标题
   - `date`：日期，格式 `2026-11-15`
   - `category`：只能是 `主日笔记`、`经文学习`、`圣经事件`、`个人感想`、`圣经资料` 之一
   - `summary`：一两句摘要
   - `scriptures`：相关经文（可以不填）
   - 如果还没写完，加一行 `draft: true`，就不会显示在网站上
4. 点 **Commit changes** 保存。Vercel 大约一分钟后自动更新网站。

## 在自己电脑上预览

```bash
npm install
npm run dev
```

然后打开 http://localhost:4321 。

## 经文版本

中文为和合本（简体），英文为 King James Version，均为公版译本，文本来自 [scrollmapper/bible_databases](https://github.com/scrollmapper/bible_databases)。
