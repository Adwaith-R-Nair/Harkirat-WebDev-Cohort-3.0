const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "a.txt");
const filePath2 = path.join(__dirname, "b.txt");

const contents = fs.readFileSync(filePath, "utf-8");
console.log(contents);

const contents2 = fs.readFileSync(filePath2, "utf-8");
console.log(contents2);