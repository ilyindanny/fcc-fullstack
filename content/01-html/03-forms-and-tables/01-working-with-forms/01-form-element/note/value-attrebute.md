---
title: Value Attribute
---

#### Value Attribute in Forms

The `value` attribute defines the data submitted to the server. Its meaning depends on the element:

- `input`: content or state
- `textarea`: uses inner content, not `value`
- `option`: submitted when selected
- `button`: action name if clicked
- `submit/reset`: optional identifier (if `name` is set)


##### Submission Rules

Only elements with a `name` are submitted. If no `value` is defined, some types default to `"on"` (e.g., checkbox, radio).


##### Radio Buttons

- Must share the same `name`
- Only one selected value is sent
- Always set `value` to distinguish options

`<input type="radio" name="color" value="green">`{.language-html}  

- Submits: `color=green`  
- Without `value`: `color=on` (useless)


##### Checkboxes

1. Unique `name` (boolean flag)  

`<input type="checkbox" name="subscribe">`{.language-html}  

- Checked - `subscribe=on`
- Unchecked - not submitted
- `value` optional

2. Grouped `name` (multi-choice)  

```html
<input type="checkbox" name="fruit" value="apple">
<input type="checkbox" name="fruit" value="banana">
```

- Submits: `fruit=apple`, `fruit=banana`  
- `value` required


##### Select & Option

```html
<select name="size">
  <option value="M">Medium</option>
</select>
```

- Submits: `size=M`  
- Without `value`: label text is used


##### Buttons

`<button type="submit" name="action" value="save">Save</button>`{.language-html}  

Only the clicked button submits its `name=value`.  
Essential when multiple actions exist.


##### Key Points

- Radios and grouped checkboxes require `value`
- Unique checkboxes default to `"on"`
- No `name` - not submitted, even if `value` is set

```html
<input type="text" value="invisible">
<!-- Not submitted (no name) -->
```

##### Example Payload

```html
<form>
  <input type="radio" name="color" value="red" checked>
  <input type="checkbox" name="subscribe" checked>
  <input type="checkbox" name="fruit" value="apple" checked>
  <button type="submit" name="action" value="save">Save</button>
</form>
```

Submits:

```bash
color=red
subscribe=on
fruit=apple
action=save
```