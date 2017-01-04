const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const gulpif = require('gulp-if');
const argv = require('yargs').argv;

gulp.task('html', ['prehtml', 'styles', 'scripts', 'images'], () => {
  gulp.src('.tmp/index.html')
  .pipe($.useref({
    searchPath: ['.tmp', 'app', '.']
  }))
  .pipe($.if('*.js', gulpif(argv.min, $.uglify({
    mangle: false,
    compress: {
      sequences: true,
      dead_code: true,
      conditionals: true,
      booleans: true,
      unused: true,
      if_return: true,
      join_vars: true,
      drop_console: true
    },
    beautify: false
  }))))
  .pipe($.if('*.css', gulpif(argv.min, $.cssnano({
    safe: true,
    autoprefixer: false
  }))))
  .pipe($.if('*.html', gulpif(argv.min, $.htmlmin({
    collapseWhitespace: false
  }))))
  .pipe(gulp.dest('dist'));

  gulp.src('.tmp/*.html')
  .pipe($.useref({
    searchPath: ['.tmp', 'app', '.'],
    noAssets: true
  }))
  .pipe(gulp.dest('dist'));
});