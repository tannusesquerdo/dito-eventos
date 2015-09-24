var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    rename = require('gulp-rename');


gulp.task('build-libs', function () {
    
    gulp.src('./src/libs/lt-ie-9/lt-ie-9.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/libs/'));

    gulp.src('./src/libs/picturefill/dist/picturefill.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/libs/'));

});
