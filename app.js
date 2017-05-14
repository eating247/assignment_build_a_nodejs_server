var http = require("http");

var host = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    "Content-Type": 'text/plain'
  });
  res.end('hello world');
});

server.listen(port, host, function() {
  console.log(`listening at http://${host}:${port}`)
})