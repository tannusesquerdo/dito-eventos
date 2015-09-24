var gulp = require('gulp');

require('./libs');
require('./scripts');
require('./images');
require('./html');
require('./pre-process');
require('./del');

gulp.task('build', ['del', 'build-libs', 'build-scripts', 'build-images', 'build-fonts', 'build-html', 'pre-process', 'critical']);
