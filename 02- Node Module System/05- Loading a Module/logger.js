// ===========================================================
//                   Logger Module Definition
// ===========================================================

const loggerUrl = "http://mylogger.io/log";

function log(message) {
  console.log(message);
}

// Export an object with log method passing exports an object { log: [Function: log] }
module.exports.log = log;

// Export a single function directly, exports function itself [Function: log]
module.exports = log;
