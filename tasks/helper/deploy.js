var gulp   = require('gulp'),
    gutil = require('gulp-util'),
    argv  = require('minimist')(process.argv),
    rsync = require('gulp-rsync'),
    prompt = require('gulp-prompt'),
    gulpif = require('gulp-if');

gulp.task('deploy', function() {

    rsyncPath = './public/';

    var conf = require('../../src/site.json');

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

    // Staging config
    if (argv.staging) {

        rsyncConf.hostname = conf.server.staging.hostname;
        rsyncConf.username = conf.server.staging.username;
        rsyncConf.destination = conf.server.staging.destination;

    // Production config
    } else if (argv.production) {

        rsyncConf.hostname = conf.server.production.hostname;
        rsyncConf.username = conf.server.production.username;
        rsyncConf.destination = conf.server.production.destination;

    // Missing/Invalid Target
    } else {

        throwError('deploy', gutil.colors.red('Missing or invalid target'));

    }

    // Get path to rsync up to the server
    return gulp.src(rsyncPath)

    // Use gulp-rsync to sync the files to staging
    .pipe(gulpif(
        argv.staging,
        prompt.confirm({
        message: gutil.colors.yellow('Heads Up!') + ' Are you SURE you want to push to ' + gutil.colors.red('Staging?'),
        default: false
        })
    ))

    // Use gulp-rsync to sync the files to production
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
