var gulp = require('gulp');

gulp.task('serve', ['bs-reload', 'browser-sync'], function(){

  gulp.watch('./src/scss/*.scss', ['pre-process']);
  gulp.watch('./public/css/site.css', ['bs-reload']);
  gulp.watch('./src/templates/**/*.html', ['build-html']);
  gulp.watch('./public/*.html', ['bs-reload']);
  gulp.watch('./src/js/**/*.js', ['build-scripts']);
  gulp.watch('./public/js/*.js', ['bs-reload']);

});

