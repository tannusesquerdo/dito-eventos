var gulp = require('gulp'),
    fileinclude = require("gulp-file-include");


gulp.task('fileinclude', function() {
  gulp.src(['./src/templates/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './src/templates/'
    }))
    .pipe(gulp.dest('./public'));
});    
