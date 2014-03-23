var spdy = require('spdy');
var http = require('http');
var fs = require('fs');

var agent = spdy.createAgent({
  host: '0.0.0.0',
  rejectUnauthorized:false,
  key: fs.readFileSync('keys/server.key'),
  cert: fs.readFileSync('keys/server.crt'),
  ca: fs.readFileSync('keys/server.csr'),
  port: 8080
});

http.get({
  host:'0.0.0.0',
  agent: agent
}, function(res) {
  console.log('Spdy res coming in!');
  var d = [];
  res.on('data', function(data) {
    d += data;
  });

  res.on('end', function() {
    console.log(d);
  });
  agent.close();
}).end();
