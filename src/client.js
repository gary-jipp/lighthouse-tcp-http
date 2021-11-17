const net = require('net');

const args = process.argv.slice(2);
const message = args.join(' ');

const connection = net.createConnection({
  host: '165.227.47.243',
  port: 50541
});

connection.setEncoding("utf8");

connection.on('data', (data) => {
  console.log(data);
});

connection.on('connect', () => {
  console.log('connected!');
  connection.write(message);
  // connection.write("GET /animals\n"); // for web server
});

setTimeout(()=>{
  connection.end()
}, 1000);