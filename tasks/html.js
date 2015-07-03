var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    minifyInline = require('gulp-minify-inline-scripts'),
    debug = require('gulp-debug');

gulp.task('build-html', ['handlebars'], function() {

  var htmlOps = { 
    conditionals: true,
    spare: true,
    cdata: true,
    quotes: true,
    comments: true
  };
 
  return gulp.src('./public/*.html')
    .pipe(minifyHTML(htmlOps))
    //.pipe(minifyInline()) 
    .pipe(gulp.dest('./public/'))
    .pipe(debug());
    
});