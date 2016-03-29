var gulp = require('gulp');

gulp.task('server-config', function () {

    gulp.src(['./sample.htaccess', './sample.web.config', './sample.nginx.conf'])

    .pipe(gulp.dest('./public/'));

});
