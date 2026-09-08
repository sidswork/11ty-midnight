const { DateTime } = require("luxon");

const excludedTags = ["all", "nav", "post", "posts"];

function filterTagList(tags) {
  return (tags || []).filter((tag) => !excludedTags.includes(tag));
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("currentYear", () => DateTime.now().year);

  eleventyConfig.addFilter("readingTime", (content) => {
    const wordCount = (content || "")
      .replace(/<[^>]*>/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
    return Math.max(1, Math.ceil(wordCount / 200));
  });

  eleventyConfig.addFilter("absoluteUrl", (url, base) => {
    return new URL(url, base).href;
  });

  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  eleventyConfig.addFilter("filterTagList", filterTagList);

  eleventyConfig.addCollection("tagList", function (collection) {
    const tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });
};
