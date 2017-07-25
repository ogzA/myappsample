const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Point tofiles to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes
*/

// Some pointless comments for my project.

// Logs Message
gulp.task('message', function() {
    return console.log('Gulp is running');
});


// Compile Sass
gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Scripts 
gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['message', 'sass', 'scripts']); // Tüm Gulp fonksiyonlarını tek bir kod ile çözümlemiş oluyoruz

gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/sass/*.scss', ['sass']);
});