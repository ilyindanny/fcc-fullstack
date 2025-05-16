---
title: Localhost vs File://
---

## Difference Between `file://` and `http://localhost`

When you open an HTML file directly (`file://`), the browser runs without a server. When opened via `localhost` (like `http://127.0.0.1`), it uses a server.

### Where is the "root"?

- In `file://` mode, paths are relative to the folder where the file is located.
- In `localhost` mode, paths are relative to the folder defined as the server's root (e.g., `docs/`).

### Link Behavior

- `href="/lessons/page.html"` — works **only** when the file is opened via server, since the path is from the server root.
- `href="lessons/page.html"` — a relative path, works in both `file://` and `localhost` modes if the folder structure matches.
- `href="http://127.0.0.1/lessons/page.html"` — an absolute URL using the server, works as long as the server is running, regardless of how the file was opened.

### Practical Notes

- Even if the server is running, the browser won’t treat a file as served unless it was opened via the server.
- To use root-relative paths (`/something.html`), the file must be served via `localhost`.
- Relative paths (`../folder/file.html`) work, but they are based on the current file's location, not the server root.
- Absolute URLs with `http://127.0.0.1/...` always work if the server is running, even from a `file://` page.

```html
<!-- Only works in localhost mode -->
<a href="/lessons/lesson-0002.html">Next Lesson</a>

<!-- Works if folder structure matches -->
<a href="lesson-0002.html">Next Lesson</a>

<!-- Always works if server is running -->
<a href="http://127.0.0.1/lessons/lesson-0002.html">Next Lesson</a>
```