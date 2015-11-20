var gulp = require('gulp'),
    util = require('gulp-util'),
    critical = require('critical').stream;


gulp.task('critical', ['pre-process', 'build-html', 'uncss'], function () {
    return gulp.src('public/*.html')
        .pipe(critical({
            base: 'public/',
            css: 'public/css/site.css',
            inline: true,
            width: 320,
            height: 480,
            minify: true,
            inlineImages: true
        }))
        .pipe(gulp.dest('./public'));
});
