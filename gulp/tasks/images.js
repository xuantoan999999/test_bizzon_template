const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
  .pipe($.cache($.imagemin({
    progressive: true,
    interlaced: true,
    svgoPlugins: [{cleanupIDs: false}]
  })))
  .pipe(gulp.dest('dist/images'));
});