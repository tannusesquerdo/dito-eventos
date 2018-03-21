var gulp = require('gulp'),
    debug = require('gulp-debug'),
    util = require("gulp-util"),
    browserSync = require('browser-sync'),
    nunjucksRender = require('gulp-nunjucks-render'),
    data = require('gulp-data'),
    htmlmin = require('gulp-htmlmin'),
    browserReload = browserSync.reload;


gulp.task('build-templates', function() {

    var minOps = {
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
        removeComments: true
    };

    return gulp.src('./src/templates/pages/**/*.+(html|nunjucks)')

    .pipe(data(function(file) {

        return require('../../src/site.json');

    }))

    .pipe(nunjucksRender({

        path: ['./src/templates']

    }))

    .pipe(!!util.env.production ? htmlmin(minOps) : util.noop())

    .pipe(gulp.dest('./public/'))
    .pipe(browserSync.reload({stream:true}));

});

