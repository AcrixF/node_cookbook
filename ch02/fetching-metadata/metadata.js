const fs = require("fs");

const file = process.argv[2];

function printMetadata(file) {
    try {
        const fileStatus = fs.statSync(file);
        console.log(fileStatus);
    } catch (error) {
        console.error("Error reading file path: ", file);
    }
}

printMetadata(file);
