const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('serve', ['prehtml', 'styles', 'scripts', 'fonts'], () => {
  browserSync({
    notify: false,
    port: 9999,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      },
      //middleware: [
        //modRewrite(['!pdf|doc|docx|xls|xlsx|avi|webm|ogg|mp3|mp4|css|less|js|tpl|png|jpg|jpeg|gif|woff|woff2|tff|svg|eot$ /index.html [L]'])
      //]
    }
  });

  gulp.watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
    ]).on('change', reload);

  gulp.watch(['app/*.html', 'app/**/*.tpl'], ['prehtml']);
  gulp.watch('app/**/*.scss', ['styles']);
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9999,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', ['scripts'], () => {
  browserSync({
    notify: false,
    port: 9999,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/scripts': '.tmp/scripts',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('test/**/*.js').on('change', reload);
  gulp.watch('test/**/*.js', ['lint:test']);
});