# Another Minima X Jekyll Theme

A clean, modern Jekyll theme with glassmorphism header and GitHub-style markdown rendering. Perfect for personal blogs and digital notebooks.

**[Live Demo](https://iqbwl.github.io/another-minima-x/)** | **[GitHub](https://github.com/iqbwl/another-minima-x)**

## Features

- 🎨 **Modern Design**: Glassmorphism header with blur effects
- 📝 **GitHub-Style Markdown**: Beautiful markdown rendering matching GitHub's style
- 🔽 **Dropdown Menus**: Support for nested navigation menus
- 🎯 **Clean Typography**: Inter font for excellent readability
- 📱 **Responsive**: Works perfectly on all devices
- 💬 **Disqus Integration**: Built-in comment system support
- 🔍 **SEO Optimized**: Jekyll SEO Tag integration
- 📊 **RSS Feed**: Automatic feed generation
- 🗺️ **Sitemap**: Automatic sitemap generation

## Quick Start

### 1. Create a New Jekyll Site

```bash
# Create a new Jekyll site
jekyll new my-blog
cd my-blog
```

### 2. Install the Theme

Add this to your `Gemfile`:

```ruby
gem "jekyll-remote-theme"
```

Add this to your `_config.yml`:

```yaml
remote_theme: iqbwl/another-minima-x

plugins:
  - jekyll-remote-theme
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
```

### 3. Install Dependencies

```bash
bundle install
```

### 4. Run Your Site

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site!

---

## Installation Methods

### Method 1: Remote Theme (Recommended)

This is the easiest way to use the theme. Perfect for GitHub Pages.

**Step 1:** Add to your `Gemfile`:

```ruby
gem "jekyll-remote-theme"
gem "jekyll-feed"
gem "jekyll-seo-tag"
gem "jekyll-sitemap"
```

**Step 2:** Add to your `_config.yml`:

```yaml
remote_theme: iqbwl/another-minima-x

plugins:
  - jekyll-remote-theme
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
```

**Step 3:** Install and run:

```bash
bundle install
bundle exec jekyll serve
```

### Method 2: Fork or Clone

For full control and customization:

```bash
# Clone the repository
git clone https://github.com/iqbwl/another-minima-x.git my-blog
cd my-blog

# Install dependencies
bundle install

# Run the site
bundle exec jekyll serve
```

## Configuration

Add these settings to your `_config.yml`:

```yaml
# Site metadata
title: Your Site Title
author:
  name: Your Name
  email: your.email@example.com

url: "https://yoursite.com"
description: Your site description

# Plugins
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap

# Navigation menu
header_pages:
  - title: About
    url: /about
  - title: External Link
    url: https://example.com
    external: true
  - title: More
    children:
      - title: Archive
        url: /archive
      - title: Tags
        url: /tags

# Disqus comments (optional)
disqus:
  shortname: your-disqus-shortname

# Permalink structure
permalink: /:slug
```

## Usage

### Creating Posts

Create posts in the `_posts` directory with the following frontmatter:

```yaml
---
layout: post
title: "Your Post Title"
slug: your-post-slug
author: Your Name
categories: [category1, category2]
comments: true
---
```

### Creating Pages

Create pages in the root directory with the following frontmatter:

```yaml
---
layout: page
title: "Your Page Title"
permalink: /your-page/
---
```

### Navigation Menu

Configure your navigation menu in `_config.yml`:

```yaml
header_pages:
  - title: About
    url: /about
  - title: Portfolio
    url: https://portfolio.example.com
    external: true  # Opens in new tab
  - title: Resources
    children:
      - title: Documentation
        url: /docs
      - title: GitHub
        url: https://github.com
        external: true
```

### Disqus Comments

To enable Disqus comments:

1. Sign up at [Disqus](https://disqus.com)
2. Add your shortname to `_config.yml`:

```yaml
disqus:
  shortname: your-disqus-shortname
```

3. Enable comments in post frontmatter:

```yaml
comments: true
```

## Customization

### Colors and Styles

The theme uses CSS custom properties (for light/dark mode colors) and SCSS `!default` variables (for typography and layout). Override them in your own `assets/css/style.scss`:

```scss
---
---

// Optional: override SCSS !default variables BEFORE importing "main"
$base-font-family: 'Inter', sans-serif;
$content-width: 1000px;

@import "main";

// Override theme colors via CSS custom properties
:root {
  --accent-color: #5E81AC;
  --link-color: #5E81AC;
}

[data-theme="dark"] {
  --accent-color: #81A1C1;
  --link-color: #81A1C1;
}
```

### Fonts

The theme uses Inter font by default. You can change this in `_includes/custom-head.html`.

## Development

To set up your environment for development:

```bash
git clone https://github.com/iqbwl/another-minima-x.git
cd another-minima-x
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see the theme in action.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/iqbwl/another-minima-x.

## License

The theme is available as open source under the terms of the [MIT License](LICENSE).

## Credits

Created by [Iqbwl](https://iqbwl.com). Based on the [Minima](https://github.com/jekyll/minima) theme by Jekyll.

## Support

If you like this theme, please give it a ⭐ on GitHub!
