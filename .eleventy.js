module.exports = function (eleventyConfig) {

  // This makes the eleventy command quieter (with less detail)
  eleventyConfig.setQuietMode(true);

  // This will stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
  
  // This will make Eleventy not use your .gitignore file to ignore files
  eleventyConfig.setUseGitIgnore(false);

  // This will copy this folder to the output without modifying it at all
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/rss.xslt");

  // This defines which files will be copied
  eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json"]);

  // This defines the input and output directories
  return {
    // This makes sure HTML files use Nunjucks
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};