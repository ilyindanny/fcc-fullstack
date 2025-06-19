---
title: Label Element
---

## Label Element

### 1. Implicit Label

- Associates a `<label>` with a form element by nesting the element inside the `<label>`.
- Works with elements like:  
  `<input>`, `<select>`, `<textarea>`, `<button>`, `<meter>`, `<progress>`, `<output>`, and partially `<fieldset>`.

Example: {.marker}  

```html
<label>
  Username:
  <input type="text" name="username" />
</label>
```


### 2. Explicit Label

- Associates a `<label>` with a form element via the `for` attribute.
- The `for` value must match the `id` of the associated element.
- Works with the same elements as implicit labels.

Example: {.marker}  

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" />
```


### 3. aria-label (ARIA attribute for accessibility)

- Can be used on **any element**, typically interactive elements or those without visible text.
- Provides an accessible name (label) for screen readers.
- Commonly used for icon buttons or custom controls where no `<label>` exists.

Example: {.marker}  

```html
<button aria-label="Close window">
  <svg>...</svg>
</button>
```


### 4. alt (alternative text for images)

- Only used with `<img>`.
- Provides a description for screen readers and when the image fails to load.

Example: {.marker}  

```html
<img src="logo.png" alt="Company logo" />
```