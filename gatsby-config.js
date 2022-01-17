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
		skills: [
			{
				name: "ReactJS",
				percentage: 95
			},
			{
				name: "MySQL",
				percentage: 95
			},
			{
				name: "TailwindCSS",
				percentage: 95
			},
			{
				name: "Wordpress",
				percentage: 90
			},
			{
				name: "HTML",
				percentage: 100
			},
			{
				name: "CSS/SCSS",
				percentage: 100
			},
			{
				name: "NextJS",
				percentage: 85
			},
			{
				name: "GatsbyJS",
				percentage: 85
			},
			{
				name: "PHP",
				percentage: 95
			},
			{
				name: "Javascript",
				percentage: 100
			},
			{
				name: "JQuery",
				percentage: 95
			},
			{
				name: "Jest Testing Library",
				percentage: 80
			},
			{
				name: "GraphQL",
				percentage: 90
			}
		]
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet-async',
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
