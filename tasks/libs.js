var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    rename = require('gulp-rename'),
    util = require("gulp-util");

gulp.task('build-libs', function () {
    
    gulp.src('./src/libs/lt-ie-9/lt-ie-9.js')
    .pipe(!!util.env.prod ? uglify() : util.noop())
    .pipe(gulp.dest('./public/libs/'));

    gulp.src('./src/libs/picturefill/dist/picturefill.js')
    .pipe(!!util.env.prod ? uglify() : util.noop())
    .pipe(gulp.dest('./public/libs/'));

});
