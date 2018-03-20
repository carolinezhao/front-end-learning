var events = require('events')

var emitter = new events.EventEmitter()

emitter.on('error', function() {
    console.log('Something Wrong')
})

emitter.emit('error')

// 如果没有 line 5-7，运行后报错和书中不太一样？