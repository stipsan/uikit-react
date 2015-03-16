var gulp = require('gulp');

gulp.task('build', ['browserify', 'markup', 'svgs', 'less', 'fontIcons']);
