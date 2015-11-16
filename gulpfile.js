// Include gulp
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

// less Task
gulp.task('less', function(){
    return gulp.src(['./resources/less/base.less', './resources/less/*.less', './resources/less/utilities.less'])
            .pipe(less())
            .pipe(autoprefixer({
              browsers: ['last 2 versions', 'IE 9', 'IE 8'],
              cascade: false
            }))
            .pipe(concat('app.min.css'))
            .pipe(minify())
            .pipe(gulp.dest('./css'));
});

// watch tasks
gulp.task('watch-less', function(){
    gulp.watch(['./resources/less/*.less'], ['less']);
});

gulp.task('default',['less', 'watch-less']);
