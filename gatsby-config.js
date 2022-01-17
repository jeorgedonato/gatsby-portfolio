module.exports = {
	siteMetadata: {
		siteUrl: 'https://jergedonato.com',
		siteTitle: 'Jeorge Donato | Full Stack Web Developer',
		siteTitleAlt: 'Jeorge Donato | Full Stack Web Developer',
		siteDescription: '',
		author: '@jeorgedonato'
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-plugin-postcss`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Jeorge Donato`,
				short_name: `JD`,
				start_url: `/`,
				icon: `src/images/webicon.png`
			}
		}
	],
};
