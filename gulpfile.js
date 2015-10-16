// Include gulp
var gulp = require('gulp');
var less = require('gulp-less');

// less Task
gulp.task('less', function(){
    return gulp.src('./resources/less/app.less')
            .pipe(less())
            .pipe(gulp.dest('./css'));
});

// watch tasks
gulp.task('watch-less', function(){
    gulp.watch(['./resources/less/*.less'], ['less']);
});

gulp.task('default',['less', 'watch-less']);
