# How to setup

```bash
$ npm init -y
$ npm i express
```

Then add the following key-value pair in top-level of `package.json`:

```json
"type": "module"
```

# How to run

```bash
$ nodemon app.js
```

# How to use MPEG-DASH in this project

1. **Install ffmpeg**  
   Download and install ffmpeg from [https://ffmpeg.org/download.html](https://ffmpeg.org/download.html) and make sure it is available in your PATH.

2. **Add a video**  
   Place a video file named `input.mp4` in the `videos` folder.

3. **Generate DASH segments and manifest**  
   Run this command in Command Prompt from your project root:
```bash:
$ ffmpeg -i input.mp4 \
-map 0:v -map 0:a -b:v:0 200k -s:v:0 426x240 -profile:v:0 baseline -b:a:0 48k \
-map 0:v -map 0:a -b:v:1 400k -s:v:1 640x360 -profile:v:1 baseline -b:a:1 64k \
-map 0:v -map 0:a -b:v:2 800k -s:v:2 854x480 -profile:v:2 main     -b:a:2 96k \
-map 0:v -map 0:a -b:v:3 1200k -s:v:3 960x540 -profile:v:3 main    -b:a:3 96k \
-map 0:v -map 0:a -b:v:4 1800k -s:v:4 1280x720 -profile:v:4 high   -b:a:4 128k \
-map 0:v -map 0:a -b:v:5 2500k -s:v:5 1920x1080 -profile:v:5 high  -b:a:5 160k \
-f dash playlist.mpd
```
   This will create `playlist.mpd`, `init-stream*.m4s`, and `chunk-stream*.m4s` files in the `videos` folder.

4. **Start the server**  
   Run:
   ```sh
   node app.js
   ```
   or, if using nodemon:
   ```sh
   nodemon app.js
   ```

5. **View in browser**  
   Open [http://localhost:8080](http://localhost:8080) and the video should play using MPEG-DASH.

# What is MPEG-DASH?

MPEG-DASH (Dynamic Adaptive Streaming over HTTP) is a modern video streaming protocol used by platforms like YouTube and Netflix. It splits video into small segments at multiple qualities and uses a manifest file (`playlist.mpd`) to describe them. The player automatically switches quality based on network speed, providing smooth, adaptive playback over standard HTTP.

## Benefits of MPEG-DASH

- **Adaptive streaming:** The video automatically changes quality based on your internet speed, so playback is smooth and less likely to buffer.
- **Efficient:** Only the needed video segments are downloaded, saving bandwidth.
- **Scalable:** Works over standard HTTP, so it can be used with regular web servers and CDNs.
- **Widely supported:** Used by major streaming platforms and supported by many modern browsers and players.

## Simple Explanation

Instead of sending one big video file, MPEG-DASH breaks the video into many small pieces at different qualities. Your browser or video player checks your internet speed and picks the best quality pieces as you watch. If your connection slows down, it switches to lower quality pieces so the video keeps playing without stopping. This makes streaming fast, flexible, and reliable for everyone.