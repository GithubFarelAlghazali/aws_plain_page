const http = require("http");
const fs = require("fs");
const hostname = "0.0.0.0"; // Listen on all interfaces
const port = 3000; // Use a port above 1024 for non-root users

const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.writeHead(200, {
          "Content-Type": "text/html",
     });
     fs.readFile("./index.html", (err, data) => {
          if (err) {
               res.writeHead(404);
               res.writeHead("File not found");
          } else {
               res.write(data);
          }
          res.end();
     });
});

server.listen(port, hostname, () => {
     console.log(`Server running at port ${port}`);
});
