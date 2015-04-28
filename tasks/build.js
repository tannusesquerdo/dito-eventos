var gulp = require('gulp');

require('./libs');
require('./scripts');
require('./images');
require('./html');
require('./pre-process');

gulp.task('build', ['build-libs', 'build-scripts', 'build-images', 'build-fonts', 'build-html', 'pre-process']);