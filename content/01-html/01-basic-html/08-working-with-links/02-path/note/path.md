---
title: File Paths
---

#### What Is a Path?

A **path** shows the location of a resource (file, image, page) in the file system or website structure.

Types of paths:
- **Absolute**
- **Relative**
- **Root-relative**

##### Absolute Path

A full address to a file — starts from the **root**.

- **Web**: Includes protocol + domain  
  `https://example.com/img/logo.png`

- **Local file (macOS)**:  
  `file:///Users/Daniel/Desktop/site/pages/about.html`

- **Local file (Windows)**:  
  `file:///C:/Users/Daniel/Desktop/site/pages/about.html`


##### Relative Path

Relative to the **current file's folder**. Shorter and flexible.

Examples:
- `about.html` — same folder  
- `../index.html` — one level up  
- `../../img/logo.svg` — two levels up  
- `./style.css` — current folder (optional `./`)

Works in both `file://` and `localhost` modes if folder structure is correct.

##### Root-Relative Path

Starts with `/` — relative to the **site root**, not current file.

Example:  
`/assets/css/main.css`

- Works only in **localhost** or live server.  
- Does **not** work in `file://` mode.

##### Base URL (optional)

The `<base href="/assets/">` tag in `<head>` changes how all relative paths are resolved. Use carefully.


##### Link Behavior Examples

**Absolute web URL**

`<a href="https://example.com/style.css">External</a>`


**Relative to current file**

`<a href="about.html">Same folder</a>`

`<a href="../index.html">Up one level</a>`


**Root-relative (server only)**

`<a href="/pages/lesson.html">From site root</a>`

**Localhost absolute URL**

`<a href="http://127.0.0.1/lessons/lesson.html">Always works if server runs</a>`

##### Common Mistake

- Mixing styles (absolute / relative / root-relative) inconsistently  


##### Best Practices

- Use absolute paths for external sites.  
- Use relative paths for internal links during development.  
- Use root-relative when served from a server and structure is stable.  
- Test root-relative paths only under localhost.


##### OS Path Formats vs browser format

**macOS:**
- `/Users/Daniel/Desktop/project/index.html`  
- Browser path:  
  `file:///Users/Daniel/Desktop/project/index.html`

**Windows:**
- `C:\Users\Daniel\Desktop\project\index.html`  
- Browser path:  
  `file:///C:/Users/Daniel/Desktop/project/index.html`