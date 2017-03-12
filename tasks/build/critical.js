var gulp = require('gulp'),
    util = require('gulp-util'),
    htmlmin = require('gulp-htmlmin'),
    critical = require('critical').stream;


gulp.task('critical', ['build-styles', 'build-templates', 'uncss'], function () {

    return gulp.src('./public/*.html')
        .pipe(critical({
            base: './public/',
            inline: true,
            minify: true,
            css: ['./public/css/site.css']}
        ))
        .on('error', function(err) {
            gutil.log(gutil.colors.red(err.message));
        })

        .pipe(gulp.dest('./public'));

});
