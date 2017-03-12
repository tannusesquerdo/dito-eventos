var gulp = require('gulp'),
    sitemap = require('gulp-sitemap');

gulp.task('sitemap', ['build-templates'], function () {
    gulp.src('./public/**/*.html')
        .pipe(sitemap({
            siteUrl: 'http://sqone.it',
            lastmod: Date.now(),
            getLoc: function(siteUrl, loc, entry) {
                return loc.substr(0, loc.lastIndexOf('.')) || loc; // Removes the file extension
            }
        }))
        .pipe(gulp.dest('./public'));
});
