// 事件由 EventEmitter 对象提供。fs.readFile 和 http.createServer 的回调函数都是通过 EventEmitter 来实现的。？？
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

// event 对象注册了事件 some_event 的一个监听器
event.on('some_event', function () {
    console.log('some_event occured.');
});

// 向 event 对象发送事件 some_event，此时会调用监听器
setTimeout(function () {
    event.emit('some_event');
}, 1000);