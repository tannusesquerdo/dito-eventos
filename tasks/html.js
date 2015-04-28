var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    minifyInline = require('gulp-minify-inline-scripts'),
    debug = require('gulp-debug');

gulp.task('build-html', function() {

  var htmlOps = { 
    conditionals: true,
    spare: true
  };
 
  return gulp.src('./src/*.html')
    .pipe(minifyHTML(htmlOps))
    //.pipe(minifyInline()) 
    .pipe(gulp.dest('./public/'))
    .pipe(debug());
    
});