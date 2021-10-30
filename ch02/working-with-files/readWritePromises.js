const fs = require("fs").promises;
const path = require('path');

const filepath = path.join(process.cwd(), 'hello.txt');

fs.readFile(filepath, "utf-8").then((contents) =>  {
    console.log("File Contents: ", contents);
});

