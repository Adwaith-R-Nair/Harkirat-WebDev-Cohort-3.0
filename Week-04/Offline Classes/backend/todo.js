const express = require("express");

const app = express();
app.use(express.json());

const todos = [];

app.get("/", function(req, res) {
    res.sendFile("/home/adwaith-r-nair/Coding/Dev/Harkirat-WebDev-Cohort-3.0/Week-04/Offline Classes/frontend/todo.html")
})

app.post("/todo", function (req, res){
    console.log("post todo was called");
    const todo = req.body.todo;
    todos.push(todo);
    res.json({
        message : "Successfully added todo"
    })
})

app.get("/todos", function (req, res){
    res.json({
        todos: todos
    })
})

app.listen(3000);