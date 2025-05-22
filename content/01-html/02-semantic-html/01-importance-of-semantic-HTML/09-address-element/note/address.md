---
title: Address Element
---

#### Address Element

What is the `<address>` element?

Defines contact information for a person, organization, or section.


##### Semantics

Use for **author** or **organization** contact info.  
Better than generic `<div>` for contact blocks.


##### Typical Content

- Name  
- Physical address  
- Phone number  
- Email  
- Website or social links


Example: {.marker}

```html
<address>
  <h2>Company Name</h2>
  <p>
    1234 Elm Street<br />
    Springfield, IL 62701<br />
    USA
  </p>
  <p>Phone: <a href="tel:+15555555555">+1 (555) 555-5555</a></p>
  <p>Email: <a href="mailto:contact@company.com">contact@company.com</a></p>
</address>
```
Rendered: {.marker}  

<address>
  <h4>Company Name</h4>
  <p>
    1234 Elm Street<br />
    Springfield, IL 62701<br />
    USA
  </p>
  <p>Phone: <a href="tel:+15555555555">+1 (555) 555-5555</a></p>
  <p>Email: <a href="mailto:contact@company.com">contact@company.com</a></p>
</address>


##### Build in links:

Phone Links: {.marker}  

Use `tel:` for clickable phone numbers on supported devices:  
`<a href="tel:+1234567890">Call us</a>` {.language-html}  


Email Links: {.marker}  

Use `mailto:` to open email clients:  

`<a href="mailto:user@example.com">Email</a>` {language-html}  

⚠️ Can be used by spammers (visible in source)


##### Other Links

You can include links to social profiles or websites inside `<address>`.


#### Placement

Usually placed:  {.marker}  

- Inside `<footer>` for site-wide contact  
- At end of an `<article>` for author info


##### Avoid

- Putting unrelated info (hours, maps) inside  
- Using for non-contact content  
- Styling as block unless needed — not all browsers render as block by default
