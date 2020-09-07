const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const readingTime = require('eleventy-plugin-reading-time');
const { DateTime } = require("luxon");
const markdownIt = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true
});


module.exports = function(config) {
  config.addPassthroughCopy("static/img");
  config.addPassthroughCopy("static/fonts");
  config.addPassthroughCopy("static/js");
  config.addPassthroughCopy("css/style.css");
  config.addPassthroughCopy("css/commento.min.css");
  config.addPassthroughCopy("static/other");

  config.addPlugin(pluginRss);
  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(readingTime);

  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  config.addFilter("dotDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd.LL.yy");
  });

  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  config.addFilter('year', function(date) {
    const dateObj = new Date(date)
    return dateObj.getFullYear()
  })

  config.addFilter('limit', (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  config.addFilter('markdownFilter', (value) => {
    return markdownIt.render(value);
  });

  config.addCollection("tagList", require("./_11ty/getTagList"));

  config.addFilter("size", (posts) => {
		return posts.length;
  });

  config.addShortcode("figure", function(url, caption) {
    return `<figure><a href="${url}"><img src="${url}" alt="${caption}"></a><figcaption class="after">${caption}</figcaption></figure>`
  });

  config.addShortcode("figurePath", function(url, caption) {
    return `<figure><figcaption class="before">${caption}</figcaption><a href="${url}"><img src="${url}" alt="${caption}"></a></figure>`
  });

  config.addShortcode("notification", function(title, description) {
    return `<div class="notification"><h6>${title}</h6><p>${description}</p></div>`
  });

  config.addShortcode("highlight", function(title, description) {
    return `<div class="bleed"><div class="bleed-wrapper"><h6>${title}</h6><p>${description}</p></div></div>`
  });

  return {
    passthroughFileCopy: true,
    dir: {
      includes: "_includes",
      data: "_data",
      output: "_site"
  }
  }
}
