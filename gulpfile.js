var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy: true });

gulp.task('hello', function() {
  var helloLogTemplate = "***************************************"
                       + " this is my hello"
                       + "****************************************";

  log(helloLogTemplate);

  console.log(config.alljs);
  // TODO: Add gulp print
});



function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.magenta(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.magenta(msg));
  }
}
