//! Working with promises

const prom = new Promise((resolve, reject) => {
    //     !do the async work here
    resolve("This is resolve");

    reject(new Error("This is reject"));
});

prom
    .then((result) => console.log(result))
    .catch((err) => {
        console.log(err.message);
    });
