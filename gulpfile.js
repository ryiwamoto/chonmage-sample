var gulp = require('gulp');

var rename = require("gulp-rename");
var typescript = require("gulp-tsc");
var chonmage = require('gulp-chonmage');

gulp.task('chonmage', function() {
    return gulp.src('src/template/*.tmpl')
        .pipe(chonmage({
            rootPath: __dirname + '/src/ts/compiledTemplate'
        }))
        .pipe(rename(function(path) {
            path.extname = ".ts"
        }))
        .pipe(gulp.dest('src/ts/compiledTemplate'));
});

gulp.task('compile-typescript', function() {
    return gulp.src('src/ts/index.ts')
        .pipe(typescript({
            out: 'index.js'
        }))
        .pipe(gulp.dest('js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/template/*.tmpl', ['chonmage']);
    gulp.watch('src/ts/**/*.ts', ['compile-typescript']);
});

// Default Task
gulp.task('default', ['watch']);
gulp.task('compile-all', ['chonmage', 'compile-typescript']);
