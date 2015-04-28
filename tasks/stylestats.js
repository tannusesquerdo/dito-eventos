var gulp = require('gulp'),
	stylestats = require('gulp-stylestats');

gulp.task('stylestats', function () {
  gulp.src('./public/css/*.css')
    .pipe(stylestats());
});
