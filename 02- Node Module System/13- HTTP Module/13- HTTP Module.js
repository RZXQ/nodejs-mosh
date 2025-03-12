// ===========================================================
//            A. Simple Use Case - HTTP Server & Connection Event
// ===========================================================
// In Node.js, many objects (like our HTTP server) are instances of EventEmitter.
// That means they can "emit" events and you can "listen" for those events using server.on().
// The server.listen() method, however, tells the OS to start accepting connections on a given port.

const http = require("http");

// Create a server instance without an inline request listener.
const simpleServer = http.createServer();

// Register a listener for the "connection" event.
// This callback is executed every time a new TCP connection is established.
simpleServer.on("connection", (socket) => {
  console.log("New Connection...");
});

// Start the server listening on port 3000.
// Now, whenever a client connects, the "connection" event will be emitted.
simpleServer.listen(3000);
console.log("Simple Server: Listening on port 3000...");

// ===========================================================
//            B. Real World Case - HTTP Server with Request Handling
// ===========================================================
// This example creates an HTTP server with an inline request listener that handles two endpoints:
// 1. "/"       => responds with "Hello World"
// 2. "/api/courses" => responds with a JSON string of an array [1, 2, 3]
//
// Note: These examples are independent. To avoid port conflicts, run them separately.
// ===========================================================
// - This is equivalent to explicitly writing:
// const server = http.createServer();
//
// server.on("request", (req, res) => {
//   if (req.url === "/") {
//     res.write("Hello World");
//     res.end();
//   }
// });

const realServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/courses") {
    // JSON.stringify() converts a JavaScript object/array to a JSON string.
    // JSON.parse() converts a JSON string back into a JavaScript object/array.
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

// Start the server on port 3000.
realServer.listen(3000);
console.log("Real World Server: Listening on port 3000...");

// Register a listener for "connection" events to log when a new connection occurs.
realServer.on("connection", (socket) => {
  console.log("New Connection...");
});
