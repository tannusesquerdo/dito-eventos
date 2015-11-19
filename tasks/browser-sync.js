var gulp = require('gulp'),
	browserSync = require('browser-sync'),
    compress = require('compression');
	browserReload = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./public/",
            middleware: [compress()]
        },
        port: 3000,
        tunnel: "sqone"
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});
