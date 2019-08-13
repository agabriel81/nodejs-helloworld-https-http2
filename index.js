var express = require('express')
var fs = require('fs')
var https = require('https')
var os = require("os");
var hostname = os.hostname();
var app = express()

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

