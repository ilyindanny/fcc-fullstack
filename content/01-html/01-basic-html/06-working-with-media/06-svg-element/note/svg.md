---
title: SVG
---

#### SVG (Scalable Vector Graphics)

SVG is a **vector image format** — unlike raster formats (`JPG`, `PNG`), which are **pixel-based**.

##### Advantages
- **Scales infinitely** without losing quality.
- Defined in **XML**, so can be embedded directly into HTML.
- **Styleable** with CSS (e.g. fill, stroke, size).
- **Lightweight** for simple graphics and icons.

##### When to Use

- Icons and UI elements.
- Logos and diagrams.
- Custom bullets and decorative shapes.

##### Use Cases (How to Use SVG)

###### 1. Inline SVG — directly in HTML

```html
<svg width="24" height="24" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" fill="red" />
</svg>
```

- Full control via CSS (`fill`, `stroke`) and JavaScript.
- Part of the DOM.
- Ideal for interactive or animated graphics.


###### 2. External SVG — as a regular image

`<img src="https://example.com/icon.svg" alt="icon" />`{.language-html}

- Used like any image (`<img>` tag).
- No access to internal SVG structure.
- Best for simple, static icons.


###### 3. SVG via Icon Library — using Font Awesome

From CDN: {.marker}  

```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>
  <i class="fas fa-camera"></i>
</body>
```

From local install (npm): {.marker}  

`npm install @fortawesome/fontawesome-free`{.language-bash}

`import '@fortawesome/fontawesome-free/css/all.min.css';`{.language-js}

- Useful for many ready-to-use icons.
- Easy to style with CSS:

`<i class="fas fa-star" style="color: gold; font-size: 24px;"></i>`{.language-html}  


##### Tools & Libraries
- [Font Awesome](https://fontawesome.com) – icon library based on SVG.
- Inkscape, Figma, Illustrator – for creating and editing SVG files.


##### Tip
Open an `.svg` file in a text editor — it's just readable XML code!