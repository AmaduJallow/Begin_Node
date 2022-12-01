const express_api = require("express");
const app = express_api();

app.use(express_api.json());

let courses = [
    {
        id: 1,
        "name": "Javascript"
    },
    {
        id: 2,
        "name": "Java"
    }
]
// gets request
app.get("/", (req, res) => {
    res.send("Hello");
});

app.post("/courses", (req, res) => {
    let course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(courses);
})

app.listen(8080, () => {
    console.log("Lite listening");
});
