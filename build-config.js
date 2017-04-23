module.exports = {
	src: [
		'./models/**/*.js',
		'./routes/**/*.js',
		'keystone.js',
		'package.json',
	],
	styles: {
		sass: './public/styles/**/*.scss',
		output: './public/styles/',
		css: './public/styles/site.css',
	},
	entry: 'keystone.js',
	templates: './templates/**/*.pug',
};
