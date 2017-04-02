var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var karma = require('karma');

gulp.task('js', function() {
    return gulp.src(['./js/**/*.js', '!**/*.spec.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('lint', function () {
    return gulp.src('./js/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('styles', function () {
    return gulp.src('./scss/**/[^_]*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['js', 'styles']);

gulp.task('watch', ['build'], function () {
    gulp.watch([
        './js/**/*.js',
        './scss/**/*.scss'
    ], ['build']);
});

gulp.task('test', function (done) {
    new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});
