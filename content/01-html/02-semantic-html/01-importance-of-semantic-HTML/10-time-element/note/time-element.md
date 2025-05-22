---
title: Time Element
---

#### Time Element

`<time>` element represents a **specific time or date** in a **machine-readable** and **human-readable** way  

Example: {.marker}  

`<time datetime="2024-06-15">June 15</time>` {.language-html}  

- Use the `datetime` attribute to define the **ISO 8601** value  

Example: {.marker}  

`datetime="2024-06-15T15:00"`

Common ISO formats:  {.marker}  

  - Time: `"20:00"`  
  - Date: `"2024-06-15"`  
  - DateTime: `"2024-06-15T15:00"`  
  - Month: `"2024-06"`  
  - Year: `"2024"`  
  - Duration: `"PT2H"` (2 hours)

The separator `T` between date and time: {.marker}  

  `Example: "2024-06-15T15:00"`

Use cases: {.marker}  

  `Post published on <time datetime="2025-05-22">May 22</time>`  {.language-html}  
  
  `The flight is at <time datetime="20:00">20:00</time>` {.language-html}  

Benefits: {.marker}  

  - Improves **SEO**, **accessibility**, and **JS processing**
  - Supports **localization** and **calendar tools**

Avoid: {.marker}  

  - Missing `datetime`  
  - Invalid ISO format  
  - Misusing for generic content


Example: {.marker}  

```html
<p>
  This lecture was written on
  <time datetime="2025-05-22T12:40">May 22, 2025 at 12:40 PM</time>
</p>
```

Rendered: {.marker}  

<p>
  This lecture was written on
  <time datetime="2025-05-22T12:40">May 22, 2025 at 12:40 PM</time>
</p>