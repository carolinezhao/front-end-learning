// 5.4 RegExp 类型

// 基于以下语法创建正则表达式
// var expression = /pattern/flags;
// 模式 (pattern)：正则表达式，可以包含字符类、限定符、分组、向前查找以及反向引用。
// 标志 (flags)：用以标明正则表达式的行为。
// g: 全局 (global) 模式，应用于所有字符串，而非在发现第一个匹配项时立即停止; 
// i: 不区分大小写 (case-insensitive) 模式;
// m: 多行 (multiline) 模式，到达一行文本末尾时还会继续查找下一行。

// 元字符：( [ { \ ^ $ | ) ? * + .]}
// 元字符在正则表达式中都有一或多种特殊用途，如果想要匹配字符串中包含的这些字符，就必须对它们进行转义。

// 字面量形式
let ptn1 = /at/g; // 匹配所有"at";
let ptn2 = /.at/gi; // 匹配所有以"at"结尾的 3 个字符的组合，不区分大小写;
let ptn3 = /\.at/gi; // 匹配所有".at"，不区分大小写;
let ptn4 = /[bc]at/i; // 匹配第一个"bat"或"cat"，不区分大小写;
let ptn5 = /\[bc\]at/i; // 匹配第一个" [bc]at"，不区分大小写;

// RegExp 构造函数 (非必要情况下，不推荐使用)
// 两个参数，都是字符串：要匹配的字符串模式和可选的标志字符串。
let ptn6 = new RegExp('[bc]at', 'i'); // 等价于 ptn4
// 某些情况下要对字符进行双重转义。

// (部分略，没看完)

// 使用正则表达式字面量像直接调用 RegExp 构造函数一样，每次都创建新的 RegExp 实例。


// 5.4.1 RegExp 实例属性
// 没有多大用处，因为这些信息全都包含在模式声明中。
// lastIndex: 整数，表示开始搜索下一个匹配项的字符位置，从 0 算起。


// 5.4.2 RegExp 实例方法
// RegExp 对象的主要方法是 exec()，专门为捕获组而设计的。
// exec() 接受一个参数，即目标字符串，返回包含第一个匹配项信息的数组，或者在没有匹配项的情况下返回 null。
// 返回的数组是 Array 的实例，但包含两个额外的属性: index 和 input。
// 其中，index 表示匹配项在字符串中的位置，input 表示应用正则表达式的字符串。
// 数组第一项是与整个模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串。？？？
// 如果模式中没有捕获组，则该数组只包含一项。

function printMatches(text, pattern) {
    let matches = pattern.exec(text);
    console.log(`模式是 ${pattern}`);    
    console.log(matches);
    console.log(matches.index, matches.input);
    console.log(matches[0]);
    console.log(pattern.lastIndex);
    console.log('');
}

let text1 = 'html and css and js';
let pattern1 = /html( and css( and js)?)?/gi;
printMatches(text1, pattern1);
// 数组中第一项是匹配的整个字符串，第二项包含与第一个捕获组匹配的内容，第三项包含与第二个捕获组匹配的内容。
let pattern11 = /css and js/gi;
printMatches(text1, pattern11);

// 对于 exec() 方法而言，即使在模式中设置了全局标志(g)，它每次也只会返回一个匹配项。
// 不设置全局标志时，在同一个字符串上多次调用 exec() 将始终返回第一个匹配项的信息。
// 设置全局标志时，每次调用 exec() 都会在字符串中继续查找新匹配项。
let text2 = 'cat, bat, sat, fat';
let pattern21 = /.at/;
printMatches(text2, pattern21);
printMatches(text2, pattern21);
let pattern22 = /.at/g;
printMatches(text2, pattern22);
printMatches(text2, pattern22);


// 正则表达式的第二个方法是 test()，它接受一个字符串参数。
// 模式与该参数匹配时返回 true；否则返回 false。
// 只想知道目标字符串与某个模式是否匹配，不需要知道其文本内容时，使用这个方法非常方便。
// test() 常被用在 if 语句中，用于验证用户输入的内容是否有效。
let text3 = '000-00-0000';
let pattern3 = /\d{3}-\d{2}-\d{4}/;
if (pattern3.test(text3)) {
    console.log('The pattern was matched.')
}

// RegExp 实例继承的 toLocaleString() 和 toString() 方法都会返回正则表达式的【字面量】，与创建正则表达式的方式无关。
let ptn7 = /\[bc\]at/i;
let ptn8 = new RegExp('\\[bc\\]at','i');
console.log(ptn7.toString());
console.log(ptn8.toString());
// 正则表达式的 valueOf() 方法返回正则表达式本身。
console.log(ptn7.valueOf());
console.log(ptn8.valueOf());


// 5.4.3 RegExp 构造函数属性


// 5.4.4 模式的局限性