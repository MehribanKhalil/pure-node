import http from "http";
const PORT = 5000;
const localhost = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Ana Sehife</h1>");
  } else if(req.url === '/about' && req.method === 'GET') {
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
    res.end("<h2>Haqqımızda </h2>")
  } else if(req.url === '/contact' && req.method === 'GET') {
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
    res.end("<h2>Contact</h2>")
  } else {
    res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'})
    res.end("<h2>Not Found</h2>")
  }
});

server.listen(PORT, localhost, () => {
  console.log("Listening on port: ", PORT);
});
