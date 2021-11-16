const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
	// 1. Where is my scss file
	return gulp.src('./styles/scss/**/*.scss')
	// 2. Pass that file through sass compiler
	.pipe(sass())
	// 3. Where is my css file saved
	.pipe(gulp.dest('./styles/css'))
	// 4. Stream changes on browserSync
	.pipe(browserSync.stream({}));
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./styles/scss/**/*.scss', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;