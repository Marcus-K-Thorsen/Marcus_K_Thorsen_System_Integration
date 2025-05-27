import axios from "axios";
import * as cheerio from "cheerio";

const baseUrl = "https://books.toscrape.com/";
const visited = new Set();

function toAbsoluteUrl(link) {
    if (!link) return null;
    if (link.startsWith("http")) return link;
    if (link.startsWith("/")) return baseUrl + link.slice(1);
    // Handle relative links like "catalogue/page-2.html"
    return baseUrl + link;
}

async function crawl(url, depth = 1, maxDepth = 2) {
    if (visited.has(url) || depth > maxDepth) return;
    visited.add(url);

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        console.log(`Crawled: ${url}`);

        const links = [];
        $("a[href]").each((_, el) => {
            const link = $(el).attr("href");
            const absUrl = toAbsoluteUrl(link);
            if (absUrl && absUrl.startsWith(baseUrl)) {
                links.push(absUrl);
            }
        });

        for (const link of links) {
            await crawl(link, depth + 1, maxDepth);
        }
    } catch (err) {
        console.error(`Failed to crawl ${url}:`, err.message);
    }
}

crawl(baseUrl);