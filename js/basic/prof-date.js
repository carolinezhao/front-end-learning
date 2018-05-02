// 5.3 Date 类型

// Date 类型使用自 UTC (Coordinated Universal Time，国际协调时间) 1970 年 1 月 1 日午夜(零时)开始经过的毫秒数来保存日期。
// 不传递参数的情况下，新创建的对象自动获得当前日期和时间。
let now = new Date();
console.log(now);

// Date.parse() 接收一个表示日期的字符串参数。
let date1 = new Date(Date.parse('May 2, 2018'));
// 如果直接将表示日期的字符串传递给 Date 构造函数，也会在后台调用 Date.parse()。
let date2 = new Date('2018-05-02T00:00');
console.log(date1, date2);

// Date.UTC() 