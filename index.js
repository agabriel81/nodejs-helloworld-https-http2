const http2 = require('http2');
const fs = require('fs');
const options = {
  key: fs.readFileSync("/opt/app-root/certificate/tls.key"),
  cert: fs.readFileSync("/opt/app-root/certificate/tls.crt"),
  ca: [
          fs.readFileSync('/opt/app-root/certificate/tls.crt'),
          fs.readFileSync('/opt/app-root/certificate/tls.crt')
       ]
};

// https is necessary otherwise browsers will not
// be able to connect
const server = http2.createSecureServer(options, (req, res) => {
 res.end('Hello World!');
});
server.listen(8443);
