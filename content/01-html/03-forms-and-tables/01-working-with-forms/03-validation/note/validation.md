---
title: Validation
---


#### Client-side Validation

- Checks form data *before* submission.
- Runs in the browser (on the client side).
- Improves UX and prevents invalid data from being submitted.
- Does **not** replace server-side validation (security is always server-side).



#### Main Validation Attributes

##### `required`

Ensures the field must be filled:

`<input type="email" required />`{.language-html}  


##### `type="..."` 

Some input types include built-in validation:

```html
<input type="email" />      <!-- basic email format check -->
<input type="url" />        <!-- basic URL format -->
<input type="tel" />        <!-- no validation by default -->
<input type="password" />   <!-- input hidden -->
```


##### `minlength`, `maxlength`

Set minimum and maximum number of characters:

`<input minlength="4" maxlength="64" />`{.language-html}  


##### `pattern`

Regex-based validation:

`<input type="text" pattern="\d{3}-\d{3}" />`{.language-html}  


##### `min`, `max`

Define numeric/date boundaries:

```html
<input type="number" min="1" max="10" />
<input type="date" min="2020-01-01" max="2030-01-01" />
```


##### `step`

Specify step intervals for number/date/range:

`<input type="number" step="0.01" />`{.language-html}  


##### `autocomplete`

Not a validation attribute, but enhances UX by suggesting previously entered values:

`<input name="email" autocomplete="email" />`{.language-html}  


#### Form- and Button-level Attributes

##### `novalidate`

Disables validation for the entire form:

`<form novalidate>`{.language-html}  


##### `formnovalidate`

Disables validation only for a specific submit button:

`<button type="submit" formnovalidate>Cancel</button>`{.language-html}  


#### Browser Behavior

- On invalid input:
  - Form submission is **blocked**.
  - Invalid fields are **highlighted**.
  - Default error messages are shown.
- Pseudo-classes:
  - `:valid`, `:invalid` — useful for styling feedback.


##### JavaScript API

##### Check form validity:

`form.checkValidity(); // returns true or false`{.language-js}  


##### Trigger native error message:

`input.reportValidity(); // shows default validation popup`{.language-js}  


##### Custom validation with JS:

```js
input.addEventListener("invalid", e => {
  e.preventDefault();
  alert("Custom validation message");
});
```


Examples: {.marker}  

##### Basic email validation:

```html
<form>
  <label>Email:</label>
  <input type="email" required />
  <button type="submit">Submit</button>
</form>
```


##### Email with length limits:

```html
<input
  type="email"
  required
  minlength="4"
  maxlength="64"
/>
```


##### Pattern-matching:

`<input type="text" pattern="\d{3}-\d{3}" />`{.language-html}  


##### Numeric range with step:

`<input type="number" min="0" max="100" step="5" />`{.language-html}  


##### Submit button bypassing validation:

`<button type="submit" formnovalidate>Cancel</button>`{.language-html}  


##### JS form validation:

```js
const form = document.querySelector("form");

if (form.checkValidity()) {
  // proceed with submission
} else {
  form.reportValidity(); // show error messages
}
```