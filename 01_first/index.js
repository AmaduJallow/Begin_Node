require("./logger");
const { log } = require("./logger");
let sayHello = function (message) {
  return `This is your message: ${message}`;
};
let result = sayHello("This is your work right?");

log(result);
