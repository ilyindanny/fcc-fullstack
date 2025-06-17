---
title: Button Element
---

## Button Element

### Basic Usage

- The `<button>` tag is a universal element for triggering actions.
- By default, a button without a `type` acts as `'submit'`.

```html
<button>Start Game</button>
```


### `type="button"`

- Does **not** submit a form.
- Used for JavaScript-triggered actions.

Example: {.marker}  

`<button type="button">Show Alert</button>`{.language-html}  

An analog of the "input" element: {.marker}  

`<input type="button" value="Click me" />`{.language-html}  

---

### `type="submit"`

- Submits the parent form.
- The `action` attribute on the `<form>` defines the destination.

Example: {.marker}  

```html
<form>
  <input type="email" name="email" />
  <button type="submit">Submit</button>
</form>
```

An analog of the "input" element: {.marker}  

`<input type="submit" value="Submit" />`{.language-html}



### `type="reset"`

- Resets all form fields to their initial values.
- Rarely used due to risk of accidental data loss.

Example: {.marker}  

```html
<form>
  <input type="email" />
  <button type="reset">Reset</button>
</form>
```

An analog of the "input" element: {.marker}  

`<input type="reset" value="Reset" />`{.language-html}  


### `<button>` vs `<input type="...">`

- `<button>` supports nested content like text, icons, or HTML.
- `<input>` supports only the `value` attribute.
- Styling is more flexible with `<button>`.
- `<button>` is generally preferred for better control and design.


### Default Behavior Notes

- A button without `type` defaults to `'submit'`.
- Pressing Enter in a form activates the first `'submit'` button.
- The `formnovalidate` attribute skips built-in HTML validation:

```html
<button type="submit" formnovalidate>Send without check</button>
```


### JavaScript Example

```html
<button type="button" onclick="alert('Hello')">Show Alert</button>
```

Rendered: {.marker}  

<button type="button" onclick="alert('Hello')">Show Alert</button>


### Styling Differences

- `<button>` and `<input type="button">` have different default styles.
- Styling varies by browser (user-agent stylesheet).
- Best practice: apply a CSS reset for consistent design.