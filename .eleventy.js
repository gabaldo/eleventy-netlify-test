module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addNunjucksFilter('date', require('./filters/nunjucks-dayjs-filter'));
}