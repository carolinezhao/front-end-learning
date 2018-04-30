// 3.5 操作符

// 3.5.1 一元操作符 unary operator
// 一元操作符：只能操作一个值。
// 重要区别！！：
// ++ 和 -- 作用于对象本身 (前置在执行前变，后置在执行后变)；
// + 和 - 不改变对象本身；
let a = true,
    b = false;
c = +b;
++a; + b;
console.log(a, b, c);

// 1) 递增和递减 (作用对象本身变了)
// 前置型
let month = 4,
    year = 2018;
++month; // 相当于 month = month + 1;
--year;
console.log(month, year);

// 变量的值在语句被求值以前改变 (这种情况称作副效应)。
let age = 25;
ageNew = ++age + 2;
console.log(age, ageNew); // 26, 28

// 前置递增和递减操作与执行语句的优先级相等，因此整个语句会从左到右被求值。？？
let diff1 = ageNew - --age; // 28 - 25
let diff2 = ageNew - age; // 28 - 25
console.log(diff1, diff2);

// 后置型
// 与前置的区别：递增和递减操作是在包含它们的语句被求值之后才执行的。
let diff3 = ageNew - age++; // 28 - 25
let diff4 = ageNew - age; // 28 - 26
console.log(diff3, diff4);
console.log('');

// 这 4 个操作符对任何值都适用，遵循一定规则 (见各种类型的操作结果)。
let s = '';
console.log(++s); // 1

// 应用于对象时，先调用对象的 valueOf() 以取得可供操作的值。
// 如果结果是 NaN，则再调用 toString() 以取得可供操作的值。？？
let obj = {
    valueOf: () => 6
} // 操作符取得的值是 6
let obj1 = {
    valueOf: () => 6,
    toString: () => -2
} // 操作符取得的值是 6
let obj2 = {
    valueOf: () => '',
    toString: () => -2
} // 操作符取得的值是 0
let obj3 = {
    valueOf: () => 'a',
    toString: () => {
        console.log('to string')
        return -2
    }
} // 操作符取得的值是 NaN，也调用了 toString，为什么不是 -2 ？(尽管返回值是 -2)
let obj4 = {
    toString: () => -2
} // 操作符取得的值是 -2

let array1 = ['20', 'node', '', true, false, 0.55, obj, obj1, obj2, obj3, obj4];
console.log('3个值分别是：传入的数据类型；转换前的值；转换后且进过--操作的值')
array1.forEach(function (para) {
    console.log(typeof para, `${para} to`, --para);
})
console.log(obj);
console.log('');


// 2) 一元加和减  (作用对象本身没变)
// 注意一元操作符只能操作一个值！！和普通加号不一样！！
let week1 = 1,
    week2 = 2;
week1 = +week1; // 没有变化
week2 = -week2; // 变为负值
console.log(week1, week2);

// 在对非数值应用一元加操作符时，该操作符会像 Number() 转型函数一样对这个值执行转换。
// 对象是先调用它们的 valueOf() 和(或) toString() 方法，再转换得到的值。
console.log('3个值分别是：传入的数据类型；转换前的值；转换后且进过+操作的值')
array1.forEach(function (para) {
    console.log(typeof para, `${para} to`, +para);
});
// + 替换为 Number() 结果完全一致。

// 一元加和减操作符主要用于基本的算术运算，也可以用于转换数据类型。 


// 3.5.2 位操作符 bitwise operator
// 1) 按位非 (NOT)
// 2) 按位与 (AND)
// 3) 按位或 (OR)
// 4) 按位异或 (XOR)
// 5) 左移
// 6) 有符号的右移
// 7) 无符号右移


// 3.5.3 布尔操作符 boolean operator

// 3.5.4 乘性操作符 multiplicative operator
// 乘法、除法和求模
// 如果参与乘性计算的操作数不是数值，后台会先使用 Number() 转型函数将其转换为数值。
console.log('')

// 3.5.5 加性操作符 additive operator
// 两个都是数值，执行常规加/减法。
// 有一个操作数是 NaN，则结果是 NaN。
console.log(5 + NaN, 5 - NaN);

// 加法
// 字符串 + 字符串 = 字符串
// 字符串 + 数值/布尔值/null/undefined (调用 toString() 转换为字符串) = 字符串
// 字符串 + 对象 (先调用 valueOf() 得到的结果转换为字符串，如果没有，则调用 toSrting()) = 字符串
// 数值 + 非字符串 (布尔值，对象，null) = 数值
// 布尔，对象，null，任意两个相加 = 数值
// undefined + 除了字符串的其他 = NaN
let obje = {
    valueOf: () => true,
    toString: () => false
}
console.log('5' + '5', '5' + 5, '5' + true, '5' + null, '5' + undefined, '' + 5);
console.log('5' + obje);
console.log(5 + true, 5 + obje, 5 + null, 5 + undefined);
console.log(true + obje, null + obje, null + true);

// 忽视加法操作中的数据类型是 js 编程中最常见的一个错误！
let num01 = 5,
    num02 = 10;
// 从左到右执行加法，都转换为字符串。
let msg1 = 'The sum of 5 and 10 is ' + num01 + num02;
// 使用圆括号把两个数值变量括在一起，就会告诉解析器先计算其结果。
let msg2 = 'The sum of 5 and 10 is ' + (num01 + num02);
console.log(`${msg1}\n${msg2}`);

// 减法
// 有一个操作数是字符串、布尔值、null 或 undefined，则先调用 Number() 将其转换为数值。
// 有一个操作数是对象，调用 valueOf() 取得数值。没有则调用 toString()。
// 有 undefined，结果均为 NaN。
console.log('5' - '5', '5' - 5, 5 - null, '5' - null, '5' - obje, 5 - obje);
console.log('')


// 3.5.6 关系操作符 relational operator
// 小于 (<)、大于 (>)、小于等于 (<=) 和大于等于 (>=) 用于对两个值进行比较，都返回布尔值。
// 使用非数值时，进行数据转换。

// 比较两个字符串时，实际比较的是两个字符串中对应位置的每个字符的【字符编码值】。
// 大写字母的字符编码全部小于小写字母的字符编码，因此总是“小于”。
let result1 = 'Bear' < 'apple'; // true
// 如果要真正按字母表顺序比较字符串，需要把两个操作数转换为相同的大小写形式 (全部大写或全部小写)。
let result2 = 'Bear'.toLowerCase() < 'apple'.toLowerCase(); // false
console.log('比大小的结果');
console.log(result1, result2);

// 一个操作数是数值，则另一个操作数转换为数值进行比较。
console.log('23' < '3'); // true，比较字符编码
console.log('23' < 3); // false，比较数值

// 布尔值转换为数值进行比较。
console.log(true > false);
console.log(true >= 1);

// 由于字母"a"不能转换成合理的数值，因此就被转换成了 NaN。
// 任何数与 NaN 比较，结果都是 false。
console.log('a' < 3); // false
console.log(NaN < 3); // false

// 操作数是对象，调用 valueOf() 方法。如果没有，则调用 toString() 方法进行比较。
let object = {
    valueOf: () => 'abc'
}
console.log(object < 'true');
console.log('')


// 3.5.7 相等操作符 equality operator
// 相等和不相等——先转换再比较；
// 全等和不全等——仅比较而不转换 (推荐使用) 。

// 相等 (==) 和不相等 (!=)
// 先转换操作数 (通常称为强制转型)，然后再比较它们的相等性。
// 规则：
// 如果操作数是...，则在比较相等性之前先将其转换为...
// 布尔值，false --> 0, true --> 1;
// 字符串和数值，字符串 --> 数值；
// 对象和其他，调用对象的 valueOf() 方法，用得到的基本类型值按照前面的规则进行比较；
let figure = 1;
let obj5 = {
    valueOf: () => 1
}
let array2 = [true, '1', 'number', obj5];
console.log('== 的比较结果');
array2.forEach(function (para) {
    console.log(figure == para, typeof figure == para);
})

// 以及一些特殊规则：
console.log(undefined == null); // true，但不能将 null 和 undefined 转换成其他任何值。
// 任何操作数与 NaN 比较都返回 false，包括它自己。
// 如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true；否则，返回 false。
let obj6 = obj5,
    obj7 = {
        valueOf: () => 1
    }
console.log(obj6 == obj5, obj7 == obj5); // true false


// 全等 (===) 和不全等 (!==)
// 不转换操作数，直接比较。
console.log('=== 的比较结果');
array2.forEach(function (para) {
    console.log(figure === para, typeof figure === para);
})
console.log(undefined === null); // false，两者是不同类型的值。

// 其他规则同上。
console.log('');


// 3.5.8 条件操作符 conditional operator
// variable = boolean_expression ? true_value : false_value;
let num1 = 77,
    num2 = 88;
let max = (num1 > num2) ? 'num1' : 'num2';
console.log(max);


// 3.5.9 赋值操作符 assignment operator
// 简单赋值操作
let n = 10;
// 复合赋值操作：在等于号 (=) 前面添加乘性操作符、加性操作符或位操作符 (相当于对常规表达式的简写)。
n += 2; // 12
n *= 2; // 24
n /= 3; // 8
n %= 3; // 2
n -= 1; // 1
n <<= 5; // 32 左移/赋值
n >>= 1; // 16 有符号右移/赋值
n >>>= 2; // 4 无符号右移/赋值
console.log(n);


// 3.5.10 逗号操作符 comma operator
// 用于声明多个变量；
let num11 = 1,
    num22 = 2,
    num33 = 3;
// 用于赋值时，返回表达式 (要有括号) 中的最后一项。
let num44 = (2, 4, 6, 8, 10);
console.log(num44); // 10