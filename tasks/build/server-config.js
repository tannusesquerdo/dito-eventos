var gulp = require('gulp'),
    rename = require('gulp-rename');

gulp.task('server-config', function () {

    gulp.src('./.htaccess')

    .pipe(gulp.dest('./public/'));

});
