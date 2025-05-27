# How to setup

```sh
npm init -y
npm i cheerio
```

Then add the following key-value pair in top-level of `package.json`:

```json
"type": "module"
```

# How to run

```sh
node index.js
```

# What does index.js do?

- `index.js` uses the Cheerio library to perform web scraping on an HTML file.
- It reads the contents of `index.html`, parses it, and extracts specific data from the HTML structure.
- The script can also generate a new `index.html` file with sample content if it does not exist (when the relevant code is uncommented).

# How to generate index.html

1. **Delete `index.html` if it already exists** in the folder.
2. **Open `index.js` and make sure any code that creates or writes to `index.html` is uncommented.**
3. **Run the script:**
   ```sh
   node index.js
   ```
4. **A new `index.html` will be generated** with the sample content defined in the script.