const gulp = require('gulp');

gulp.task('extras', () => {
  gulp.src([
    'app/scripts/languages.js',
    'app/scripts/variables.js'
    ], {
      dot: true
    }).pipe(gulp.dest('dist/scripts'));

  gulp.src([
    'app/scripts/libs/**/*.*'
    ], {
      dot: true
    }).pipe(gulp.dest('dist/scripts/libs'));

  gulp.src([
    'app/data/**/*.*'
    ], {
      dot: true
    }).pipe(gulp.dest('dist/data'));

  gulp.src([
    'app/modules/**/*.tpl',
    'app/modules/**/*.json'
    ], {
      dot: true
    }).pipe(gulp.dest('dist/modules'));

  return gulp.src([
    'app/*.*',
    '!app/*.html'
    ], {
      dot: true
    }).pipe(gulp.dest('dist'));
});