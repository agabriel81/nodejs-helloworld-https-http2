var os = require("os");
var hostname = os.hostname();
const app = require('express')();
const https = require('https');
const fs = require('fs');

app.get('/', function (req, res) {
  res.send('hello world from ' + hostname)
})

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(443, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:443/')
})

