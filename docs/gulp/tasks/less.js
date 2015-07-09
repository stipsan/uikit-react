var gulp = require('gulp'),
  less = require('gulp-less'),
  minifyCSS = require('gulp-minify-css'),
  sourcemaps = require('gulp-sourcemaps'),
  handleErrors = require('../util/handleErrors'),
  replace = require('gulp-replace'),
  merge = require('merge-stream'),
  autoprefixer = require('gulp-autoprefixer'),
  bower = require('less-plugin-bower-resolve'),
  config = require('../config').less;

gulp.task('less', function() {
  var src = gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(less({
        plugins: [bower]
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest.development + config.folder));
    
  var minified = gulp.src(config.src)
    .pipe(less({
        plugins: [bower]
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer({cascade: false}))
    .pipe(minifyCSS({keepSpecialComments:0, processImport: false}))
    .pipe(gulp.dest(config.dest.production + config.folder))
    
  return merge(src, minified);
});
