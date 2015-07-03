var gulp = require('gulp'),
    critical = require('critical');

gulp.task('critical', ['pre-process', 'build-html'] ,function () {
    critical.generateInline({
        base: 'public/',
        src: 'index.html',    
        styleTarget: 'css/site.min.css',
        htmlTarget: 'index.html',
        width: 320,
        height: 480,
        minify: true,
        inlineImages: true
    }, function () {
      console.log(arguments);
    });
});