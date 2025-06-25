---
title: ARIA Labels
---

#### ARIA Labels

ARIA (Accessible Rich Internet Applications) attributes help make web content accessible to users with disabilities, especially those who rely on screen readers. The most commonly used ARIA labeling attributes are:

---

##### 1. Aria-label

**What it does**:  
Provides an explicit label to an element.

**Value**:  
A plain string of text.

**Use when**:
- The element has no visible label.
- You want to override the visible label with something clearer or more concise.
- You are using icon-only buttons or elements without readable text.

Example: {.marker}  

```html
<button aria-label="Close modal">
  <svg aria-hidden="true">...</svg>
</button>
```

Screen reader will announce: “Close modal”.


##### 2. Aria-labelledby

**What it does**:  
Uses the text content of one or more referenced elements (by ID) as the accessible name.

**Value**:  
One or more space-separated element IDs.

**Use when**:
- There is visible text you want to use as a label.
- You want to label an element using other existing DOM elements.
- You are labeling containers like `<section>`, `<form>`, `<fieldset>`, or custom widgets.

Example: {.marker}  

```html
<section id="about" aria-labelledby="about-heading">
  <h2 id="about-heading">About Us</h2>
  <p>We are a team of...</p>
</section>
```

Screen reader will announce: “Region, About Us”.


##### 3. Aria-describedby

**What it does**:  
Provides additional descriptive text, usually read after the label.

**Value**:  
One or more space-separated element IDs.

**Use when**:
- You want to add helper text, tooltips, or instructions.
- You have validation messages or context-sensitive help.
- You want to include supplementary info that is not the core label.

Example: {.marker}  

```html
<label for="email">Email</label>
<input id="email" aria-describedby="email-help">
<p id="email-help">We'll never share your email address.</p>
```

Screen reader says:  
“Email, edit text. We’ll never share your email address.”


##### Summary of When to Use Each Attribute

- Use `aria-label` when:
  - No visible text label exists.
  - You want to override the visible label with custom text.
  - You have an icon-only button or input.

- Use `aria-labelledby` when:
  - A visible heading, label, or group of elements can serve as the label.
  - You want to reuse existing content in the DOM for naming.
  - You’re labeling containers like sections, forms, or widgets.

- Use `aria-describedby` when:
  - You have extra information, like helper text or hints.
  - You want to provide additional instructions or error messages.

---

##### Best Practices

- Do not use both `aria-label` and `aria-labelledby` on the same element.
- `aria-labelledby` takes precedence over `aria-label` if both are used.
- Use `aria-describedby` only for additional info, not for main identification.
- Prefer native HTML elements (`<label>`, `<fieldset>`, `<legend>`, etc.) when possible.
- Always test your accessibility implementation with screen readers.

---

##### Use with Structural Elements

For `<section>`, `<nav>`, `<main>`, `<aside>`: {.marker}  

```html
<section aria-labelledby="contact-heading">
  <h2 id="contact-heading">Contact Information</h2>
</section>
```

This provides a clear name for the section and improves navigation for screen reader users.


For Custom Components or Widgets: {.marker}  

```html
<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <h2 id="dialog-title">Delete Item</h2>
  <p id="dialog-desc">Are you sure you want to delete this item?</p>
</div>
```

This describes both the purpose and the content of the dialog in a way screen readers can understand.

---

##### Recommended Reading

- [MDN Web Docs: ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Deque University – Screen Reader Testing](https://dequeuniversity.com/)