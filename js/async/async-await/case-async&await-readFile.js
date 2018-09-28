let fs = require('fs');

async function readFile(filename) {
    let value = await new Promise((resolve, reject) => {
        fs.readFile(filename, {
            encoding: 'utf-8'
        }, function (err, contents) {
            if (err) {
                reject(err);
                return;
            }
            resolve(contents);
        });
    });
    let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, 1000);
    });
    console.log(result);
}

readFile('file.txt');