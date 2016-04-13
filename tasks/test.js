var gulp = require('gulp'),
    util = require("gulp-util");

var date = new Date();

// Helper tasks

require('./helper/del');

// Test tasks

require('./test/accessibility')(date);
require('./test/psi')(date);
require('./test/stylestats')(date);

var testTasks = [];

testTasks.push('test-accessibility');
testTasks.push('test-page-speed');
testTasks.push('test-stylestats');

gulp.task('test', testTasks);
