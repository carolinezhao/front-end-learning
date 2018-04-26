// 3.5 操作符

// 3.5.1 一元操作符 unary operator
// 一元操作符：只能操作一个值。
// 1) 递增和递减
// 2) 一元加和减

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
var num1 = 77,
    num2 = 88;
var max = (num1 > num2) ? 'num1' : 'num2';
console.log(max);

// 3.5.9 赋值操作符 assignment operator
// 简单赋值操作
var n = 10;
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
var num11 = 1,
    num22 = 2,
    num33 = 3;
// 用于赋值时，返回表达式 (要有括号) 中的最后一项。
var num44 = (2, 4, 6, 8, 10);
console.log(num44); // 10