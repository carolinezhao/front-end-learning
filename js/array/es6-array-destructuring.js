// 第5章 解构：使数据访问更便捷

// 数组解构

let colors = ['red', 'green', 'blue'];
// 通过值在数组中的位置进行选取，存储在相应的变量中。
let [first, second] = colors;
console.log(first, second);
// 可以只为感兴趣的元素提供变量名，没有显式声明的元素会被忽略。
let [, , third] = colors;
console.log(third);
console.log(colors); // 不改变原数组

// 解构赋值
let firstColor = 'white',
    secondColor = 'black';
[firstColor, secondColor] = colors;
console.log(firstColor, secondColor);

// 【重要】值交换：常用于排序算法中
let a = 1,
    b = 2;
[a, b] = [b, a];
console.log(a, b);

[first, second] = [second, first];
console.log(first, second);
console.log(colors); // 不改变原数组

[colors[0], colors[1]] = [colors[1], colors[0]];
console.log(colors); // 改变原数组

// 为任意位置添加默认值，当指定位置的属性不存在或为 undefined 时使用默认值。
let [, , forth = 'yellow', fifth = 'purple'] = colors;
console.log(forth, fifth); // forth 使用数组中的值，fifth 使用默认值

// 嵌套数组解构
let colors1 = ['red', ['green', 'lightgreen'], 'blue'];
// 保持相同结构
let [firstColor1, [, secondColor1]] = colors1;
console.log(firstColor1, secondColor1);

// 不定元素 (类似于函数中的不定参数)
// 注意：不定元素必须为最后一个条目。
let [firstColor2, ...restColor2] = colors1;
console.log(restColor2);
console.log(restColor2[0][1]);

// 复制数组
// ES5 中使用 concat() 方法，不传入参数，返回当前数组的副本。
let cloned = colors.concat();
console.log(cloned);
// ES6 可以通过不定元素实现数组复制。
let [...clonedColors] = colors;
console.log(clonedColors);

// 字符串解构
let [e, f, g] = 'ES6';
console.log(e, f, g);