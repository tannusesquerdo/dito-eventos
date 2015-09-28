var gulp = require('gulp'),
    util = require("gulp-util");

require('./libs');
require('./scripts');
require('./images');
require('./html');
require('./pre-process');
require('./del');
require('./critical');

var buildTasks = [];

buildTasks.push('del');
buildTasks.push('build-libs');
buildTasks.push('build-scripts');
buildTasks.push('build-images');
buildTasks.push('build-fonts');
buildTasks.push('build-html');
buildTasks.push('pre-process');

if(!!util.env.prod) buildTasks.push('critical');


gulp.task('build', buildTasks);
