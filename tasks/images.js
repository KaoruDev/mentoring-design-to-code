var gulp = require('gulp');
var paths = require('./configs/path-builder.js');

gulp.task('images', function () {
  gulp.src(paths.images + '**')
    .pipe(gulp.dest(paths.dist + 'images/'));
});
