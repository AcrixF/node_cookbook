const fs = require('fs');
const path = require('path');

const filepath = path.join(process.cwd(), 'hello.txt');

fs.readFile(filepath, 'utf-8', (err, contents) =>  {
   if (err) {
       return console.log(err);
   }

   console.log("File Contents: ", contents);
   const upperContents = contents.toUpperCase();

    setTimeout(() => updateFile(filepath, upperContents), 10);

    setInterval(() => process.stdout.write("**** \n"));
});



function updateFile(filepath, upperContents) {
    fs.writeFile(filepath, upperContents, (err)  => {
        if (err) throw err;
        console.log("File updated");
    });
}