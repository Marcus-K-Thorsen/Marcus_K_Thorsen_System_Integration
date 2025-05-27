# How to setup

```bash
$ poetry init -n
$ poetry add beautifulsoup4 requests lxml
```

# How to run

```bash
$ poetry run python main.py
```

# What does this project do?

The `main.py` file in this folder is a Python web crawler. It **starts from the Wikipedia page for Monty Python** (`https://en.wikipedia.org/wiki/Monty_Python`), as set by the line:

```python
parsed_root_page = get_parsed_wiki_page("/wiki/Monty_Python")
```

From this starting point, the crawler finds all internal Wikipedia links on the Monty Python page and adds them to a queue. It then visits each of these links, finds more internal links on those pages, and continues the process. As it crawls, it keeps track of which pages have already been visited to avoid duplicates. This demonstrates how to explore and collect data from many connected web pages using Python. The crawler does **not** start with all of Wikipedia, but it can eventually reach a large part of Wikipedia by following links from the Monty Python page and expanding outward.

# How is this Python crawler different from the Node.js crawler in 02._node_web_crawling?

While both projects are web crawlers that follow links from page to page, they use two different approaches to crawling:

- The **Python crawler (`main.py`)** uses a focused, site-specific strategy: it starts from a single Wikipedia page (Monty Python) and only follows internal Wikipedia links found on each visited page. This approach is targeted, expanding outward from a specific starting point and gradually covering more of Wikipedia as it discovers new internal links. The crawl is shaped by the structure and connectivity of Wikipedia itself.

- The **Node.js crawler (`02._node_web_crawling/index.js`)** is a more general-purpose crawler: it can start from any given URL and follows links found on each page, regardless of the website's structure. This approach is broader and can be used to crawl any site, not just Wikipedia. It does not rely on a specific site's link patterns and can be adapted to different domains or types of sites.

**Summary:**  
- The Python crawler demonstrates a focused, site-specific crawl that expands from a single starting page within a well-connected site (Wikipedia).
- The Node.js crawler demonstrates a general web crawling approach that can be applied to any website, following links wherever they lead.