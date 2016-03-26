var gulp = require('gulp'),
    util = require("gulp-util");

// Helper tasks

require('./helper/del');
require('./test/accessibility');
require('./test/psi');
require('./test/stylestats');

// Test tasks

var testTasks = [];

testTasks.push('del-test');
testTasks.push('test-accessibility');
testTasks.push('test-page-speed');
testTasks.push('test-stylestats');

gulp.task('test', testTasks);
