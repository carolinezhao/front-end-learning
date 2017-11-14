// 模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号。
// 模板字符串可以包含特定语法(${expression})的占位符。
// 占位符中的表达式和周围的文本会一起传递给一个默认函数，该函数负责将所有的部分连接起来。

// 在模版字符串内使用反引号（`）时，需要在它前面加转义符（\）。
// 转义后的反引号只当作反引号用，相当于字符串内的反引号。
`\`` === "`" // --> true

// 在普通字符串中嵌入表达式，必须使用如下语法：
var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."

// 通过模板字符串表示：
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

// 模板字符串的一种更高级的形式称为带标签的模板字符串。它允许您通过标签函数修改模板字符串的输出。
// 如果一个模板字符串由表达式开头，则该字符串被称为带标签的模板字符串，该表达式通常是一个函数，它会在模板字符串处理后被调用，在输出最终结果前，你都可以通过该函数来对模板字符串进行操作处理。

// 标签函数的第一个参数是一个包含了字符串字面值的数组（在本例中分别为“Hello”,“world”和""）；第二个参数，在第一个参数后的每一个参数，都是已经被处理好的替换表达式（在这里分别为“15”和“50”）。 最后，标签函数返回处理好的字符串。
var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(strings[2]); // ""
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

tag`Hello ${ a + b } world ${ a * b}`;
// "Bazinga!"