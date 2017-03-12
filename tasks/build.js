var gulp = require('gulp'),
    util = require('gulp-util');

// Helper tasks

require('./helper/del');

// Build tasks

require('./build/fonts');
require('./build/libs');
require('./build/scripts');
require('./build/images');
require('./build/templates');
require('./build/styles');
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
buildTasks.push('build-templates');
buildTasks.push('build-styles');

if(!!util.env.production) buildTasks.push('uncss','critical', 'sitemap', 'server-config');


gulp.task('build', buildTasks);
