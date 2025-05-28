---
title: Figure And Figcaption Elements
---

#### Figure And Figcaption Elements

`<figure>` and `<figcaption>` — semantic container for self-contained content

Used to group any content (not just images) that is related to the main text but remains self-contained and meaningful on its own. Commonly paired with `<figcaption>` for a caption.


##### `<figure>` — self-contained block of content  
Semantic container for:  
- images  
- charts  
- code snippets  
- videos  
- audio  
- tables  
- formulas  
- illustrations  
- quotes


##### `<figcaption>` — caption for the figure  
Provides a textual description. Can appear before or after the content.



##### Examples: {.language-html}  

**Image:**

```html
<figure>
  <img src="chart.png" alt="Sales chart">
  <figcaption>Figure 1: Quarterly sales in 2025.</figcaption>
</figure>
```

**Code snippet:**

```html
<figure>
  <pre><code>function greet() { console.log("Hello"); }</code></pre>
  <figcaption>Listing 1: Simple greeting function.</figcaption>
</figure>
```

**Video:**

```html
<figure>
  <video controls src="demo.mp4"></video>
  <figcaption>Video 1: App walkthrough.</figcaption>
</figure>
```


##### Best practice

Use `<figure>` when the content + caption can be removed from the main text without breaking its meaning.


##### Display behavior

- Block-level element  
- Often placed inside `<article>`, `<section>`, `<main>`  
- Usually rendered with default margins and styled with CSS  