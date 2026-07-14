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

app.listen(3000);