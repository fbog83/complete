'use strict';

exports.dashboarTest = function() {
  console.log(Http);
  var request = new Http.Get({ url: 'http://10.188.5.10:5000/dashboard' }, true);

  request
    .start()
    .then(function(response) {
      console.log(response);
    });
}
