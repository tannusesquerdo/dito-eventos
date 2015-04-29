var gulp = require('gulp'),
    gtenon = require('gulp-tenon-client');

gulp.task('tenon', function() {
  gulp.src('public/*.html', {read: false})
  .pipe(gtenon({
    key: 'Register for your API key and paste it here',
    snippet: true,
    filter: [3, 31],
    saveOutputIn: 'tenon.json'
  }));
});