const htmlmin = require("html-minifier-terser");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const { wordCount } = require("eleventy-plugin-wordcount");
const readingTime = require('eleventy-plugin-reading-time');
module.exports = function (eleventyConfig) {

    // This will stop the default behaviour of foo.html being turned into foo/index.html
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(wordCount);
    eleventyConfig.addPlugin(readingTime);
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
    eleventyConfig.addFilter('datestring', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('d LLL yyyy');
   });
    eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);
    eleventyConfig.addTransform("htmlmin", function (content) {
        if ((this.page.outputPath || "").endsWith(".html")) {
          let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
          });
          return minified;
        }
        return content;
      });
      
    return {
      dir: {
        input: "templates",
        output: "public",
      },
    };
  };