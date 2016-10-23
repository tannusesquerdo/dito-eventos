var gulp = require('gulp');

// Helper tasks

require('./tasks/helper/browser-sync');
require('./tasks/helper/del');
require('./tasks/helper/serve');


// Build tasks

require('./tasks/build');


// Test tasks

require('./tasks/test');
