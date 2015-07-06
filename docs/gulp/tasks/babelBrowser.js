var gulp = require('gulp');
var config = require('../config').babelBrowser;

gulp.task('babelBrowser', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
