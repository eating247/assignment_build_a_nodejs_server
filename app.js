var http = require("http");
var fs = require("fs");

var host = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 not found");
    } else {

      // console.log(req.url, req.method, req.httpVersion, req.headers)
      // console.log(res.statusMessage, res.statusCode, res._header)

      var reqObj = {
        url: req.url,
        method: req.method,
        httpVersion: req.httpVersion,
        headers: req.headers
      }

      var jsonReq = JSON.stringify(reqObj, null, 2);

      var resObj = {
        statusMessage: res.statusMessage,
        statusCode: res.statusCode,
        header: res._header
      }

      var jsonRes = JSON.stringify(resObj, null, 2);

      console.log(jsonReq)

      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      data = data.replace("{{req}}", jsonReq)
      data = data.replace("{{res}}", jsonRes)
      res.end(data)
    }
  })
});

server.listen(port, host, function() {
  console.log(`listening at http://${host}:${port}`)
})