var http2 = require('http2');
var os = require("os");
var hostname = os.hostname();
var https = require('https');
var fs = require('fs');
var https_options = {
  key: fs.readFileSync("/opt/app-root/certificate/tls.key"),
  cert: fs.readFileSync("/opt/app-root/certificate/tls.crt"),
  ca: [
          fs.readFileSync('/opt/app-root/certificate/tls.crt'),
          fs.readFileSync('/opt/app-root/certificate/tls.crt')
       ]
};
 
https2.createServer(https_options, function (req, res) {
 res.writeHead(200);
 res.end("Welcome to Node.js HTTPS Server : " + hostname);

}).listen(8443)
