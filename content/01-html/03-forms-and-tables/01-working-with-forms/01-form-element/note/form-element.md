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

All `<input>` elements share common behavior:
- `name="..."` — required to include the field in form submission.
- `value="..."` — defines the initial value.
- `required`, `readonly`, `disabled`, `autocomplete` — control availability and UX.
- `placeholder="..."` — hint shown inside the field.



- Textual Inputs: {.marker}  

`text`  
: free-form text.

`email`  
: validates email format.

`password`  
: hides input characters.

`search`  
: optimized for search fields (may be styled by browser).

`tel`  
: phone number input (no built-in format validation).

`url`  
: validates web address format.


- Numeric Inputs: {.marker}  

`number`  
: numeric input only; supports `min`, `max`, and `step`.

`range`  
: slider UI; accepts `min`, `max`, and `step`.


- Date and Time Inputs: {.marker}  

`date`  
: date picker (YYYY-MM-DD).

`time`  
: time input (HH:MM).

`datetime-local`  
: date and time (without timezone).

`month`  
: selects month and year.

`week`  
: selects week number of the year.


- Choice Inputs: {.marker}  

`checkbox`  
: allows multiple selections;  
: `checked` marks it selected by default.

`radio`  
: single choice in a group;  
: all buttons must share the same `name="..."`;  
: `checked` defines default.


- File and Media Inputs: {.marker}  

`file`  
: file selector;  
: `accept="image/*"` limits types;  
: `multiple` allows multiple files.


- Buttons: {.marker}  

`submit`  
: submits the form;  
: `formnovalidate` disables validation;  
: `value="Label"` defines button text.

`reset`  
: resets all fields to their initial state.

`button`  
: does not submit; needs JS to work;  
: often replaced with `<button type="button">...</button>` for flexibility.


- Hidden Input: {.marker}  

`hidden`  
: not visible to user but included in submission;  
: useful for sending metadata or internal values.


##### `textarea` element

Multiline input field. Not a void element.

```html
<textarea id="description" placeholder="Enter your purposes"></textarea>
```


##### `label` element

Binds text to an input field.

- Implicit association (nesting), good for checkboxes and radio-buttons:
  ```html
  <label>Username: <input type="text"></label>
  ```

- Explicit association (via `for` and `id`) better for text tags:
  ```html
  <label for="email">Email:</label>
  <input id="email" type="email">
  ```
- An element requires `id` when using explicit `label`.


##### Architectural Notes

- Use semantic input types for better UX and validation.
- Group related radio buttons with same `name`.
- Use `checked` to define default selection (checkbox/radio).
- Use `fieldset` and `legend` to semantically group related controls.


Example: {.marker}  

```html
<form action="">

<label for="name">Name: </label>
<input id="name" type="text" name="user_name" placeholder="John Doe" required>
<br>

<label for="email">Email: </label>
<input id="email" type="email" name="email" placeholder="example@mail.com" required>
<br>

<label for="desc">Message: </label>
<textarea id="desc" name="comment" placeholder="Write here..."></textarea>
<br>

<label>
    <input type="checkbox" name="subscribe" checked>
    Subscribe
</label>
<br>

<label>
    <input
        id="radio-online"
        type="radio"
        name="mode"
        value="online"
        checked>
    Online
</label>

<label>
    <input
        id="radio-offline"
        type="radio"
        name="mode"
        value="offline">
    Offline
</label>
<br>

<input type="submit" name="action" value="Send">

<input type="submit" name="action" value="Cancel" formnovalidate>

</form>
```

This URL will be sent as a result:


`?user_name=John&email=test%40mail.com&comment=Hello&subscribe=on&mode=online&action=Send`


Rendered: {.marker}  

<form action="#" onsubmit="return false">

<label for="name">Name: </label>
<input id="name" type="text" name="user_name" placeholder="John Doe" required>
<br>

<label for="email">Email: </label>
<input id="email" type="email" name="email" placeholder="example@mail.com" required>
<br>

<label for="desc">Message: </label>
<textarea id="desc" name="comment" placeholder="Write here..."></textarea>
<br>

<label>
    <input type="checkbox" name="subscribe" checked>
    Subscribe
</label>
<br>

<label>
    <input
        id="radio-online"
        type="radio"
        name="mode"
        value="online"
        checked>
    Online
</label>

<label>
    <input
        id="radio-offline"
        type="radio"
        name="mode"
        value="offline">
    Offline
</label>
<br>

<input type="submit" name="action" value="Send">

<input type="submit" name="action" value="Cancel" formnovalidate>

</form>