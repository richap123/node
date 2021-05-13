const http = require('http');
const port = process.env.PORT || 3010;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!hope you are fine\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://54.167.113.146:${port}/`);
});
