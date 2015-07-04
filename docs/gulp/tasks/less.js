var gulp = require('gulp'),
  less = require('gulp-less'),
  sourcemaps = require('gulp-sourcemaps'),
  handleErrors = require('../util/handleErrors'),
  replace = require('gulp-replace'),
  autoprefixer = require('gulp-autoprefixer'),
  bower = require('less-plugin-bower-resolve'),
  config = require('../config').less;

gulp.task('less', function() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(less({
        plugins: [bower]
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});
