function home(req, res) {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello home');
  }
}

function user(req, res) {
  if (req.url === '/user') {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello user');
  }
}

module.exports.home = home;
module.exports.user = user;
