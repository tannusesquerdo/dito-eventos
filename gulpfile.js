var gulp = require('gulp');


require('./tasks/browser-sync');
require('./tasks/build');
require('./tasks/critical');
require('./tasks/csslint');
require('./tasks/del');
require('./tasks/fonts');
require('./tasks/html');
require('./tasks/images');
require('./tasks/libs');
require('./tasks/pre-process');
require('./tasks/psi');
require('./tasks/scripts');
require('./tasks/stylestats');
require('./tasks/tenon');


gulp.task('serve', ['bs-reload', 'browser-sync'], function(){
  gulp.watch('./src/scss/*.scss', ['pre-process']);
  gulp.watch('./public/css/site.css', ['bs-reload']);
  gulp.watch('./src/templates/**/*.html', ['build-html']);
  gulp.watch('./public/*.html', ['bs-reload']);
  gulp.watch('./src/js/**/*.js', ['build-scripts']);
  gulp.watch('./public/js/*.js', ['bs-reload']);
});









