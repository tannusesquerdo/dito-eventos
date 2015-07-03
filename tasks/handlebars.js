var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
 
gulp.task('handlebars', function () {
    var templateData = {
        firstName: 'Sqone'
    },
    options = {
        ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false 
        partials : {
            footer : '<footer>the end</footer>'
        },
        batch : ['./src/layouts/partials'],
        helpers : {
            capitals : function(str){
                return str.toUpperCase();
            }
        }
    }
 
    return gulp.src('src/layouts/*.hbs')
        .pipe(handlebars(templateData, options))
        .pipe(rename({
                extname: ".html"
        }))
        .pipe(gulp.dest('./public'));
});