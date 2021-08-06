// const { src, dest } = require('gulp');
// const compileSass = require('gulp-sass');
//
// compileSass.compile = require('node-sass');
//
// const bundleSass = () => {
//     return src('./scss/style.scss')
//         .pipe(compileSass().on('error', compileSass.logError))
//         .pipe(dest('./css/'));
// }
//
// exports.bundleSass = bundleSass;

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');

gulp.task('compile', function(){
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css'))
})

gulp.task('watch', function(){
    gulp.watch('./scss/**/*.scss', gulp.series('compile'))
})