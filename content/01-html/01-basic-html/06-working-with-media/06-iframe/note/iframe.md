---
title: Iframe Element
---

#### iframe Element

##### Basic Syntax and Key Attributes

```html
<iframe src="..." width="..." height="..." title="..." allowfullscreen></iframe>
```

- `src`: URL of the embedded resource.
- `width`, `height`: Size of the embedded frame.
- `title`: Improves accessibility and SEO.
- `allowfullscreen`: Enables full-screen mode.

##### Important Attributes

- `allow`: Grants permissions to iframe (e.g., `autoplay`, `fullscreen`, `clipboard-write`).
- `referrerpolicy`: Controls the Referer header.
  - Examples: `no-referrer`, `origin`, `origin-when-cross-origin`.
- `sandbox`: Applies restrictions for security.
  - Useful flags:
    - `allow-scripts`
    - `allow-same-origin`
    - `allow-popups`
    - `allow-forms`

##### Accessibility and SEO

- Always provide a `title` for screen readers.
- Prefer meaningful descriptions if content is important.
- Search engines usually **don’t index** iframe content.

##### Embedding Videos

**YouTube**

- Use format: `https://www.youtube.com/embed/VIDEO_ID`
- Common query parameters:
  - `autoplay=1`
  - `mute=1`
  - `start=30`
  - `controls=0`
  - `loop=1&playlist=VIDEO_ID`
- Not all videos allow embedding (may be restricted).

**Short vs Embed Links**

- `https://youtu.be/VIDEO_ID` - shareable link, **not for iframe**
- `https://www.youtube.com/embed/VIDEO_ID` - correct iframe format

Note: Parameters like `?si=...` sometimes appear in shared links but don’t always affect iframe embedding.

**Other Platforms**

- Vimeo - `https://player.vimeo.com/video/VIDEO_ID`
- Pexels / Pixabay - Provide full iframe code
- Check each platform’s documentation for correct `allow` values

**Maps (e.g., OpenStreetMap)**

Use a bounding box:

```html
https://www.openstreetmap.org/export/embed.html?bbox=minLon,minLat,maxLon,maxLat
```

To set a specific location, calculate the bbox around a center coordinate.

**srcdoc**

Inline HTML in iframe:

```html
<iframe srcdoc="<p>Hello</p>" sandbox></iframe>
```

Good for small self-contained content.

##### CORS and Security Policies

- Sites can block iframes with HTTP headers:
  - `X-Frame-Options: DENY` or `SAMEORIGIN`
  - Content-Security-Policy (CSP) `frame-ancestors 'none'`
- Check DevTools console if iframe fails.
- JavaScript cannot access content across domains (Same-Origin Policy).

##### Geolocation and Dynamic Maps

iframes don’t detect geolocation themselves. Use JavaScript:

```js
navigator.geolocation.getCurrentPosition(function(pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  document.getElementById("map").src =
    `https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.01},${lat-0.01},${lon+0.01},${lat+0.01}`;
});
```

Attach to iframe like:

```html
<iframe id="map" width="600" height="400"></iframe>
```

##### Troubleshooting

- Check for errors in the browser console.
- Ensure iframe source allows embedding.
- Confirm correct URL format (especially for YouTube).
- Some videos or domains simply can’t be embedded due to restrictions.




##### iframe Code Snippets (Examples)

YouTube Video with Autoplay and No Controls

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/Fhc4o_FBccU?autoplay=1&mute=1&controls=0&loop=1&playlist=Fhc4o_FBccU"
  title="YouTube video"
  frameborder="0"
  allow="autoplay; fullscreen"
  allowfullscreen>
</iframe>
```

Vimeo Video

```html
<iframe
  src="https://player.vimeo.com/video/76979871"
  width="640"
  height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
  title="Vimeo video">
</iframe>
```

OpenStreetMap Centered on Location (Tbilisi Example)

```html
<iframe
  width="600"
  height="450"
  frameborder="0"
  scrolling="no"
  marginheight="0"
  marginwidth="0"
  src="https://www.openstreetmap.org/export/embed.html?bbox=44.775,41.690,44.845,41.730&layer=mapnik"
  title="OpenStreetMap - Tbilisi">
</iframe>
```

Inline HTML with `srcdoc`

```html
<iframe
  srcdoc="
    <style>
      body { font-family: sans-serif; background: #fafafa; text-align: center; }
    </style>
    <h1>Hello from iframe</h1>
    <p>This content is defined in srcdoc.</p>"
  width="400"
  height="200"
  sandbox
  title="Inline content">
</iframe>
```

Embedded PDF File

```html
<iframe
  src="https://example.com/sample.pdf"
  width="100%"
  height="600"
  title="PDF Document"
  frameborder="0">
</iframe>
```

> It depends on whether the browser supports PDF viewing and whether the site allows opening in an iframe.

Embedded GitHub README (as raw HTML preview via third-party service)

```html
<iframe
  src="https://htmlpreview.github.io/?https://github.com/user/repo/blob/main/README.md"
  width="100%"
  height="600"
  frameborder="0"
  title="GitHub README Preview">
</iframe>
```

> This method only works with an open public repository and via GitHub Pages or special preview services.

Fallback Message (for unsupported browsers)

```html
<iframe
  src="https://example.com"
  width="600"
  height="400"
  title="Fallback Demo">
  Your browser does not support iframes.
</iframe>
```
