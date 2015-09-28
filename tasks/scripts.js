var gulp = require('gulp'),
	uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
	util = require("gulp-util");

gulp.task('build-scripts', function () {

    gulp.src(['src/js/*'])
      .pipe(concat("site.js"))

        .pipe(!!util.env.prod ? uglify() : util.noop())
        // .pipe(!!util.env.prod ? rename({
        //     suffix: ".min"
        // }) : util.noop())

      .pipe(gulp.dest('./public/js'));

});
