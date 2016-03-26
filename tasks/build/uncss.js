var gulp = require('gulp'),
    size = require('gulp-size'),
    uncss = require('gulp-uncss');


gulp.task('uncss', ['pre-process', 'build-html'], function () {
    return gulp.src('./public/css/site.css')

        .pipe(size({gzip: false, showFiles: true, title:'before uncss css'}))
        .pipe(size({gzip: true, showFiles: true, title:'before uncss gzipped css'}))

        .pipe(uncss({
            html: ['./public/*html']
        }))
        
        .pipe(size({gzip: false, showFiles: true, title:'after uncss css'}))
        .pipe(size({gzip: true, showFiles: true, title:'after uncss gzipped css'}))
});
