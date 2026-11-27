import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<a href='/contact'>Contact</a>");
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h1>About </h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h1>Contact </h1>");
  } else {
    res.writeHead(404, "BAD REQUEST", { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

// /homepage
// /about

server.listen(8000, () => console.log("Server up!"));
