var gulp = require('gulp'),
    psi = require('psi'),
    site = 'https://sqone.localtunnel.me',
    key = '';

gulp.task('mobile', function () {
  psi({
    // key: key
    nokey: 'true',
    url: site,
    strategy: 'mobile',
  });
});


gulp.task('desktop', function () {
  psi({
    // key: key,
    nokey: 'true',
    url: site,
    strategy: 'desktop',
  });
});