// generated on 2016-07-13 using generator-webapp 2.1.0
const gulp = require('gulp');
const del = require('del');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

const requireDir = require('require-dir');


requireDir('./gulp/tasks');


gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('build', ['lint', 'html', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

