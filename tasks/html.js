var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    minifyInline = require('gulp-minify-inline'),
    debug = require('gulp-debug'),
    util = require("gulp-util");

gulp.task('build-html', ['fileinclude'], function() {

  var htmlOps = { 
    conditionals: true,
    spare: true,
    cdata: true,
    quotes: true,
    comments: true
  };

  var minifyOps = {
    js: {
        output: {
            comments: false,
            inline_script: true
        }
    },
    css: {
        keepSpecialComments: 1
    },
};
 
  // return gulp.src('./public/*.html')

  //   .pipe(!!util.env.prod ? minifyHTML(htmlOps) : util.noop())
  //   .pipe(!!util.env.prod ? minifyInline(minifyOps) : util.noop())

  //   .pipe(gulp.dest('./public/'))
  //   .pipe(debug());
    
});
