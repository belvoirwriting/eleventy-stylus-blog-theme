const { DateTime } = require('luxon')
const navigationPlugin = require('@11ty/eleventy-navigation')
const rssPlugin = require('@11ty/eleventy-plugin-rss')

module.exports = (config) => {
  config.addPlugin(navigationPlugin);
  config.addPlugin(rssPlugin);

  config.addPassthroughCopy('css');
  config.addPassthroughCopy('static');
  
  config.setDataDeepMerge(true);

  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL, yyyy");
  });

  config.addCollection("tagList", collection => {
    const tagsObject = {}
    collection.getAll().forEach(item => {
      if (!item.data.tags) return;
      item.data.tags
        .filter(tag => !['post', 'all'].includes(tag))
        .forEach(tag => {
          if(typeof tagsObject[tag] === 'undefined') {
            tagsObject[tag] = 1
          } else {
            tagsObject[tag] += 1
          }
        });
    });

    const tagList = []
    Object.keys(tagsObject).forEach(tag => {
      tagList.push({ tagName: tag, tagCount: tagsObject[tag] })
    })
    return tagList.sort((a, b) => b.tagCount - a.tagCount)

  });

const Image = require("@11ty/eleventy-img");

// Only one module.exports per configuration file, please!
module.exports = function(eleventyConfig) {
	eleventyConfig.addShortcode("image", async function(src, alt, sizes) {
		let metadata = await Image(src, {
			widths: [300, 600],
			formats: ["avif", "jpeg"]
		});

		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		// You bet we throw an error on a missing alt (alt="" works okay)
		return Image.generateHTML(metadata, imageAttributes);
	});
};
}