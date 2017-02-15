'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const ghPages = require('gulp-gh-pages');


gulp.task('build', () => {

  gulp.src('./images/**.*')
    .pipe(gulp.dest('./build/images'));

 	 gulp.src('./index.html')
    .pipe(gulp.dest('./build/'));

	gulp.src('./fragments/**.html')
    .pipe(gulp.dest('./build/fragments'));

	gulp.src('./data/**.json')
    .pipe(gulp.dest('./build/data'));


	gulp.src('./bower_components/**/**')
	.pipe(gulp.dest('./build/bower_components'));

});


gulp.task('deploy', () => {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

let buildAndRefresh = function() {
	gulp.start('build');
	browserSync.reload();
}

gulp.task('serve', () => {
  browserSync.init({
        server: "./build",
        open: false,
        notify: false
    });

	gulp.watch("./fragments/**.html").on('change', buildAndRefresh)
	gulp.watch("./index.html").on('change', buildAndRefresh);

});

