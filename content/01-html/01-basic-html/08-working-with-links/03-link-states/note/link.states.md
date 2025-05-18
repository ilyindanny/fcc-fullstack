---
title: Link States in CSS
---

#### What Are Link States?

Links can exist in different **states** depending on how the user interacts with them.  
These pseudo-classes allow dynamic styling, which improves UX and accessibility.

> `:focus` is not the same as `:hover`.  
> Focus means the element is active for **keyboard interaction** (e.g., selected via Tab), not just hovered.

---

##### Link States Overview

- `:link` — the link has **not** been visited yet  
- `:visited` — the link **has** been opened before  
- `:hover` — the mouse is hovering over the link  
- `:focus` — the link is **focused** (via Tab or mouse click)  
- `:active` — the link is being activated (usually during **mouse-down**)

**Correct CSS order**:  
`link → visited → hover → focus → active`

Mnemonic: **LoVe FAt HAir**


##### CSS Example

```css
a:link {
  color: blue;
  text-decoration: none;
}

a:visited {
  color: gray;
}

a:hover {
  color: orange;
  text-decoration: underline;
}

a:focus {
  outline: 2px dashed orange;
}

a:active {
  color: red;
}
```