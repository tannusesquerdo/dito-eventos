var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    minifyInline = require('gulp-minify-inline-scripts'),
    debug = require('gulp-debug');

gulp.task('build-html', function() {

  gulp.src('./src/.htaccess')
      .pipe(gulp.dest('./public/'));  

  var htmlOps = { 
    conditionals: true,
    spare: true,
    cdata: true,
    quotes: true,
    comments: true
  };
 
  return gulp.src('./src/*.html')
    .pipe(minifyHTML(htmlOps))
    //.pipe(minifyInline()) 
    .pipe(gulp.dest('./public/'))
    .pipe(debug());
    
});