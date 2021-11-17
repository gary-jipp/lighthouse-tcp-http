const net = require('net');

const server = net.createServer();

server.on('connection', client => {
  client.setEncoding("utf8");

  console.log("Someone connected", client.remoteAddress);

  client.on('end', () => {
    console.log(client.remoteAddress, "left");
  });

  client.on('data', data => {
    console.log(client.remoteAddress, "sent:", data);
    client.write("you sent:" + data);

    if (data === "Hello") {
      client.write("Why Hello there to you");
    }

  });

  client.on('error', err => {
    console.log(err.message);
  });
});



server.listen(3001);
console.log("Server listening on port 3001");
