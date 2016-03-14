var gulp = require('gulp'),
    jsonFormat = require('gulp-json-format'),
    access = require('gulp-accessibility');


gulp.task('accessibility-test', ['build-html'], function() {

    return gulp.src('./public/*.html')
        .pipe(access({
            accessibilityLevel: 'WCAG2AA',
            reportType: 'json',
            reportLocation : 'reports/accessibility',
            verbose: false,
            reportLevels: {
                notice: false,
                warning: true,
                error: true
            }
        }))

});

gulp.task('accessibility-report', ['accessibility-test'], function(){

    return gulp.src('./reports/accessibility/*.json')
        .pipe(jsonFormat(4))
        .pipe(gulp.dest('./reports/accessibility'));

});
