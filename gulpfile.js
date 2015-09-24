var gulp = require('gulp');


require('./tasks/browser-sync');
require('./tasks/build');
require('./tasks/critical');
require('./tasks/csslint');
require('./tasks/del');
require('./tasks/file-include');
require('./tasks/fonts');
require('./tasks/html');
require('./tasks/images');
require('./tasks/libs');
require('./tasks/pre-process');
require('./tasks/psi');
require('./tasks/scripts');
require('./tasks/stylestats');
require('./tasks/tenon');


gulp.task('default', ['bs-reload', 'browser-sync'], function(){
  gulp.watch('./src/scss/*.scss', ['pre-process']);
  gulp.watch('./public/css/site.min.css', ['bs-reload']);
  gulp.watch('./src/*.html', ['build-html']);
  gulp.watch('./public/*.html', ['bs-reload']);
});









