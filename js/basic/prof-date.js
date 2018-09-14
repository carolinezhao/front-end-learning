// 5.3 Date 类型

// Date 类型使用自 UTC (Coordinated Universal Time，国际协调时间) 1970 年 1 月 1 日午夜(零时)开始经过的毫秒数来保存日期。
// 不传递参数的情况下，新创建的对象自动获得当前日期和时间。
let now = new Date(); // UTC 时间
console.log(now);

// Date.parse() 接收一个表示日期的字符串参数。
let date1 = new Date(Date.parse('May 2, 2018'));
// 如果直接将表示日期的字符串传递给 Date 构造函数，也会在后台调用 Date.parse()。
let date2 = new Date('2018-05-02T00:00');
console.log(date1, date2);
console.log('');

// Date.UTC()


// 继承的方法
// 仅在调试代码时比较有用，在显示日期和时间时没有什么价值。
let string1 = [(new Date()).toString(), (new Date()).toLocaleString()];
string1.forEach(element => {
    console.log(element, typeof element);
});
console.log('');

// valueOf() 返回日期的毫秒，可使用比较操作符 (小于或大于) 来比较日期值。
let date3 = new Date(2018, 0, 1), // 2018.1.1
    date4 = new Date(2018, 2, 1); // 2018.3.1
console.log(date4);
console.log(date3 < date4);
console.log('');

// 日期格式化方法
let string2 = [(new Date()).toTimeString(), (new Date()).toDateString(), (new Date()).toLocaleTimeString(), (new Date()).toLocaleDateString()];
string2.forEach(element => {
    console.log(element, typeof element);
});
console.log('');

// 日期/时间组件方法
let year = now.getFullYear(),
    month = now.getMonth() + 1,
    date5 = now.getDate(),
    week = now.getDay(), // 星期几
    hour = now.getHours(),
    minute = now.getMinutes();
let result = `${year}-${month}-${date5} ${week} ${hour}:${minute}`;
console.log(result);