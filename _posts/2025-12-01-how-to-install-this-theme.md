---
layout: post
title: "How to Install This Theme"
slug: how-to-install-this-theme
author: Iqbwl
categories: [tutorial, installation]
comments: true
---

# How to Install Another Minima X Jekyll Theme

Want to use this beautiful theme for your own Jekyll site? Here's a complete guide to get you started!

## Prerequisites

Before you begin, make sure you have:

- Ruby installed (version 2.7 or higher)
- Jekyll installed (`gem install jekyll bundler`)
- A GitHub account (for GitHub Pages deployment)

## Installation Methods

There are two ways to use this theme:

### Method 1: Remote Theme (Recommended)

This is the easiest method and works great with GitHub Pages!

#### Step 1: Create Your Site

```bash
# Create a new Jekyll site
jekyll new my-awesome-blog
cd my-awesome-blog
```

#### Step 2: Configure Gemfile

Open your `Gemfile` and add these gems:

```ruby
gem "jekyll-remote-theme"
gem "jekyll-feed"
gem "jekyll-seo-tag"
gem "jekyll-sitemap"
```

#### Step 3: Configure _config.yml

Open `_config.yml` and add:

```yaml
# Theme
remote_theme: iqbwl/another-minima-x

# Site Information
title: Your Site Title
subtitle: Your site subtitle
author:
  name: Your Name
  email: your.email@example.com

url: "https://yourusername.github.io"
description: Your site description

# Plugins
plugins:
  - jekyll-remote-theme
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap

# Navigation
header_pages:
  - title: About
    url: /about
  - title: GitHub
    url: https://github.com/yourusername
    external: true

# Permalink
permalink: /:slug
```

#### Step 4: Install and Run

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` - your site is now using Another Minima X theme! 🎉

---

### Method 2: Fork or Clone

For full control and customization:

#### Step 1: Clone the Repository

```bash
git clone https://github.com/iqbwl/another-minima-x.git my-blog
cd my-blog
```

#### Step 2: Customize

1. Edit `_config.yml` with your information
2. Remove example posts from `_posts/`
3. Add your own content

#### Step 3: Run

```bash
bundle install
bundle exec jekyll serve
```

---

## Deploying to GitHub Pages

### Step 1: Create GitHub Repository

Create a new repository named `yourusername.github.io`

### Step 2: Push Your Code

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as the source
4. Your site will be live at `https://yourusername.github.io`

---

## Customization Tips

### Change Colors

Create `assets/css/style.scss`:

```scss
---
---

@import "another-minima-x";

// Your custom colors
$primary-color: #your-color;
```

### Add Custom Navigation

Edit `_config.yml`:

```yaml
header_pages:
  - title: Home
    url: /
  - title: About
    url: /about
  - title: Portfolio
    url: https://portfolio.example.com
    external: true
```

### Enable Comments

Add Disqus to `_config.yml`:

```yaml
disqus:
  shortname: your-disqus-shortname
```

Then enable in post frontmatter:

```yaml
comments: true
```

---

## Creating Your First Post

Create a file in `_posts/` with format: `YYYY-MM-DD-title.md`

Example: `_posts/2025-12-01-my-first-post.md`

```yaml
---
layout: post
title: "My First Post"
slug: my-first-post
author: Your Name
categories: [blog, personal]
comments: true
---

# Hello World!

This is my first post using Another Minima X theme!
```

---

## Need Help?

- **Documentation**: [README.md](https://github.com/iqbwl/another-minima-x)
- **Issues**: [GitHub Issues](https://github.com/iqbwl/another-minima-x/issues)
- **Demo**: [Live Demo](https://iqbwl.github.io/another-minima-x/)

Happy blogging! ✨
