## Features

- Built for Jekyll
- Compatible with Github pages
- Index Pagination
- SEO
- Feed
- Prism Highlighter
- Sitemap
- Post Share
- Post Categories
- Related Posts
- Category Archives (Compatible with Github pages)
- Post Reviews with Stars
- Blurred Spoilers
- Table of Content
- Lazy Load Images
- Figure Images
- Integrations:
  - Disqus Comments
  - Google Analaytics
  - Mailchimp Integration
  - Adsense
  - Contact
- Design Features:
  - Bootstrap v4.x
  - Font Awesome
- Layouts:
  - Default
  - Post
  - Page
  - Archive
  - Categories (for 100% compatibility with Github pages)

## What’s Jekyll

If you aren’t familiar with Jekyll yet, you should know that it is a static site generator. It will transform your plain text into static websites and blogs. No more databases, slow loading websites, risk of being hacked…just your content. And not only that, with Jekyll you get free hosting with GitHub Pages! If you are a beginner we recommend you start with Jekyll’s Docs. Now, if you know how to use Jekyll, let’s move on to using this theme in Jekyll:

```sh
git clone https://github.com/wowthemesnet/jekyll-theme-memoirs.git
```

From the rood of your downloaded/cloned folder, open your terminal and install:

```ruby
gem install bundler
```

Then:

```ruby
bundle install
```

Edit `_config.yml` options. If your site is in root: `baseurl: ''`. Also, change your Google Analytics code, disqus username, authors, Mailchimp list etc.

Again, from your terminal:

```ruby
bundle exec jekyll serve --watch
```

You should be able to see your Jekyll project now, if you didn’t change the folder name you should see it live at `http://127.0.0.1:4000`

Start populating your blog by adding your `.md` files in `_posts`. Memoirs already has a few examples.

**YAML front matter options:**

post image - image: assets/images/mypic.jpg
external post image - image: "https://externalwebsite.com/image4.jpg"
disable page comments - comments:false
meta description (optional) - description: "this is my meta description"

**_YAML Post Example:_**

```sh
---
layout: post
title:  "We all wait for summer"
author: john
categories: [ Lifestyle, Travel ]
tags: [ France ]
image: assets/images/5.jpg
description: "Something about this post here"
---
```

**_YAML Page Example_**

```sh
---
layout: page
title: About Memoirs
comments: false
---
```

**_Rating_**

```sh
---
layout: post
title:  "We all wait for summer"
author: john
categories: [ Jekyll, tutorial ]
image: assets/images/5.jpg
description: "Something about this post here"
rating: 4.5
---
```

Enable this option by editing `_config.yml`.

```
# Adsense (change to "enabled" to activate, also your client id and ad slot. Create a new ad unit from your Adsense account to get the slot.)
adsense: "disabled"
adsense-data-ad-client: "ca-pub-3412143450191416"
adsense-data-ad-slot: "1363087678"
```

**_Lazy Load Images_**

Enable this option by editing `_config.yml`.

```sh
---
# Lazy Images ("enabled" or "disabled")
lazyimages: "enabled"
---
```

**_Table of Contents_**

Add `toc:true` on your post YAML.

```sh
---
layout: post
title:  "Education must also train one for quick, resolute and effective thinking."
author: john
categories: [ Jekyll, tutorial ]
image: assets/images/3.jpg
beforetoc: "Markdown editor is a very powerful thing. In this article I'm going to show you what you can actually do with it, some tricks and tips while editing your post."
toc: true
---
```

`beforetoc` adds a paragraph before the TOC is displayed.

**_Editing stylesheet_**

You’ll only work with a single file to edit/add theme style: assets/css/theme.scss.

> author: [wowthemesnet](https://github.com/wowthemesnet)
