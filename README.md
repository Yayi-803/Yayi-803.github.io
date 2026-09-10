# Yayi 的博客

Website: https://yayi-803.github.io/

Hexo 7 blog using the original [Gal theme](https://github.com/ZEROKISEKI/hexo-theme-gal), inspired by https://lgswdn.github.io/. The reference author's articles and identity are not included. The artwork comes from the original theme and can be replaced with your own.

## Publish on GitHub

In this repository, open **Settings → Pages → Build and deployment → Source → GitHub Actions**. The included Publish blog workflow builds and publishes on every push to main. If necessary run it manually from **Actions → Publish blog → Run workflow**.

## Write a post in your browser

Open `source/_posts` on GitHub and choose **Add file → Create new file**. Name it `my-new-post.md` and use:

```markdown
---
title: 我的新文章
date: 2026-09-10 12:00:00
categories:
  - 随记
tags:
  - 生活
preview: /imgs/preview/preview1.jpg
---
这是文章摘要。

<!-- more -->

这里是正文。
```

Use the actual publication date; future posts remain hidden. Click **Commit changes** to save. Publishing normally takes a few minutes.

## Personalize

- Blog name, author, description: `_config.yml`
- About page: `source/about/index.md`
- Resources: `source/resources/index.md`
- Navigation, avatar, backgrounds, links: `themes/gal/_config.yml`
- Banner: `themes/gal/layout/_partial/issue.ejs`
- Images: `themes/gal/source/imgs/`

## Local preview

Install Node.js 22, then run `npm ci` and `npm start`. Open http://localhost:4000. Run `npm run build` to generate the complete static website into `public/`.

Theme license and credits are retained in `themes/gal/LICENSE`. Comments and third-party visitor counters are disabled by default. No secret keys are needed for this website.
