var gulp = require('gulp'),
	del = require('del');

gulp.task('del-build', function () {

      del.sync(['public/*', 'public/.*']);

});

gulp.task('del-test', function () {

      del.sync(['reports/']);

});
