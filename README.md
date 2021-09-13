# Eleventy Midnight Blog Starter

Minimalist dark mode starter template for 11ty with support for jsfiddle embeds and prismjs syntax highlighting.

Demo [https://11ty-midnight.netlify.app](https://11ty-midnight.netlify.app)

## Features

1. Minimalist dark mode design
2. Color gradient highlights
3. Support for jsfiddle embeds
4. Code formatting using prisma

## Getting Started

### 1. Clone this Repository

```
git clone https://github.com/sidswork/11ty-midnight.git my-blog-name
```

Or you can click the `Use this template` button on the repository to make a copy of the repository.

### 2. Navigate to the directory

```
cd my-blog-name
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies

```
npm install
```

### 4. Edit \_data/metadata.json

This file contains all the metadata related to the blog like the title, description, etc.

### 5. Run Eleventy

```
npx eleventy
```

Or build and host locally for local development

```
npx eleventy --serve
```

Or build automatically when a template changes:

```
npx eleventy --watch
```

Or in debug mode:

```
DEBUG=* npx eleventy
```

### Implementation Notes

- `about/index.md` shows how to add a content page.
- `posts/` has the blog posts but really they can live in any directory. They need only the `post` tag to be added to this collection.
- Add the `nav` tag to add a template to the top level site navigation. For example, this is in use on `index.njk` and `about/index.md`.
- Content can be any template format (blog posts needn’t be markdown, for example). Configure your supported templates in `.eleventy.js` -> `templateFormats`.
  - Because `css` and `png` are listed in `templateFormats` but are not supported template types, any files with these extensions will be copied without modification to the output (while keeping the same directory structure).
- The blog post feed template is in `feed/feed.njk`. This is also a good example of using a global data files in that it uses `_data/metadata.json`.
- This example uses three layouts:
  - `_includes/layouts/base.njk`: the top level HTML structure
  - `_includes/layouts/home.njk`: the home page template (wrapped into `base.njk`)
  - `_includes/layouts/post.njk`: the blog post template (wrapped into `base.njk`)
- `_includes/postlist.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `index.njk` has an example of how to use it.

## Shortcodes

### JSFiddle

You can embed [jsFiddle](https://jsfiddle.net/) iframes using this shortcode

```
{% jsFiddle "<iframe-src-from-jsfiddle>" %}
```

Example

```
{% jsFiddle "//jsfiddle.net/sidswork/apk0wg96/embedded/js,html,result/dark/" %}

```

## References

Dark mode blog starter based on the [Official Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog)

Eleventy Home Page [https://www.11ty.dev](https://www.11ty.dev)
