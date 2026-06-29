const express = require("express");

const app = express();

// path parameter
app.get("/api/user/:userID", function(req, res) {
    res.send("<html><b>" + req.params.userID + "</b></html>");
})

// query parameter
app.get("/api/user/", function(req, res) {
    const userId = req.query.userId;
    const name = req.query.name;
    const age = req.query.age;

    res.json({
        userId: userId,
        name: name,
        age: age
    })
})

app.listen(3000);