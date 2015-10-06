var gulp = require('gulp');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');
var  watch = require('gulp-watch');

gulp.task('default', function () {
    return gulp.src('src/**/*.js')
        .pipe(watch('src/**/*.js'))
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('transpile',function() {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('test_transpiled',['transpile'], function () {
    return gulp.src('dist/test.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan',
            timeout:200000}));
});

gulp.task('test', function () {
    return gulp.src('src/test.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan',
            timeout:200000}));
});