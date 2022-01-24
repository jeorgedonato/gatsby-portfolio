module.exports = {
	siteMetadata: {
		siteUrl: 'https://jergedonato.com',
		siteTitle: 'Jeorge Donato | Full Stack Web Developer',
		siteTitleAlt: 'Jeorge Donato | Full Stack Web Developer',
		siteDescription: 'Jeorge Donato | Full Stack Web Developer | Software Engineer',
		siteAuthor: '@jeorgedonato',
		menuLinks: [
			{
				name: `Home`,
				link: `/`
			},
			{
				name: `About`,
				link: `/about`
			},
			{
				name: `Portfolio`,
				link: `/portfolio`
			},
			{
				name: `Skills`,
				link: `/skills`
			},
		],
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/src/data/`,
				ignore: [`**/\.*`]
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Jeorge Donato`,
				short_name: `JD`,
				start_url: `/`,
				icon: `src/images/webicon.png`
			}
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
			  defaults: {
				formats: [`auto`, `webp`],
				placeholder: `dominantColor`,
				quality: 90,
				breakpoints: [750, 1080, 1366, 1920],
				backgroundColor: `transparent`,
				tracedSVGOptions: {},
				blurredOptions: {},
				jpgOptions: {},
				pngOptions: {},
				webpOptions: {},
				avifOptions: {},
			  },
			},
		},
		'gatsby-transformer-json',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet-async',
		`gatsby-plugin-postcss`,
	],
};
