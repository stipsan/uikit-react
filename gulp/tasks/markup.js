var gulp = require('gulp');
var config = require('../config').markup;

gulp.task('markup', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest.development))
    .pipe(gulp.dest(config.dest.production));
});
