var http = require('http'),
    router = require('./router.js'),
    port = '3000',
    ip = '127.0.0.1';

http
  .createServer(function(req, res) {
    router.home(req, res);
    router.user(req, res);
  })
  .listen(port, ip);

console.log('Server running at http://' + ip + ':' + port);
