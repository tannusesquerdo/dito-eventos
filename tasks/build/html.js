var gulp = require('gulp'),
    debug = require('gulp-debug'),
    util = require("gulp-util"),
    browserSync = require('browser-sync'),
    // nunjucksRender = require('gulp-nunjucks-render'),
    twig = require('gulp-twig'),
    data = require('gulp-data'),
    htmlmin = require('gulp-htmlmin'),
    browserReload = browserSync.reload;


// gulp.task('build-html', function() {

//     var minOps = {
//         collapseWhitespace: true,
//         minifyJS: true,
//         minifyCSS: true,
//         removeComments: true
//     };

//     nunjucksRender.nunjucks.configure(['./src/templates/'], {watch: false});


//     return gulp.src('./src/pages/**/*.+(html|nunjucks)')


//     .pipe(data(function() {

//         return require('../../src/site.json');

//     }))

//     .pipe(nunjucksRender())

//     .pipe(!!util.env.prod ? htmlmin(minOps) : util.noop())

//     .pipe(gulp.dest('./public/'))
//     .pipe(browserSync.reload({stream:true}));

// });

gulp.task('build-html', function() {

    var minOps = {
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
        removeComments: true
    };

    return gulp.src(['./src/templates/base.twig', './src/pages/**/*.twig'])

    .pipe(data(function(file) {

        return require('../../src/site.json');

    }))

    .pipe(twig())

    .pipe(!!util.env.prod ? htmlmin(minOps) : util.noop())

    .pipe(gulp.dest('./public/'))
    .pipe(browserSync.reload({stream:true}));

});

