
var gulp   = require('gulp'),
    gutil = require('gulp-util'),
    argv  = require('minimist')(process.argv),
    rsync = require('gulp-rsync'),
    prompt = require('gulp-prompt'),
    gulpif = require('gulp-if');

gulp.task('deploy', function() {

  rsyncPath = './public/';

  rsyncConf = {
    root: rsyncPath,
    progress: true,
    incremental: true,
    relative: true,
    emptyDirectories: true,
    recursive: true,
    clean: true,
    exclude: [],
  };

  // Staging
  if (argv.staging) {

    rsyncConf.hostname = 's174565.gridserver.com';
    rsyncConf.username = 's174565.gridserver.com';
    rsyncConf.destination = 'domains/demo.sqone.it/html/';

  // Production
  } else if (argv.production) {

    rsyncConf.hostname = 's174565.gridserver.com';
    rsyncConf.username = 's174565.gridserver.com';
    rsyncConf.destination = 'domains/sqone.it/html/';

  // Missing/Invalid Target
  } else {
    throwError('deploy', gutil.colors.red('Missing or invalid target'));
  }


  // Use gulp-rsync to sync the files
  return gulp.src(rsyncPath)
  .pipe(gulpif(
      argv.production,
      prompt.confirm({
        message: gutil.colors.yellow('Heads Up!') + ' Are you SURE you want to push to ' + gutil.colors.red('PRODUCTION?'),
        default: false
      })
  ))
  .pipe(rsync(rsyncConf));

});


function throwError(taskName, msg) {
  throw new gutil.PluginError({
      plugin: taskName,
      message: msg
    });
}
