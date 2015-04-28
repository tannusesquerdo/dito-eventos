var gulp = require('gulp'),
	modulizr = require('gulp-modulizr'),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify");

gulp.task('modulizr', function() {
    return gulp.src('src/libs/modernizr/modernizr.js')
        .pipe(modulizr([
            'svg'
        ]))
        .pipe(uglify())
        .pipe(concat("custom-modernizr.min.js"))
        .pipe(gulp.dest("public/libs"));
});