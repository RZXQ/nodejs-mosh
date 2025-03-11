// ===========================================================
//                      Event Basics with EventEmitter
// ===========================================================

// Event: Signals something happened, like a request hitting a port
// In Node.js, http.Server (not just 'HTTP class') raises events for requests
// Our job: Catch the event, read the request, send a response
const EventEmitter = require("events"); // EventEmitter is a class for event handling

const eventEmitter = new EventEmitter();

// ===========================================================
//                      Registering a Listener
// ===========================================================

// Listener: Function that runs when an event fires
// .on() (alias for addListener) takes event name and callback
// Order is key: Listen first, emit later
eventEmitter.on("messageLogged", function () {
  console.log("Listener called");
});

// ===========================================================
//                      Raising an Event
// ===========================================================

eventEmitter.emit("messageLogged"); // Triggers the event, runs the listener
