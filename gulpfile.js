var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var config = require('./build-config');


gulp.task('sass', function () {
	gulp.src(config.styles.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(config.styles.output));
});

gulp.task('watch:sass', function () {
	gulp.watch(config.styles.sass, ['sass']);
	gulp.watch(config.styles.css, function (file) {
		livereload.changed(file);
	});
});

gulp.task('watch:templates', function () {
	gulp.watch(config.templates, livereload.reload);
});

gulp.task('devKeystone', function () {
	livereload.listen();
	nodemon({
		script: config.entry,
		ex: 'js',
		env: { NODE_ENV: 'development' },
	}).on('restart', function (changedFiles) {
		gulp.src(config.entry)
			.pipe(livereload());
	});
});

gulp.task('watch', ['watch:sass', 'watch:templates']);

gulp.task('default', ['watch', 'devKeystone']);
