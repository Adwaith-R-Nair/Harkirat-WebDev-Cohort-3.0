const express = require("express");

const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}];

app.use(express.json());

app.get("/", function(req, res) {
    const JohnKidneys = users[0].kidneys;
    const numberofkidneys = JohnKidneys.length;
    let healthykidneys = 0;
    for(let i = 0; i < numberofkidneys; i++) {
        if(JohnKidneys[i].healthy) {
            healthykidneys++;
        }
    }
    const unhealthykidneys = numberofkidneys - healthykidneys;

    res.json({
        numberofkidneys,
        healthykidneys,
        unhealthykidneys
    });
});

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Kidney added"
    })
})

app.put("/", function(req, res) {
    if(atLeastOneUnhealthyKidney()) {
        for(let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({
            msg: "All kidneys are now healthy"
        })
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        })
    }
})

app.delete("/", function(req, res) {
    if(atLeastOneUnhealthyKidney()) {
        const newKidneys = [];
        for(let i = 0; i < users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "Removed unhealthy kidneys"
        })
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        })
    }
})

function atLeastOneUnhealthyKidney() {
    let flag = false;
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            flag = true;
        }
    }
    return flag;
}

app.listen(3000);