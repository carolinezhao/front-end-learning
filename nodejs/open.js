var fs = require('fs')

fs.open('./openfile.txt', 'w', function (err, fd) {
    if (err) {
        console.error(err)
    } else {
        console.log(fd)
    }
})