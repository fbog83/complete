var express = require('express'),
    router = require('./router.js'),
    port = '5000',
    ip = '10.188.5.10';

var app = express();

app.get('/dashboard', function(req, res) {
  var dashboard = [
    { user: 'costel', comments: 4 },
    { user: 'gigel', comments: 12 },
    { user: 'marian', comments: 21 }
  ];

  res.header('Access-Control-Allow-Origin', '*');
  res.send(dashboard);
});

app.get('/add-comments', function(req, res) {
  res.sendFile('add-comments.html', { root: __dirname + './../app/add-comments/partials/' });
});


app.listen(port, ip);
console.log('Backend server running at http://' + ip + ':' + port);
