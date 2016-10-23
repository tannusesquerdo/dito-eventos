var gulp = require('gulp'),
	browserSync = require('browser-sync'),
    compress = require('compression'),
    modRewrite = require('connect-modrewrite');
	browserReload = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./public/",
            middleware: [
                compress(),
                modRewrite([
                    // redirect / to index.html
                    '^/\\d*$ /index.html [L]',
                    // remove all .html extensions
                    '^([^\.]+)$ $1.html [NC,L]'
                ])
            ]
        },
        port: 3000,
        tunnel: "sqone"
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});
