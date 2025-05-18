---
title: Optimize Media Asets
---

#### Optimize Media Assets

To optimize media like images, consider:

1. Size  

    - Resize images to match display size.  
    - Avoid large-resolution images scaled down with CSS.  
    - Use `srcset` and `sizes` for responsive images.

2. Format  

    - Use modern formats: `WEBP` or `AVIF` instead of `JPG` or `PNG`.  
    - Use `SVG` for icons and simple graphics.

3. Compression  

    - Use compression tools: `pngcrush`, `jpegoptim`, `squoosh`.  
    - Lossy formats like `JPG` degrade quality.  
    - Remove metadata to reduce file size.

##### Tips
- Use `loading="lazy"` for lazy loading.  
- Use Image CDNs for automatic optimization.  
- Always include `alt` attributes for accessibility.