var gulp = require('gulp'),
	csslint = require('gulp-csslint');

gulp.task('csslint', function(){
  gulp.src('./src/css/site.css')
    .pipe(csslint({
          'compatible-vendor-prefixes': false,
          'box-sizing': false,
          'important': false,
          'known-properties': false
        }))
    .pipe(csslint.reporter());
});