// ===========================================================
//                Event-Driven Implementation
// ===========================================================
// Key flow:
// 1. Import custom event-emitting Logger
// 2. Instantiate logger (inherits EventEmitter methods)
// 3. Register listener BEFORE emitting (event sequencing)
// 4. Trigger event through main method

const Logger = require("./logger");
const logger = new Logger(); // Now has .on()/.emit() methods

// Event listener pattern:
// - Callback executes when event occurs
// - args parameter receives emitted data
logger.on("messageLogged", (args) => {
  console.log("Listener called: ", args);
});

// Execute main logic that triggers event chain
logger.log("Hello World");
