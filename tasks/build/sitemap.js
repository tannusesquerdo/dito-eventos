var gulp = require('gulp'),
    data = require('gulp-data'),
    sitemap = require('gulp-sitemap');

var config = require('../../src/site.json');

gulp.task('sitemap', ['build-templates'], function () {
    gulp.src('./public/**/*.html')
        .pipe(sitemap({
            siteUrl: config.site.url
        }))
        .pipe(gulp.dest('./public'));
});
