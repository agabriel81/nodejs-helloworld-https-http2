var os = require('os');
os.hostname();

const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World from "os.hostname()"!");
});

const port = process.env.PORT || 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


