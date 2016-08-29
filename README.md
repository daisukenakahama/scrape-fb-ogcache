# fb-opengraph-scraper

[![Build Status](https://travis-ci.org/daisukenakahama/fb-opengraph-scraper.svg?branch=master)](https://travis-ci.org/daisukenakahama/fb-opengraph-scraper)
[![Coverage Status](https://coveralls.io/repos/github/daisukenakahama/fb-opengraph-scraper/badge.svg)](https://coveralls.io/github/daisukenakahama/fb-opengraph-scraper)

## Scrapes open graph cache of Facebook with Node.js

With this package, you can write easily the code to scrape open graph cache of Facebook. On [Sharing Debugger of facebook for developers web site](https://developers.facebook.com/tools/debug/), you can request scraping the cache for just one URL. But it is not useful for multi-page web site.

## Installation

```bash
npm install --save fb-opengraph-scraper
```

## Usage

```nodejs
// example with es2015
const scrape = require('fb-opengraph-scraper');
const token = <PUT YOUR APP TOKEN OF FACEBOOK>;
scrape(url, token, (res) => {
  if (res.error) {
    console.log(`[${total - sitemap.urlset.url.length} / ${total} : FAILED]`, url, res);
  } else {
    console.log(`[${total - sitemap.urlset.url.length} / ${total} : SUCCESS]`, url);
  }
  scrapeNext(sitemap, total);
});
```
