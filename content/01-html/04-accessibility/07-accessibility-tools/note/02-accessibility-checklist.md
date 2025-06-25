---
title: Accessibility Checklist
---

## Accessibility Checklist

### 1. Semantic HTML Structure

- **Use semantic elements** (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, etc.)
  - Helps screen readers understand the content structure.
  - Avoid `<div>` and `<span>` when a semantic tag exists.
- **Use heading elements (`<h1>`–`<h6>`) in proper order**
  - Only one `<h1>` per page.
  - Use heading levels according to the document structure, without skipping levels.


### 2. Text Alternatives for Non-Text Content

- **Provide `alt` attributes for all images**
  - Describes the image for users who can't see it.
  - Use `alt=""` for purely decorative images.


### 3. Forms

- **Every form input should have a `<label>`**
  - Use `for` and `id`, or nest the input inside the label.
- **Use `fieldset` and `legend` for grouped inputs**
  - Especially useful for radio buttons and checkboxes.


### 4. Keyboard Navigation

- **All interactive elements must be reachable via keyboard**
  - Make sure elements like `<a>`, `<button>`, `<input>` are focusable.
  - Avoid using `<div>` or `<span>` as interactive elements without adding `tabindex` and `role`.


### 5. Use ARIA Attributes Only When Necessary

- **ARIA should supplement, not replace, native HTML semantics**
  - For example, use `role="button"` and `aria-expanded="true|false"` only when creating custom interactive components.
  - Prefer semantic HTML over ARIA whenever possible.


### 6. Focus Management

- **Users should always know where their focus is**
  - Provide visible `:focus` styles for all focusable elements.
  - On modal open, move focus to the modal’s first interactive element or heading.


### 7. Color and Contrast

- **Text must have sufficient contrast with background**
  - Minimum ratio: 4.5:1 for normal text, 3:1 for large text.
  - Use tools like WebAIM Contrast Checker to test your colors.


### 8. Responsive Design and Zoom

- **Allow page zoom on mobile**
  - Don’t use `user-scalable=no` in the viewport meta tag.
- **Use relative units (`rem`, `em`) instead of `px`**
  - Ensures better scalability for different user settings.


### 9. Accessible Names and Roles

- **All interactive elements must have a clear name**
  - Use visible text like `<button>Submit</button>`, or `aria-label="Submit form"` for custom elements.
  - Screen readers rely on these labels to describe actions.


### 10. Accessibility Testing

#### Tools

- **Google Lighthouse** (built into Chrome/Edge DevTools)
- **axe DevTools** (Chrome/Edge extension)
- **WAVE** (online or extension)
- **Screen Reader Testing**:
  - VoiceOver (macOS/iOS)
  - Narrator (Windows)
  - NVDA (Windows)
  - TalkBack (Android)

#### Manual Testing

- Navigate the entire site using only the `Tab` key
- Use a screen reader to verify content order and descriptions
- Zoom text or page to 200% and test usability


### Final Recommendations

- Start with proper semantic HTML; it covers most accessibility needs.
- Think from the perspective of users with impairments.
- Audit your work incrementally, not just at the end.
- Do not treat accessibility as optional or something to “add later.”
- When possible, test on real devices and with real users.

