var os = require("os");
var hostname = os.hostname();

const fs = require('fs')

const https = require('https')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello HTTPS from ' + hostname)
})

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(3000, () => {
  console.log('Listening...')
})



