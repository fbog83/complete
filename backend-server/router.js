var server = require('./server.js');

function home(req, res) {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello home');
  }
}

function user(req, res) {
  if (req.url === '/add-comments') {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello user');
  }
}

// console.log('server is:', server);

// server.get('/', function(req, res){
//   res.send('hello world');
// });


module.exports.home = home;
module.exports.user = user;
