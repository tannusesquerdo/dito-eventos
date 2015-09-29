var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    rename = require('gulp-rename'),
    debug = require('gulp-debug'),
    browserSync = require('browser-sync'),
    util = require("gulp-util"),
    browserReload = browserSync.reload;

gulp.task('pre-process', function(){
  return gulp.src('./src/scss/site.scss')
        .pipe(sass())
        .pipe(size({gzip: false, showFiles: true, title:'un-prefixed css'}))
        .pipe(size({gzip: true, showFiles: true, title:'un-prefixed gzipped css'}))
        .pipe(prefix())
        .pipe(size({gzip: false, showFiles: true, title:'prefixed css'}))
        .pipe(size({gzip: true, showFiles: true, title:'prefixed css'}))

        .pipe(!!util.env.prod ? minifyCSS() : util.noop())
        
        .pipe(gulp.dest('./public/css/'))
        .pipe(browserSync.reload({stream:true}));
});
