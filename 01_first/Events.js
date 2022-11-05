let EventEmitter = require("events");
let emitter = new EventEmitter();

//! This is the event listener that wil be called

emitter.on("messageLogged", function(){
    console.log(Math.pow(2,3));
})


//!This the event we are looking for The event that will be raised
emitter.emit('messageLogged');