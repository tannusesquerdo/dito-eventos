var gulp = require('gulp'),
    debug = require('gulp-debug'),
    util = require("gulp-util"),
    browserSync = require('browser-sync'),
    twig = require('gulp-twig'),
    data = require('gulp-data'),
    htmlmin = require('gulp-htmlmin'),
    browserReload = browserSync.reload;


gulp.task('build-html', function() {

    var minOps = {
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
        removeComments: true
    };

    return gulp.src([

        './src/pages/*.html'

    ])

    .pipe(data(function(file) {

        return require('../../src/site.json');

    }))

    .pipe(twig())

    .pipe(!!util.env.prod ? htmlmin(minOps) : util.noop())

    .pipe(gulp.dest('./public/'))
    .pipe(browserSync.reload({stream:true}));

});

