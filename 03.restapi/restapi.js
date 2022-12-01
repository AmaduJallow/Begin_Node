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

app.delete("/courses/", (req, res) => {
    if (req.body.id < courses.length + 1) {
        let course = courses.find(course => course.id === parseInt(req.body.id));
        let index = courses.indexOf(course);
        courses.splice(index, 1);
        res.send(course);
    } else {
        res.status(404).send("This is not a valid course id")

    }
})

app.listen(8080, () => {
    console.log("Lite listening");
});
