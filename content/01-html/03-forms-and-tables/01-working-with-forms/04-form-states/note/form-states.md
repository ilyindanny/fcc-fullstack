---
title: Form States
---

#### Form States

##### Default state
- Initial state when a form control is rendered.
- Editable, focusable, and included in form submission.


##### Focused state
- Triggered when a user clicks or tabs into a form control.
- Browsers often show a blue outline or border.
- Can be styled via `input:focus`.


##### Disabled state
- Set using the `disabled` attribute.
- Cannot be edited, copied or focused.
- Excluded from form submission.
- Can be styled via `input:disabled`.


Example: {.marker}  

`<input disabled type="email">`{.language-html}  

Rendered `disabled` form: {.marker}  

<input disabled type="email" name="email" placeholder="example@mail.com">


##### Readonly state
- Set with the `readonly` attribute.
- Cannot be edited, **but** can still be focused.
- Included in form submission.
- Can be styled via `input[readonly]` attribute.


Example: {.marker}  

`<input readonly type="email">`{.language-html}  

Rendered `readonly` form: {.marker}  

<input readonly type="email" name="email" value="example@email.com">


##### Invalid state
- Triggered when input fails native validation (e.g. required, pattern, type mismatch).
- Shown automatically by the browser.
- Can be styled with `input:invalid`.



##### Valid state
- Input meets all native validation criteria.
- Can be styled via `input:valid`.



##### Hover state
- When the user moves the mouse pointer over the element.
- Commonly used for visual feedback.
- Can be styled with `input:hover`.


##### Active state
- Active while the element is being clicked (mouse button down).
- Good for button feedback.
- Can be styled with `button:active`.



##### Focus-visible (accessibility enhancement)
- `:focus-visible` only applies when focus was given via keyboard.
- Improves UX by avoiding unwanted outlines on mouse click.
- Can be styled with `input:focus-visible`.



##### Notes
- `readonly` allows copying but not editing.
- `disabled` makes the field entirely inert and skipped in submission.
- `:invalid` and `:valid` help with visual form validation.
- `:focus-visible` is a best practice for accessibility (keyboard navigation).
- Combining these states in CSS allows for detailed form interaction design.