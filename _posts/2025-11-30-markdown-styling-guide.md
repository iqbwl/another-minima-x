---
layout: post
title: "Markdown Styling Guide"
slug: markdown-styling-guide
author: Your Name
categories: [guide, markdown]
comments: true
---

# Markdown Styling Guide

This post demonstrates the GitHub-style markdown rendering included in the Another Minima X Jekyll Theme.

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Text Formatting

You can make text **bold**, *italic*, or ***bold and italic***.

You can also use ~~strikethrough~~ text.

## Code

Inline code looks like `this`.

Code blocks with syntax highlighting:

```python
class BlogPost:
    def __init__(self, title, content):
        self.title = title
        self.content = content
    
    def publish(self):
        print(f"Publishing: {self.title}")
        return True
```

```bash
# Install dependencies
bundle install

# Run Jekyll server
bundle exec jekyll serve
```

## Lists

### Unordered Lists

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
    - Deeply nested item
- Item 3

### Ordered Lists

1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

### Task Lists

- [x] Completed task
- [x] Another completed task
- [ ] Incomplete task
- [ ] Another incomplete task

## Links and Images

[Visit Jekyll documentation](https://jekyllrb.com)

[Link with title](https://jekyllrb.com "Jekyll Documentation")

## Blockquotes

> This is a simple blockquote.

> This is a multi-line blockquote.
>
> It can span multiple paragraphs and include **formatting**.
>
> — Quote Author

## Tables

| Feature | Supported | Notes |
|---------|-----------|-------|
| Markdown | ✅ | GitHub-style |
| Syntax Highlighting | ✅ | Multiple languages |
| Tables | ✅ | With alignment |
| Emoji | ✅ | 🎉 🚀 ✨ |

Aligned columns:

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left | Center | Right |
| Text | Text | Text |

## Horizontal Rules

---

## Emoji

You can use emoji in your posts! 🎉 🚀 ✨ 💻 📝

## Nested Elements

1. First ordered item
   - Unordered sub-item
   - Another sub-item
     ```python
     def nested_code():
         return "Code in a list!"
     ```
2. Second ordered item
   > A blockquote in a list
3. Third ordered item

## Escaping

You can escape markdown characters with backslash: \*not italic\*, \[not a link\]

---

That's it! This theme provides beautiful, GitHub-style markdown rendering for all your content. Happy writing! ✍️
