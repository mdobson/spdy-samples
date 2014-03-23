var spdy = require('spdy');
var fs = require('fs');

var options = {
  key: fs.readFileSync('keys/server.key'),
  cert: fs.readFileSync('keys/server.crt'),
  ca: fs.readFileSync('keys/server.csr')
};

var server = spdy.createServer(options, function(req, res) {
  var headers = {
    'content-type':'application/json'
  };

  var body = { 'message': 'Hello world!', 'isSpdy':req.isSpdy };

  res.writeHead(200, headers);
  res.end(JSON.stringify(body));
});

server.listen(8080);
