'use strict';
const gulp = require('gulp');


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
