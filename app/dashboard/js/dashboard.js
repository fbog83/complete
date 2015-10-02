'use strict';

exports.dashboarTest = function() {
  console.log(Http);
  var request = new Http.Get('http://127.0.0.1:5000/dashboard', true);

  request
    .start()
    .then(function(response) {
      console.log(response);
    });
}
