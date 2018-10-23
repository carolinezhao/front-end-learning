var a = {},
    b = {
        key: 'b'
    },
    c = {
        key: 'c'
    }

a[b] = 123
a[c] = 456

console.log(a[b]); // 456

console.log(b.toString()); // [object Object] string

/* 知识点
对象的 key 只能是 string，如果 key 为一个对象，则会调用 toString()。
因此 a[b] 和 a[c] 实际上都是 a['[object Object]']，第二次赋值覆盖了第一次。
*/ 
