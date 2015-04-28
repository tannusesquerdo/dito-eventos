var gulp = require('gulp'),
	uglify = require("gulp-uglify"),
	concat = require("gulp-concat");

gulp.task('build-scripts', function () {

    gulp.src(['src/js/*'])
      .pipe(concat("site.min.js"))
      .pipe(uglify())
      .pipe(gulp.dest('./public/js'));

});