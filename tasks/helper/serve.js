var gulp = require('gulp');

gulp.task('serve', ['bs-reload', 'browser-sync'], function(){

  gulp.watch('./src/scss/**/*', ['build-styles']);
  gulp.watch('./src/templates/**/*', ['build-templates']);
  gulp.watch('./src/pages/**/*', ['build-templates']);
  gulp.watch('./src/js/**/*', ['build-scripts']);
  gulp.watch('./src/images/**/*', ['build-images']);
  gulp.watch('./public/**/*', ['bs-reload']);

});

