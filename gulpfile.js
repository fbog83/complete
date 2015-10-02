var gulp = require('gulp');
var config = require('./gulp.config')();
var watchify = require('watchify');
var $ = require('gulp-load-plugins')({ lazy: true });

var logTemplate = "*********************************************"
                + "*********************************************";

gulp.task('hello', function() {
  log(logTemplate);

  console.log(config.alljs);
  // TODO: Add gulp print
});

gulp.task('sass', ['hello'], function () {
  log(logTemplate);

  gulp.src(config.scss + '/**/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest(config.css));
});

gulp.task('scripts', function() {
    gulp.src('./app.js')
        .pipe($.browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dist'))
});


function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.yellow(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.yellow(msg));
  }
}
