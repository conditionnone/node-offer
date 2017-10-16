var gulp = require("gulp");
    less = require("gulp-less");
    cssmin = require("gulp-minify-css");
    rename = require("gulp-rename");

gulp.task('compileLess', function() {
  gulp.src('public/stylesheets/less/style.less')
      .pipe(less())
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('public/stylesheets/css'))
});

gulp.task('watch', function() {
  gulp.watch('public/stylesheets/less/*.less', ['compileLess']);
})
