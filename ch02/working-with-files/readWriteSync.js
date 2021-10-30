const fs = require("fs");
const path = require("path");

console.log(process.cwd());

const filePath = path.join(process.cwd(), "hello.txt");

const contents = fs.readFileSync(filePath, "utf-8");

console.log("File Contents: ", contents);

const upperContents = contents.toUpperCase();

fs.writeFileSync(filePath, upperContents);

console.log("File updated.");
