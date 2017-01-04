const gulp = require('gulp');
const wiredep = require('wiredep').stream;

gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
  .pipe(wiredep({
    ignorePath: /^(\.\.\/)+/
  }))
  .pipe(gulp.dest('app/styles'));

  gulp.src(['app/common/script-bundle.tpl', 'app/common/head-bundle.tpl'])
  .pipe(wiredep({
    ignorePath: /^(\.\.\/)*\.\./
  }))
  .pipe(gulp.dest('app/common'));
});