var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	concat = require("gulp-concat");

gulp.task('build-fonts', function () {

    gulp.src(['src/fonts/*/*.eot', 'src/fonts/*/*.ttf', 'src/fonts/*/*.woff', 'src/fonts/*/*.woff2'])
      .pipe(gulp.dest('./public/fonts'));

	gulp.src(['src/fonts/*/*.css'])

      .pipe(gulp.dest('./src/css'))
      .pipe(rename('web-fonts.min.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('./public/css'));      

});