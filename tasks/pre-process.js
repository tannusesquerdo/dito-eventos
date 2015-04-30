var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    debug = require('gulp-debug'),
    browserSync = require('browser-sync'),
    browserReload = browserSync.reload;

gulp.task('pre-process', function(){
  return gulp.src('./src/scss/site.scss')
      // .pipe(watch(function(files) {
        // return files
          .pipe(sass())
          .pipe(size({gzip: false, showFiles: true, title:'un-prefixed css'}))
          .pipe(size({gzip: true, showFiles: true, title:'un-prefixed gzipped css'}))
          .pipe(prefix())
          .pipe(size({gzip: false, showFiles: true, title:'prefixed css'}))
          .pipe(size({gzip: true, showFiles: true, title:'prefixed css'}))
          .pipe(gulp.dest('./src/css'))
          .pipe(minifyCSS())
          .pipe(rename('site.min.css'))
          .pipe(gulp.dest('./public/css/'))
          .pipe(size({gzip: false, showFiles: true, title:'minified css'}))
          .pipe(size({gzip: true, showFiles: true, title:'minified css'}))
          .pipe(browserSync.reload({stream:true}));
      // }));
});