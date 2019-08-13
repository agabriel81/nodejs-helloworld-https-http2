var os = require("os");
var hostname = os.hostname();
var https = require('https');
var fs = require('fs');
var https_options = {
  key: fs.readFileSync("/opt/app-root/src/server.key"),
  cert: fs.readFileSync("/opt/app-root/src/server.crt"),
  ca: [
          fs.readFileSync('/opt/app-root/src/server.crt'),
          fs.readFileSync('/opt/app-root/src/server.crt')
       ]
};
 
https.createServer(options, function (req, res) {
 res.writeHead(200);
 res.end("Welcome to Node.js HTTPS Server" + hostname);

}).listen(8443)
