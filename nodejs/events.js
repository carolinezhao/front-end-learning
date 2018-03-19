// EventEmitter 的每个事件由一个事件名 (语义字符串) 和若干个参数组成。
// 对于每个事件，EventEmitter 支持若干个事件监听器。
// 事件发射时，注册到该事件的监听器被依次调用，事件参数作为回调函数参数传递。

var events = require('events')

var emitter = new events.EventEmitter()

// emitter 为事件 someEvent 注册了两个事件监听器
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2)
})

emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2)
})

emitter.emit('someEvent', 'caroline', 1992)