module.exports = {
	siteMetadata: {
		title: "Annie Haul Portland Junk Hauling",
		description:
			"Annie Haul is a hauling company with an eco-friendly and environmentally conscious approach to junk hauling.",
		phone: "503-477-4941",
		email: "kateanniehaulpdx@gmail.com",
		facebookUrl: "https://www.facebook.com/Annie-Haul-796544483749241/",
		yelpUrl: "https://www.yelp.com/biz/annie-haul-portland",
		imageUrl:
			"https://annie-haul.s3-us-west-2.amazonaws.com/Annie+Haul+Ad+photo.jpg",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static/img`,
				name: "uploads",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/pages`,
				name: "pages",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/img`,
				name: "images",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-relative-images",
						options: {
							name: "uploads",
						},
					},
					{
						resolve: "gatsby-remark-images",
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: "gatsby-remark-copy-linked-files",
						options: {
							destinationDir: "static",
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-netlify-cms",
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		{
			resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
				ignore: [
					"/node_modules/slick-carousel/slick/slick.css",
					"/node_modules/slick-carousel/slick/slick-theme.css",
				],
			},
		}, // must be after other CSS plugins
		"gatsby-plugin-netlify", // make sure to keep it last in the array
	],
};
