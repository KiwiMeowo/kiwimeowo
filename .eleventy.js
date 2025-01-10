const htmlmin = require("html-minifier-terser");
const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function (eleventyConfig) {

    // This will stop the default behaviour of foo.html being turned into foo/index.html
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
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