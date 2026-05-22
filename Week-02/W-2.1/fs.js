const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "a.txt");

const contents = fs.readFileSync(filePath, "utf-8");
console.log(contents);