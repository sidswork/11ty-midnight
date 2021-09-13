---
title: Markdown Guide
description: Sample markdown syntax
date: 2021-08-05
tags: guide
layout: layouts/post.njk
---

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

## Emphasis

_This text will be italic_
_This will also be italic_

**This text will be bold**
**This will also be bold**

_You **can** combine them_

~~Strikethrough~~

## Blockquotes

> Blockquotes can be written like this

## Lists

Sometimes you want numbered lists:

1. One
2. Two
3. Three

Sometimes you want bullet points:

- Start a line with a star
- Profit!

Alternatively,

- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this

## Code

Single line `var example = true`

Multiple lines

```
if (isAwesome){
  return true
}
```

And if you'd like to use syntax highlighting, include the language:

```javascript
if (isAwesome) {
  return true;
}

console.log("Hello World");
```

## Tables

| Option | Description     |
| ------ | --------------- |
| row 1  | Lorem ipsum     |
| row 2  | Hello World     |
| row 3  | Markdown syntax |

Right aligned columns

| Option |     Description |
| -----: | --------------: |
|  row 1 |     Lorem ipsum |
|  row 2 |     Hello World |
|  row 3 | Markdown syntax |

## Links

[Github](https://github.com)

## Images

![stormtroopocat](https://octodex.github.com/images/stormtroopocat.png)
