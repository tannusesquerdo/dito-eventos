var gulp = require('gulp'),
	del = require('del');

gulp.task('del', function () {

      del.sync(['public/*', 'public/.*']);

});
