var gulp = require('gulp');

// Build tasks

require('./tasks/build');
require('./tasks/build/critical');
require('./tasks/build/csslint');
require('./tasks/build/fonts');
require('./tasks/build/html');
require('./tasks/build/images');
require('./tasks/build/libs');
require('./tasks/build/pre-process');
require('./tasks/build/scripts');
require('./tasks/build/sitemap');
require('./tasks/build/uncss');


// Test tasks

require('./tasks/test');
require('./tasks/test/accessibility');
require('./tasks/test/psi');
require('./tasks/test/stylestats');



// Helper tasks

require('./tasks/helper/browser-sync');
require('./tasks/helper/del');
require('./tasks/helper/serve');









