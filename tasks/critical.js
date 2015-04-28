var gulp = require('gulp'),
    critical = require('critical');

gulp.task('critical', function () {
    critical.generateInline({
        base: 'public/',
        src: 'index.html',
        styleTarget: 'css/site.min.css',
        htmlTarget: 'index.html',
        width: 320,
        height: 480,
        minify: true
    }, function () {
      console.log(arguments);
    });
});