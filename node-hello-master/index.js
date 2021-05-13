const http = require('http');
const port = process.env.PORT || 3010;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node! hopw you are doing well \n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://54.91.240.92:3010:${port}/`);
});
