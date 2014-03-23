var https = require('https');
var fs = require('fs');

var opts = {
  host: '0.0.0.0',
  port: 8080,
  path: '/',
  method: 'GET',
  rejectUnauthorized:false,
  key: fs.readFileSync('keys/server.key'),
  cert: fs.readFileSync('keys/server.crt'),
  ca: fs.readFileSync('keys/server.csr')
};

opts.agent = new https.Agent(opts);


var req = https.request(opts, function(res) {
  console.log(res.statusCode);
});

req.on('error', function(e) {
  console.error(e);
});

req.end();
