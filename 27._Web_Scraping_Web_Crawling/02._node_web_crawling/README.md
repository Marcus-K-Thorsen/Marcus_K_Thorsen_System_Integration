# Node Web Crawling Example

This project shows how to build a simple web crawler in Node.js.

## What does index.js do?

- Starts from a given web page (URL).
- Finds and follows links on that page to other pages.
- Visits each new page up to a certain depth (level).
- Prints out each page it visits.
- Makes sure it doesn't visit the same page twice.

## How to use

1. Install dependencies:
   ```bash
   npm install axios cheerio
   ```
2. Set the starting URL in `index.js`.
3. Run the crawler:
   ```bash
   node index.js
   ```

## What is web crawling?

- Web crawling means automatically visiting web pages by following links from one page to another.
- This is different from web scraping, which only gets data from a single page.

## Note

- Be polite: don’t crawl too quickly or too many pages, and always respect the website’s rules.