'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', () => {
  gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));

  gulp.src('./images/**.*')    
    .pipe(gulp.dest('./build/images'));
  
  gulp.src('./views/index.html')    
    .pipe(gulp.dest('./build/'));
});