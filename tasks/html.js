var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    minifyInline = require('gulp-minify-inline'),
    debug = require('gulp-debug'),
    util = require("gulp-util"),
    browserSync = require('browser-sync'),
    nunjucksRender = require('gulp-nunjucks-render'),
    data = require('gulp-data'),
    browserReload = browserSync.reload;


gulp.task('build-html', function() {

    var htmlOps = {
        conditionals: true,
        spare: true,
        cdata: true,
        quotes: true,
        comments: true
    };

    var minifyOps = {
        js: {
          output: {
              comments: false,
              inline_script: true
          }
        },
        css: {
          keepSpecialComments: 1
        },
    };

    nunjucksRender.nunjucks.configure(['./src/templates/'], {watch: false});


    return gulp.src('./src/pages/**/*.+(html|nunjucks)')


    .pipe(data(function() {

        return require('../src/site.json');

    }))


    .pipe(nunjucksRender())


    .pipe(!!util.env.prod ? minifyHTML(htmlOps) : util.noop())
    .pipe(!!util.env.prod ? minifyInline(minifyOps) : util.noop())


    .pipe(gulp.dest('./public/'))
    .pipe(browserSync.reload({stream:true}));

});

