---
title: Absolute vs Relative Paths
---

## Paths in Web Development

Paths define location of resources (files, images, pages).

Types: *absolute*, *relative*, *root-relative*.

 *Absolute path*  
- Starts from root or full URL (`https://...` or `file:///...`).  
- Used for external links or fixed locations.  
- `file:///` is for local files; `https://` is for web addresses.

 *Relative path*  
- Based on current file.  
- Compact and flexible — ideal for internal links.  
- Adapts better when moving files or folders.

Examples:  
`about.html` — same folder  
`../index.html` — one level up  
`../../img/logo.svg` — two levels up  
`./style.css` — current folder (often optional)

 *Root-relative path*  
- Starts with `/`, from website root.  
- Works with HTTP servers only (not with `file://`).

 *Base URL*  
- The `<base>` tag can define a base path for all relative URLs in a document.

**Best practices:**
- Use *absolute* for external.  
- Use *relative* during development.  
- Use *root-relative* when structure is stable.  
- Don’t mix styles unless needed.

**Common mistakes:**
- Confusing `https://...` (web) with `file:///...` (local).  
- Expecting `/path` to work with `file://`.  
- Wrong paths in `CSS` (they are relative to the CSS file).  
- `../` moves up one folder.