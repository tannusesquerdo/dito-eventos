var gulp = require('gulp'),
    image = require('gulp-image');

gulp.task('build-images', function () {
  gulp.src('./src/images/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      advpng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true
    }))
    .pipe(gulp.dest('public/images'));
});
