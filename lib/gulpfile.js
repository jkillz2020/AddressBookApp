var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('default', ['lint', 'watch', 'sass']);

gulp.task('watch', function() {
  gulp.watch('../app/app.js', ['lint']);
  gulp.watch('../sass/main.scss', ['sass']);
});

gulp.task('sass', function(){
  return gulp.src('../sass/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('../styles'))
});

gulp.task('lint', function() {
  return gulp.src(['../app/app.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .on('error', function() {}
  );
});