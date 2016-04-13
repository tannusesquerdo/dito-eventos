var gulp = require('gulp'),
    rename = require('gulp-rename');

gulp.task('server-config', function () {

    gulp.src('./sample.htaccess')

    .pipe(rename('.htaccess'))
    .pipe(gulp.dest('./public/'));

});
