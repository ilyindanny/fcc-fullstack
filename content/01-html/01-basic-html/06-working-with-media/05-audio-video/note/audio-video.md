---
title: Audio & Video
---

#### HTML Media Elements: Audio & Video

##### 1. Purpose

The `<audio>` and `<video>` elements embed sound and video into webpages using native HTML tags.

##### 2. Supported Formats and MIME Types

Audio: {.marker}  

- .mp3 — `audio/mpeg`  
- .wav — `audio/wav`  
- .ogg — `audio/ogg`  
- .m4a — `audio/mp4` or `audio/x-m4a`

Video: {.marker}  

- .mp4 — `video/mp4`  
- .webm — `video/webm`  
- .ogg — `video/ogg`

Example: {.marker}  

```html
<audio controls>
  <source src="sound.ogg" type="audio/ogg" />
  <source src="sound.mp3" type="audio/mpeg" />
</audio>
```

##### 3. Common Attributes (`<audio>` and `<video>`)

- `src` (URL): Path to media file. Optional if you use `<source>` elements inside the tag.
- `controls` (boolean): Displays built-in play/pause/etc. controls.
- `autoplay` (boolean): Starts playback automatically. Usually works only if muted is also set.
- `loop` (boolean): Repeats the media file indefinitely.
- `muted` (boolean): Starts the media in a muted state.
- `preload` (none, metadata, auto): Suggests how much data the browser should preload:
    - `none` — don’t preload anything
    - `metadata` — preload only metadata (like duration)
    - `auto` — let the browser decide

Example: {.marker}  

`<audio src="file.mp3" controls loop muted preload="auto"></audio>`{.language-html}

##### 4. Video only Attributes

- `poster`: Image shown before video loads or plays
- `width`: Width in pixels
- `height`: Height in pixels

Example: {.marker}  

`<video src="video.mp4" controls poster="cover.jpg" width="640"></video>`{.language-html}

##### 5. Using Source for Fallback

The browser picks the first supported format:

```html
<video controls>
  <source src="movie.webm" type="video/webm" />
  <source src="movie.mp4" type="video/mp4" />
</video>
```

##### 6. YouTube / Vimeo Embeds

Use `<iframe>` to embed external players:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/3Z7ddmHlbdU"
  allow="autoplay; encrypted-media"
  allowfullscreen>
</iframe>
```

##### 7. JavaScript API (basics)

```js
audio.play();
audio.pause();
audio.currentTime = 0;
audio.volume = 0.5;
audio.muted = true;
```

##### 8. Media Events (examples)

- `play`:Starts playing
- `pause`: Playback paused
- `ended`: Playback finished
- `timeupdate`: Playback time changes

Example: {.marker}  

`video.addEventListener("ended", () => alert("Video finished"));`{.language-js}


##### 9. Summary

- Use `<audio>` for music/sound, `<video>` for movies.  
- Use `<source>` for format fallback.  
- Use `<iframe>` for hosted content like YouTube.  
- Attributes are mostly shared; `poster`, `width`, and `height` are video-specific.