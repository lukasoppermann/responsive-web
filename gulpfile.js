// Include gulp
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

// less Task
gulp.task('less', function(){
    return gulp.src('./resources/less/*.less')
            .pipe(less())
            .pipe(concat('app.min.css'))
            .pipe(minify())
            .pipe(gulp.dest('./css'));
});

// watch tasks
gulp.task('watch-less', function(){
    gulp.watch(['./resources/less/*.less'], ['less']);
});

gulp.task('default',['less', 'watch-less']);
