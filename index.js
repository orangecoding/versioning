const http = require('http');
const personApi = require('./lib/apis/personApi');
const carApi = require('./lib/apis/carApi');

//this version should normally either be parsed in as a header or stored in some user object
//so that the user can change the desired api version by themself
const userVersion = 2;

const server = http.createServer(async (req, res) => {
  if (req.url === '/api/person' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(personApi.getPerson({ version: userVersion })));
    res.end();
  } else if (req.url === '/api/cars' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(carApi.getCar({ version: userVersion })));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(5000, () => {
  console.log('Server started at port 5000');
});
