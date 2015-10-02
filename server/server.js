var express = require('express'),
    router = require('./router.js'),
    port = '3000',
    ip = '127.0.0.1';

var app = express();

app.use('/', express.static(__dirname + './../'));

app.get('/add-comments', function(req, res) {
  res.sendFile('add-comments.html', { root: __dirname + './../app/add-comments/partials/' });
});

app.all('/*', function(req, res) {
  res.sendFile('index.html', { root: __dirname + './../' });
});

app.listen(port, ip);
console.log('Server running at http://' + ip + ':' + port);
