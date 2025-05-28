---
title: Img Element
---

#### Img Element

`<img>` — embedding images in HTML.  

Displays an image as **inline content**. It is a **void element** — it doesn’t have a closing tag.


##### Basic syntax  

- `src` — (source) path to the image file (**required**)
- `alt` — (alternative text) for screen readers and fallback if image fails (**required for semantics**)

Example: {.marker}  

`<img src="cat.jpg" alt="A cat sitting on a windowsill">` {.language-html}  


##### Width and height  

- Can use **px** or **%**, but it’s **better to control size via CSS**
- Setting dimensions helps avoid layout shifts during loading

Example: {.marker}  

`<img src="cat.jpg" alt="Cat" width="300" height="200">` {.language-html}  


##### Responsive images  

- `srcset` — list of image files with their width descriptors
- `sizes` — tells the browser how much space the image will take depending on screen size

Example: {.marker}  

```html
<img srcset="cat-480.jpg 480w, cat-800.jpg 800w" sizes="(max-width: 600px) 480px, 800px"
     src="cat-800.jpg" alt="Responsive cat">
```

##### Captioned image — `<figure>` + `<figcaption>`  

- `<figure>` — groups image and its caption
- `<figcaption>` — adds a caption below or above the image

Example: {.marker}  

```html
<figure>
  <img src="cat.jpg" alt="A sleeping cat">
  <figcaption>Figure 1: A cat enjoying the sun.</figcaption>
</figure>
```


##### Additional notes  

- `<img>` is **inline**, but often wrapped in block-level containers (like `<figure>`)
- Prefer `<img>` over CSS background images if the image carries semantic or informative meaning