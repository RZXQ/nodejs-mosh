// ===========================================================
//                EventEmitter Inheritance Setup
// ===========================================================
// Why extend EventEmitter?
// - Inherits event triggering/listening capabilities
// - Creates custom observable objects in Node.js
// - Enables decoupled communication between components

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    // Core logging functionality
    console.log(message);

    // Event emission pattern:
    // - Notifies listeners while maintaining main logic
    // - { id: 1, url: "http://" } is payload for event handlers
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
