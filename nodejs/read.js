var fs = require('fs')

fs.open('content.txt', 'r', function (err, fd) {
    if (err) {
        console.error(err)
        return
    }
    console.log(fd)

    var buf = new Buffer(15)
    fs.read(fd, buf, 0, 8, null, function (err, bytesRead, buffer) {
        if (err) {
            console.error(err)
            return
        }
        console.log('bytesRead: ' + bytesRead)
        console.log(buffer)
    })
})

// 以上读取的内容有什么意义？