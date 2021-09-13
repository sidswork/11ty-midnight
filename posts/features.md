---
title: Features
description: Code highlight and JSFiddle for developers
date: 2021-08-06
tags: guide
layout: layouts/post.njk
---

## JSFiddle

{% jsFiddle "//jsfiddle.net/sidswork/apk0wg96/embedded/js,html,result/dark/" %}

## Code

### Highlight certain blocks of lines

```js/2-3
// this is a command
function myCommand() {
	let counter = 0;
	counter++;
}

// Comment here...
console.log('Test');
```

### Highlight diffs

```js/2,4/3,5
// this is some changed code
function doSomething() {
    let counter = 0;
    let counter = 100;
    counter++;
    counter--;
}

// Test with a line break above this line.
console.log('Test');
```
