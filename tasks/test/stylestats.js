var gulp = require('gulp'),
    jsonFormat = require('gulp-json-format'),
	stylestats = require('gulp-stylestats');



module.exports = function (date) {

    gulp.task('test-stylestats', function () {

      gulp.src('./public/css/*.css')
        .pipe(stylestats({
            type: 'json',
            outfile: true
        }))
        .pipe(jsonFormat(4))
        .pipe(gulp.dest('./reports/' + date + '/stylestats'));

    });

}
