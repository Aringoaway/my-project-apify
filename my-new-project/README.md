# My beautiful actor

The `README.md` file contains a documentation what your actor does and how to use it,
which is then displayed in the app or Apify Store. It's always a good
idea to write a good `README.md`, in a few months not even you
will remember all the details about the actor.

You can use [Markdown](https://www.markdownguide.org/cheat-sheet)
language for rich formatting.

## Documentation reference

- [Apify SDK](https://sdk.apify.com/)
- [Apify Actor documentation](https://docs.apify.com/actor)
- [Apify CLI](https://docs.apify.com/cli)
-Where and how can you use JQuery with the SDK?

Jquery uses its $ object to access the dom attributes to get text values from there.
Jquery is implemented via Cheerio.

-What is the main difference between Cheerio and JQuery?

Cheerio is 8x faster than jsdom. 
Jquery connects directly to the dom model, and cherrio has a special helper chereeiocrawel. CheerioCrawler crawls by making plain HTTP requests to the provided URLs. 

-When would you use CheerioCrawler and what are its limitations?

I would use it to crawl web pages because it uses small resources and produces large results.
However, if the target website requires JavaScript to display the content, you might need to use PuppeteerCrawler instead, because it loads the pages using full-featured headless Chrome browser.
Provides a framework for the parallel crawling of web pages using plain HTTP requests and cheerio HTML parser.

- What are the main classes for managing requests and when and why would you use one instead of another?

there are 3 classes for queries. RequestList, RequestQueue or PuppeteerCrawler. the first one we use when we already have an existing URL address list
the second one takes the main link, processes it, retrieves interesting urls in the same domain, adds them to the queue. 
Since PuppeteerCrawler uses headless Chrome to download web pages and extract data, it is useful for crawling of websites that require to execute JavaScript.

-How can you extract data from a page in Puppeteer without using JQuery?

it cannot retrieve data without JQuery.

-What is the default concurrency/parallelism the SDK uses?

maxConcurrency
Type: number = 1000
