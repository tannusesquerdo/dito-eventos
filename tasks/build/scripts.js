var gulp = require('gulp'),
	uglify = require("gulp-uglify"),
    eslint = require('gulp-eslint'),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
	util = require("gulp-util");

gulp.task('lint-scripts', () => {

    return gulp.src('./src/js/**/*.js')

        .pipe(eslint({
            rules: {
                'quotes': [2, 'single'],
                'strict': 0,
                'global-strict': 0
            },
            globals: [
                'jQuery',
                '$'
            ],
            envs: [
                'browser'
            ]
        }))

        .pipe(eslint.format())

        .pipe(eslint.failAfterError());
});

gulp.task('build-scripts', ['lint-scripts'], function () {

    return gulp.src('./src/js/*.js')

    .pipe(concat("site.js"))

    .pipe(!!util.env.production ? uglify() : util.noop())

    .pipe(gulp.dest('./public/js'));
});

