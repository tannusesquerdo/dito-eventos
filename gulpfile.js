var gulp = require('gulp');


// Build tasks

require('./tasks/build');


// Test tasks

require('./tasks/test');


// Helper tasks

require('./tasks/helper/browser-sync');
require('./tasks/helper/del');
require('./tasks/helper/serve');









