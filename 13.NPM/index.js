import http from "http";

// create our server
const server = http.createServer((req, res) => {
  res.writeHead(202, "Good", { "Content-Type": "text/html" });
  res.write("<h1>Hello From NPM</h1>");
});

// Listening on port 8000
server.listen(8000, () => console.log("Server up!"));
