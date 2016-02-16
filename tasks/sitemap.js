var gulp = require('gulp'),
    sitemap = require('gulp-sitemap');

gulp.task('sitemap', ['build-html'], function () {
    gulp.src('./public/**/*.html')
        .pipe(sitemap({
            siteUrl: 'http://sqone.it'
        }))
        .pipe(gulp.dest('./public'));
});
