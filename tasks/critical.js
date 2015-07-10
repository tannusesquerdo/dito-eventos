var gulp = require('gulp'),
    critical = require('critical').stream;


gulp.task('critical', ['pre-process', 'build-html'], function () {
    return gulp.src('public/*.html')
        .pipe(critical({
            base: 'public/',
            css: 'public/css/site.min.css',
            inline: true,
            width: 320,
            height: 480,
            minify: true,
            inlineImages: true
        }))
        .pipe(gulp.dest('./public'));
});