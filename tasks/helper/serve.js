var gulp = require('gulp');

gulp.task('serve', ['bs-reload', 'browser-sync'], function(){

  gulp.watch('./src/scss/**/*', ['pre-process']);
  gulp.watch('./src/templates/**/*', ['build-html']);
  gulp.watch('./src/content/**/*', ['build-html']);
  gulp.watch('./src/js/**/*', ['build-scripts']);
  gulp.watch('./src/images/**/*', ['build-images']);
  gulp.watch('./public/**/*', ['bs-reload']);

});

