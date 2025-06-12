---
title: Form Element
---

#### Form Element

Container for collecting user input.

##### `form` element

- `action=""` — send data to the current URL.
- `action="https://..."` — send to external/internal endpoint.
- Default method: `GET`. Can be changed via `method="post"`.
- An empty `action` turns the form into a UI-only component.
- `onsubmit="return false"` prevents form from submitting (useful for demos).


##### `input` element

`name="..."` — required to include the field in submission.

`required`, `readonly`, `disabled`, `autocomplete` — enhance UX and behavior.

- `type` attribute:
  - `text` — plain string.
  - `email` — validates email format.
  - `radio` — single option in a group (requires shared `name="group"`).
  - `checkbox` — multiple selections; `checked` preselects it.
  - `submit` — submission button; `value="Label"` defines button text; `formnovalidate` — disables form validation.
  -  Instead of `submit` can be `<button type="submit">Label</button>`{.language-html}  for more flexibility.

- `placeholder` — shows hint inside the field.



##### `textarea` element

Multiline input field. Not a void element.

```html
<textarea id="description" placeholder="Enter your purposes"></textarea>
```


##### `label` element

Binds text to an input field.

- Implicit association (nesting), good for checkboxes and radio-buttons:
  ```html
  <label>Username: <input type="text" /></label>
  ```

- Explicit association (via `for` and `id`) better for text tags:
  ```html
  <label for="email">Email:</label>
  <input id="email" type="email" />
  ```
- An element requires `id` when using explicit `label`.


##### Architectural Notes

- Use semantic input types for better UX and validation.
- Prefer `for`/`id` explicit linking for accessibility.
- Group related radio buttons with same `name`.
- Use `checked` to define default selection (checkbox/radio).
- Use `fieldset` and `legend` to semantically group related controls.


Example: {.marker}  

```html
<form action="">

<label for="name">Name: </label>
<input id="name" type="text" name="user_name" placeholder="John Doe" required />
<br />

<label for="email">Email: </label>
<input id="email" type="email" name="email" placeholder="example@mail.com" required />
<br />

<label for="desc">Message: </label>
<textarea id="desc" name="comment" placeholder="Write here..."></textarea>
<br />

<label>
    <input type="checkbox" name="subscribe" checked />
    Subscribe
</label>
<br />

<label>
    <input
        id="radio-online"
        type="radio"
        name="mode"
        value="online"
        checked />
    Online
</label>

<label>
    <input
        id="radio-offline"
        type="radio"
        name="mode"
        value="offline" />
    Offline
</label>
<br />

<input type="submit" name="action" value="Send" />

<input type="submit" name="action" value="Cancel" formnovalidate />

</form>
```

This URL will be sent as a result:


`?user_name=John&email=test%40mail.com&comment=Hello&subscribe=on&mode=online&action=Send`


Rendered: {.marker}  

<form action="#" onsubmit="return false">

<label for="name">Name: </label>
<input id="name" type="text" name="user_name" placeholder="John Doe" required />
<br />

<label for="email">Email: </label>
<input id="email" type="email" name="email" placeholder="example@mail.com" required />
<br />

<label for="desc">Message: </label>
<textarea id="desc" name="comment" placeholder="Write here..."></textarea>
<br />

<label>
    <input type="checkbox" name="subscribe" checked />
    Subscribe
</label>
<br />

<label>
    <input
        id="radio-online"
        type="radio"
        name="mode"
        value="online"
        checked />
    Online
</label>

<label>
    <input
        id="radio-offline"
        type="radio"
        name="mode"
        value="offline" />
    Offline
</label>
<br />

<input type="submit" name="action" value="Send" />

<input type="submit" name="action" value="Cancel" formnovalidate />

</form>