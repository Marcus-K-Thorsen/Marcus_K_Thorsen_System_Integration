# Embedded YouTube Video

This project demonstrates how to embed a YouTube video directly into an HTML page using an `<iframe>`.

## Example

The following YouTube video is embedded using the URL:  
`https://www.youtube.com/embed/-5wpm-gesOY`

```html
<iframe 
    width="1431" 
    height="805" 
    src="https://www.youtube.com/embed/-5wpm-gesOY" 
    title="The Problem with Time &amp; Timezones - Computerphile" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
</iframe>
```

## Embedding vs. MPEG-DASH

- **Embedding a YouTube video** is simple: you just copy the embed code (an `<iframe>`) from YouTube and paste it into your HTML. YouTube handles all the streaming, adaptive quality, and controls for you.
- **MPEG-DASH** is a streaming protocol where you host the video files and manifest yourself. The video is split into segments and played using a player like Shaka Player, giving you more control but requiring more setup.

**Summary:**  
Embedding is quick and easy but relies on YouTube’s platform and player. MPEG-DASH gives you full control over hosting and playback, but is more complex to set up.