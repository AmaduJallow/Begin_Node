let os = require('os');

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.totalmem()  - os.freemem());

