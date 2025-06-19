---
title: Tables
---

#### Tables

Use `<table>` only for **tabular data** — data that’s organized in rows and columns.  
Avoid using tables for layout — that’s outdated and should be done with **CSS Grid** or **Flexbox**.


Example: {.marker}  

```html
<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Anna</th>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">Ilya</th>
      <td>25</td>
    </tr>
  </tbody>
</table>
```

- `<table>` — main container
- `<thead>` — header section
- `<tbody>` — main data
- `<tfoot>` — footer (totals, notes)
- `<tr>` — table row
- `<th>` — header cell (bold, centered by default)
- `<td>` — data cell


##### Table Attributes

###### General

- `id`, `class`, `style` — standard HTML attributes
- Prefer CSS over inline styles

###### `<table>`

- `summary`, `border`, `width` — obsolete
- Use CSS for layout and borders

###### `<th>`, `<td>`

- `colspan="n"` — merge horizontally
- `rowspan="n"` — merge vertically
- `headers="id1 id2"` — reference related headers
- `scope="col"` / `"row"` — define the direction of header
- `abbr="..."` — short label for screen readers or narrow screens

```html
<th scope="row">Name</th>
<td>Anna</td>
```

###### ARIA

- `aria-label="..."` — label for assistive tech
- `aria-hidden="true"` — hide element from screen readers
- `role="presentation"` — mark as visual-only (use with caution)


##### Semantic and Accessible Tables

- Use `<th>` for actual headers
- Use `scope` instead of `headers` where possible
- Avoid overusing `rowspan` / `colspan` — it complicates accessibility
- Keep structure **logical and simple**


Rendered: {.marker}  

<table>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>

<thead>
<tr>
  <th scope="col">Name</th>
  <th scope="col">Age</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">Anna</th>
  <td>30</td>
</tr>
<tr>
  <th scope="row">Ilya</th>
  <td>25</td>
</tr>
</tbody>

</table>