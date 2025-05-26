# 20. Base64 Images

The `index.html` in this folder demonstrates how images can be embedded directly into web pages using Base64 encoding. It shows practical examples of using Base64-encoded image data in both HTML (`<img src="data:image/png;base64,...">`) and CSS (`background-image: url(data:image/...)`). This approach is useful for small images or icons when you want to avoid separate file requests, but is not efficient for larger files.

## Where does the image come from?

The images you see in `index.html` are not loaded from external files. Instead, they are embedded directly in the HTML or CSS as Base64-encoded strings. For example, the small image used in the `.gif` CSS class is a Base64 string representing a very simple GIF image.

If you see a "dino" image example, it is likely a reference to the Chrome Dino game. In some exercises or slides, you might be asked to embed the Chrome Dino image using a Base64 string. You can get such a Base64 string by converting an image (like the Chrome Dino) to Base64 using an online tool, and then placing it in your HTML as follows:

```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAGxJREFUeF7tyMEJwkAQRuFf5ipMKxYQiJ3Z2nSwrWwBA0+DQZcdxEOueaePp9+dQZFB7GpUcURSVU66yVNFj6LFICatThZB6r/ko/pbRpUgilY0Cbw5sNmb9txGXUKyuH7eV25x39DtJXUNPQGJtWFV+BT/QAAAAABJRU5ErkJggg==" alt="dinosaur avatar" />
```

This Base64 string encodes the image data directly, so the browser can display the image without needing to load it from a separate file.

## How was the blue square made?

The blue square you see in the example is **not imported from the `Pixel-frame-blue-square.png` file in the project**. Instead, it was created as a small PNG image, converted to a Base64 string using an online tool, and then embedded directly in the HTML as an `<img>` tag. This demonstrates how you can display images using only their Base64 representation, without referencing external image files.

- https://www.pixilart.com/draw
- https://www.base64-image.de/

## Why use Base64 images?

- **No extra HTTP requests:** The image is part of the HTML or CSS, so the browser doesn't need to fetch it separately.
- **Useful for small icons or when embedding images in emails or JSON.**
- **Not efficient for large images:** Base64 encoding increases the size of the image data by about 33%, so it's best for small images.

Use this example to understand how Base64 encoding works for images and when it might be appropriate to use it in web development.