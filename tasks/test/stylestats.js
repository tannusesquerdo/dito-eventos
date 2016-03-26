var gulp = require('gulp'),
	stylestats = require('gulp-stylestats');

gulp.task('test-stylestats', function () {

  gulp.src('./public/css/*.css')
    .pipe(stylestats());

});
