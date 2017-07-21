const gulp = require('gulp');


/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Point tofiles to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task('message', function() {
    return console.log('Gulp is running');
});

// Copy All HTML Files
gulp.task('copyHtml', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
})

gulp.task('default', function() {
    return console.log('Gulp is running');
});