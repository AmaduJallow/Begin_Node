const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());


app.get("/", function (req, res) {
    res.send("Welcome");
});

const courses = [
    {id: 1, name: "Javascript"},
    {id: 2, name: "C++"},
    {id: 3, name: "Java"},
    {id: 4, name: "Python"},
];

app.get("/api/courses", function (req, res) {
    res.send(courses);
});
app.get("/api/course/:id", function (request, response) {
    let course = courses.find((c) => c.id === parseInt(request.params.id));
    if (!course) return response.status(404).send("course not found");
    response.send(course);
});

app.get("/api/users/:firstname/:lastname", function (req, res) {
    res.send(req.params);
});
app.post("/api/courses", (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });
    const result = schema.validate(req.body);
    console.log(result);
    if (result.error) {
        res.status(400).send(result.error);
    }
    const course = {
        name: req.body.name,
        id: courses.length + 1,
    };
    courses.push(course);
    res.send(course);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening on port " + port));
