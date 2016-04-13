var gulp = require('gulp');

gulp.task('serve', ['bs-reload', 'browser-sync'], function(){

  gulp.watch('./src/**/*', ['build']);
  gulp.watch('./public/**/*', ['bs-reload']);

});

