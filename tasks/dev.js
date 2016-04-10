var gulp = require('gulp');

gulp.task('dev', ['htmls', 'sass', 'images'], function () {
  return gulp.start('watch');
});

