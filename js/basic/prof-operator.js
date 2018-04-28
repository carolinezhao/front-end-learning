// 3.5 操作符

// 3.5.1 一元操作符 unary operator
// 一元操作符：只能操作一个值。
// 重要区别！！：
// ++ 和 -- 作用于对象本身 (前置在执行前变，后置在执行后变)；
// + 和 - 不改变对象本身；
let a = true, b = false; c = +b;
++a; +b;
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

// 3.5.4 乘性操作符

// 3.5.5 加性操作符

// 3.5.6 关系操作符

// 3.5.7 相等操作符 equality operator


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