const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const browserSync = require('browser-sync');
const reload = browserSync.reload;


gulp.task('prehtml', function() {
  return gulp.src('app/*.html')
  .pipe($.plumber({
    errorHandler: function (error) {
      console.log(error.toString());
      this.emit('end');
    }
  }))
  .pipe($.fileInclude({
    basepath: 'app/'
  }))
  .pipe(gulp.dest('.tmp/'))
  .pipe(reload({stream: true}));
});