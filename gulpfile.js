var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy: true });

var logTemplate = "*********************************************"
                + "*********************************************";

var logWatch = "------------------------------------"
             + "---------------------------";

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
    log(logWatch);

    gulp.src('./app.js')
        .pipe($.browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function () {
    $.watch('./**/*.js', $.batch(function (events, done) {
        gulp.start('scripts', done);
    }));
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
