---
title: Hierarchy in HTML
---

#### Why is it important to have good structural hierarchy?

- Structural hierarchy relies on proper use of heading elements: `h1`, `h2`, `h3`, etc.
- Heading levels indicate the importance and nesting of content.
- `h1`: top-level heading, usually one per page, appears before main content.
- `h2`: subheading, can appear multiple times, used to separate sections.
- `h3`: sub-subheading, must follow `h2` (never skip levels like `h1` → `h3`).
- Multiple headings at the same level are allowed (e.g., multiple `h2`).
  
**Example of correct heading order:**  
```
<section>
  <h1>freeCodeCamp</h1>
  <h2>Learn Front-End Development</h2>
  <h2>Learn Back-End Development</h2>
</section>
```

**Incorrect example (`h3` before `h2`):** 
```
<section>
  <h1>freeCodeCamp</h1>
  <h3>Learn Front-End Development</h3>
  <h2>Learn Back-End Development</h2>
</section>
```

- Do not choose heading elements based on visual style (e.g., `h1` for big text). Use CSS for styling.
- Proper hierarchy improves accessibility: screen readers rely on correct heading order to guide users.
- Incorrect heading order can confuse assistive technologies, making users miss or misunderstand content.
- Proper hierarchy improves SEO: search engines parse structure to rank pages correctly.
- Malformed structure may cause HTML to be invalid; browsers then guess the intent, which can break the layout or logic.

Summary: Always use headings in order (`h1` → `h2` → `h3`, etc.) to ensure accessibility, SEO, and valid HTML.