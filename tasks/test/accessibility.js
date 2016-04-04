var gulp = require('gulp'),
    jsonFormat = require('gulp-json-format'),
    access = require('gulp-accessibility');



module.exports = function (date) {

    gulp.task('generate-accessibility-report', ['build-html'], function() {

        return gulp.src('./public/*.html')
            .pipe(access({
                accessibilityLevel: 'WCAG2AA',
                reportType: 'json',
                reportLocation : 'reports/' + date + '/accessibility',
                verbose: false,
                reportLevels: {
                    notice: false,
                    warning: true,
                    error: true
                }
            }))

    });

    gulp.task('test-accessibility', ['generate-accessibility-report'], function(){

        return gulp.src('./reports/' + date + 'accessibility/*.json')
            .pipe(jsonFormat(4))
            .pipe(gulp.dest('./reports/' + date + '/accessibility'));

    });
}
