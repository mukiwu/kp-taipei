var deploy = require("gulp-gh-pages");

gulp.task('deploy', function () {
    gulp.src('./**/*')
        .pipe(deploy());
});
