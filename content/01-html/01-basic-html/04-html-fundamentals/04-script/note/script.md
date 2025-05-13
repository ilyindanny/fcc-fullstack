---
title: Script
---

## Why do we need Script?

The script element is used to embed executable code

**Example:**
alert('Welcome to freeCodeCamp')

```html
<body>
  <script>
    alert("Welcome to freeCodeCamp");
  </script>
</body>
```

**How to use**

While you can technically write all of your JavaScript code inside the script tags, it is considered best practice to link to an external JavaScript file instead. Here is an example of using the script element to link to an external JavaScript file:

```html
<script src="path-to-javascript-file.js"></script>
```

**A small tip:**

In order not to get confused in the file paths with a more complex structure, always remember:

*   `src="something.js"` — it searches in the same folder where index.html
*   `src="folder/something.js"` — searches in a subfolder
*   `src="../something.js"` — goes up a level
*   `"/something.js"` — it searches in the root of the server, not the project (it doesn't work on the locale without a server!)
