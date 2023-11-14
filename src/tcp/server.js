const net = require("net");
const PORT = 3000;

const prompt = function(client) {
  client.write(`Users online: ${users}\n`);
  client.write("Say something:");
};

let users = 0;

// Create a server
const server = net.createServer();

// Listen for connection events
server.on("connection", (client) => {
  console.log(client.constructor.name);  // Socket
  users++;

  // Identify incoming data is printable text
  client.setEncoding("utf8");
  console.log("Someone connected!", client.remoteAddress);
  prompt(client);

  client.on("data", (data) => {
    console.log(`[${client.remoteAddress}] says: ${data}`);
    client.write(`You said: ${data}`);

    prompt(client);
  });

  // Listen for 'end' events - from THIS client
  client.on("end", () => {
    console.log(`[${client.remoteAddress}]  left`);
    users--;
  });

});

server.on("listening", () => {
  console.log("Listening");
});

// Once the server is up and running run the callback
server.listen(PORT, () => {
  console.log("Listening on port", PORT);
});