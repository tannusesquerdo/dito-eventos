var gulp = require('gulp'),
    rename = require('gulp-rename');

    require('./modulizr');


gulp.task('build-libs', ['modulizr'], function () {

    gulp.src('./src/libs/jquery-1.11.2/dist/jquery.min.js')
    .pipe(rename('jquery-1.11.2.min.js'))
    .pipe(gulp.dest('./public/libs/'));

    gulp.src('./src/libs/jquery-2.1.3/dist/jquery.min.js')
    .pipe(rename('jquery-2.1.3.min.js'))
    .pipe(gulp.dest('./public/libs/'));

    gulp.src('./src/libs/lt-ie-9/lt-ie-9.min.js')
    .pipe(gulp.dest('./public/libs/'));

    gulp.src('./src/libs/picturefill/dist/picturefill.min.js')
    .pipe(gulp.dest('./public/libs/'));

    gulp.src('./src/libs/echojs/dist/echo.min.js')
    .pipe(gulp.dest('./public/libs/'));

});
