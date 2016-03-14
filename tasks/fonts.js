var gulp = require('gulp'),
	rename = require('gulp-rename'),
	concat = require("gulp-concat");

gulp.task('build-fonts', function () {

    gulp.src(['src/fonts/*/*.eot', 'src/fonts/*/*.ttf', 'src/fonts/*/*.woff', 'src/fonts/*/*.woff2'])
      .pipe(gulp.dest('./public/fonts'));

});
