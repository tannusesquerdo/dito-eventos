var gulp = require('gulp'),
    jsonFormat = require('gulp-json-format'),
    rename = require('gulp-rename'),
    access = require('gulp-accessibility');



module.exports = function (date) {

    gulp.task('test-accessibility', function() {
      return gulp.src('./public/*.html')
        .pipe(access({
          force: true
        }))
        .on('error', console.log)
        .pipe(access.report({reportType: 'json'}))
        .pipe(jsonFormat(4))
        .pipe(rename({
          extname: '.json'
        }))

        .pipe(gulp.dest('./reports/' + date + '/accessibility'));
    });

}
