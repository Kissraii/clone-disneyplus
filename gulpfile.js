const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function build(cb) {
    console.log('Build funcionando!');
    cb();
}

function styles() {
    return gulp.src('.src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

exports.build = build;
exports.default = styles;