// server.js
const http = require('http');
const fs = require('fs'); // Built-in module
const os = require('os'); // Built-in module

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    fs.readFile('notes.txt', (error, data) => {
      if (error) {
        res.write('Error reading notes.txt');
      } else {
        res.write(data);
        console.log("normal log");
        console.warn("danger");
        console.assert(true, "transaction completed");
        console.assert(false, "transaction failed");
      }
      res.write(`\nFree Memory: ${os.freemem()}`);
      res.write(`\nCPU Info: ${JSON.stringify(os.cpus())}`);
      res.end();
    });
  } else if (req.url === '/product') {
    res.write('This is the product page');
    res.end();
  } else if (req.url === '/user') {
    res.write('This is the user page');
    res.end();
  } else {
    res.write('404 Not Found');
    res.end();
  }
});

// Start the server on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
