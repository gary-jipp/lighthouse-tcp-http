const net = require('net');

const args = process.argv.slice(2);
const message = args.join(' ');

const connection = net.createConnection({
  host: 'localhost',
  port: 3001
});

connection.setEncoding("utf8");

connection.on('data', (data) => {
  console.log(data);
});

connection.on('connect', () => {
  console.log('connected!');
  connection.write(message);
  // connection.write("GET /animals\n\n"); // for web server
});

setTimeout(()=>{
  connection.end()
}, 1000);