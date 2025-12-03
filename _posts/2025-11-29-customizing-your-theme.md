---
layout: post
title: "Customizing Your Theme"
slug: customizing-your-theme
author: Your Name
categories: [tutorial, customization]
comments: true
---

# Customizing Your Theme

The Another Minima X Jekyll Theme is designed to be easily customizable. Here's how you can make it your own!

## Changing Colors

The theme uses SCSS variables for easy color customization. Create a file `assets/css/custom.scss` and override the variables:

```scss
---
---

@import "iqbwl-jekyll-theme";

// Custom color overrides
$primary-color: #your-color;
$background-color: #your-bg-color;
$text-color: #your-text-color;
```

## Modifying the Header

The header uses a glassmorphism effect. You can customize it by overriding the styles in your custom SCSS:

```scss
.site-header {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  // Add your custom styles
}
```

## Custom Fonts

To use a different font, modify `_includes/custom-head.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update your SCSS:

```scss
$base-font-family: 'Your Font', sans-serif;
```

## Navigation Menu

Customize your navigation menu in `_config.yml`:

```yaml
header_pages:
  - title: Home
    url: /
  - title: About
    url: /about
  - title: Blog
    url: /blog
  - title: Portfolio
    url: https://portfolio.example.com
    external: true
  - title: Resources
    children:
      - title: Documentation
        url: /docs
      - title: GitHub
        url: https://github.com
        external: true
```

## Layout Customization

You can override any layout by creating a file with the same name in your `_layouts` directory:

```
your-site/
├── _layouts/
│   └── post.html  # Your custom post layout
```

## Adding Custom CSS

Create `assets/css/style.scss` in your site:

```scss
---
---

@import "iqbwl-jekyll-theme";

// Your custom CSS
.custom-class {
  color: red;
}
```

## Footer Customization

Override `_includes/footer.html` to customize the footer content.

## Tips

- Always test your changes locally before deploying
- Use browser developer tools to inspect and test CSS changes
- Keep a backup of your customizations
- Check the theme documentation for more options

Happy customizing! 🎨
