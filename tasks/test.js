var gulp = require('gulp'),
    util = require("gulp-util");

// Helper tasks

require('./helper/del');

// Test tasks

require('./test/accessibility');
require('./test/psi');
require('./test/stylestats');

var testTasks = [];

testTasks.push('del-test');
testTasks.push('test-accessibility');
testTasks.push('test-page-speed');
testTasks.push('test-stylestats');

gulp.task('test', testTasks);
