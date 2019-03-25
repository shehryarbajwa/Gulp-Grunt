


var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("default", function() {
  // code for your default task goes here
  console.log("Shehryar is running Gulp");
});

gulp.task("styles", function(){
  gulp.src('sass/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'));
});
