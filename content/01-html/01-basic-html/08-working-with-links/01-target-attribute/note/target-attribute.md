---
title: Target Attribute
---

#### Target Attribute

Specifies **where** a link or form opens — same tab, new tab, or frame.

##### Values

- `_self` – default, opens in the **same tab**.
- `_blank` – opens in a **new tab** (add `rel="noopener"`).
- `_parent` – opens in the **parent frame**.
- `_top` – opens in the **top-level window**.
- `_unfencedTop` – experimental, for Fenced Frames.

##### Example
```html
<a href="https://example.com" target="_blank" rel="noopener">New Tab</a>
```

**Named Targets**

Named targets allow you to open a link or form submission into a specific `<iframe>` or window by using its `name` attribute. If an element like `<iframe name="myFrame">` exists, `target="myFrame"` will load the page inside it. If no such target exists, the browser may open a new window with that name.

```html
<iframe name="myFrame"></iframe>
<a href="page.html" target="myFrame">Open in Frame</a>
```


**Forms**

Using `target="_blank"` in a `<form>` makes the form submission result open in a new tab or window. This can be useful when you don’t want to navigate away from the current page after submitting.

```html
<form action="/submit" target="_blank">...</form>
```

**Note**

Use `rel="noopener"` with `_blank` for security.


##### Security Note

When using `target="_blank"`, always add `rel="noopener"` (or `rel="noreferrer"`) to prevent the new page from having access to the original page via `window.opener`. This helps avoid potential security vulnerabilities such as phishing attacks.


##### Named Targets

The `target` attribute can refer to any named window or frame, not just the predefined keywords. For example, if an `<iframe>` or window has a `name` attribute, links or forms can target that specific window by name.


##### Modern Usage

Named frames are less common in modern web development. Today, developers often prefer using JavaScript frameworks and SPA architecture, reducing reliance on frames and multiple windows for navigation.