// creating a server that reads and pipes the contents of a file to the client via streams, and use a third party fetch api package to fetch and write contents from an api resource to a file.

const fs = require("fs");
const http = require("http");
const path = require("path");

http
  .createServer((req, res) => {
    let contentType = "text/html";
    const { url, method } = req;
    if (url == "/" && method == "GET") {
      let src = fs.createReadStream(path.join(__dirname, "./home.html"));
      res.writeHead(200, { "Content-Type": contentType });
      src.pipe(res);
    } else {
      //making it a readble stream
      let src = fs.createReadStream(path.join(__dirname, "./notFound.html"));
      res.writeHead(404, { "Content-Type": contentType });
      //piping the content of the src file to the writable stream response body
      src.pipe(res);
    }
  })
  .listen(3000, () => {
    console.log("Server running now...");
  });
