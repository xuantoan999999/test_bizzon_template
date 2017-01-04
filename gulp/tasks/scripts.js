const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('scripts', () => {
  gulp.src('app/scripts/**/*.js')
  .pipe($.plumber({
    errorHandler: function (error) {
      console.log(error.toString());
      this.emit('end');
    }
  }))
  .pipe(gulp.dest('.tmp/scripts'))
  .pipe(reload({stream: true}));

  return gulp.src('app/modules/**/*.js')
  .pipe($.plumber({
    errorHandler: function (error) {
      console.log(error.toString());
      this.emit('end');
    }
  }))
  .pipe(gulp.dest('.tmp/modules'))
  .pipe(reload({stream: true}));
});