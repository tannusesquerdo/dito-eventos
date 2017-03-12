var gulp = require('gulp'),
	uglify = require("gulp-uglify"),
    eslint = require('gulp-eslint'),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
	util = require("gulp-util");

var eslintConfig = {

    rulePaths: [],
    rules: {
        'quotes': [2, 'single'],
        'strict': 0,
        'global-strict': 0
    },
    globals: {
        'jQuery':false,
        '$':true
    },
    envs: [
        'browser'
    ]

};

gulp.task('build-scripts', function () {

    gulp.src(['src/js/*.js'])

        .pipe(eslint(eslintConfig))
        .pipe(eslint.format())

        .pipe(concat("site.js"))

        .pipe(!!util.env.production ? uglify() : util.noop())

        .pipe(gulp.dest('./public/js'));

});
