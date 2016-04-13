var gulp = require('gulp'),
    util = require("gulp-util");

// Helper tasks

require('./helper/del');

// Build tasks

require('./build/fonts');
require('./build/libs');
require('./build/scripts');
require('./build/images');
require('./build/html');
require('./build/pre-process');
require('./build/critical');
require('./build/sitemap');
require('./build/server-config');
require('./build/uncss');

var buildTasks = [];

buildTasks.push('del');
buildTasks.push('build-libs');
buildTasks.push('build-scripts');
buildTasks.push('build-images');
buildTasks.push('build-fonts');
buildTasks.push('build-html');
buildTasks.push('pre-process');

if(!!util.env.prod) buildTasks.push('uncss','critical', 'sitemap', 'server-config');


gulp.task('build', buildTasks);
