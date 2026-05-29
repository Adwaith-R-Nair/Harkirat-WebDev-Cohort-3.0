const fs = require("fs");

function readTheFile(fileName, sendTheFinalValueHere) {
    fs.readFile(fileName, "utf-8", function (err, data) {
        if (err) {
            // We'll talk about this in a moment
            sendTheFinalValueHere(null); // or handle properly
        }
        sendTheFinalValueHere(data);
    });
}

function readFile(fileName) {
    return new Promise(function (resolve, reject) {
        readTheFile(fileName, resolve);
    });
}

const p = readFile("a.txt"); // ✅ pass the filename

function callback(contents) {
    console.log(contents);
}

p.then(callback);