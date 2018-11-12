var gulp = require('gulp');
var postcss = require('gulp-postcss');
var pxtoviewport = require('postcss-px-to-viewport');

gulp.task('css', function () {

  var processors = [
    pxtoviewport({
      viewportWidth: 375,
      viewportUnit: 'vmin'
    })
  ];

  return gulp.src(['src/style/**/*.css'])
    .pipe(postcss(processors))
    .pipe(gulp.dest('src/dist/'));
});
