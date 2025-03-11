// ===========================================================
//                   Import Event Emitter Module
// ===========================================================

const EventEmitter = require("events"); // Import Node.js built-in EventEmitter module
const eventEmitter = new EventEmitter(); // Create a new instance of EventEmitter

// ===========================================================
//                     Register Event Listener
// ===========================================================

// The `.on()` method registers (sets up) a listener callback.
// When EventEmitter emits the event named "messageLogged":
// the provided callback function will execute.
eventEmitter.on("messageLogged", (eventData) => {
  // The argument "eventData" is passed from the `.emit()` method.
  // In other words, `.emit()` sends data to the listener, which the listener receives as "eventData".
  console.log(eventData);
});

// ===========================================================
//                        Emit an Event
// ===========================================================

// The `.emit()` method triggers an event. It can optionally send data.
// Here, it's sending an object { id, url } to the listener.
eventEmitter.emit("messageLogged", { id: 1, url: "https://" });
