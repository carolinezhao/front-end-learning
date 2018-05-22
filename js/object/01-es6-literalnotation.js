// 对象字面量语法扩展

// ========= 属性初始值的简写 =========
// 当一个对象的属性与本地变量同名时，可以只写property，省略冒号和value。
// [ES5写法] name: name,
function Person(name, age) {
    return {
        name,
        age
    };
}
var rabbit = new Person('caroline', 25);
console.log(rabbit);

// ========= 对象方法的简写 =========
// 添加方法时，可以只写属性名，省略冒号和function关键字。
// [ES5写法] sayName: function() {};
var contact = {
    name: 'rabbit',
    sayName() {
        console.log(this.name);
    }
}
contact.sayName();

// ========= 可计算属性名 computed property name =========
// ES5中，如果想通过计算得到属性名（比如属性名是中间带有空格的字符串），就需要用方括号代替点记法。
var name = {},
    lastName = 'last name';

name['first name'] = 'caroline';
name[lastName] = 'zhao';
// 实际的属性名是 'first name' 和 'last name'
console.log(name);

// 在对象字面量中，可以直接使用字符串字面量作为属性名。
var name1 = {
    'first name': 'Silvia'
}
console.log(name1['first name']);
console.log('');
// 以上的模式适用于属性名提前已知或可被字符串字面量表示的情况。
// 如果需要通过计算才能得到变量的值，则ES5中无法为对象字面量定义该属性。

// ES6中，可以在对象字面量中使用可计算属性名称，用方括号表示。它的内容会被求值并最终转化为一个字符串。
let surname = 'last name';
let person1 = {
    'first name': 'Gal',
    [surname]: 'Gadot'
}
console.log(person1);

var suffix = ' name';
var person2 = {
    ['first' + suffix]: 'bear',
    ['last' + suffix]: 'liu'
}
console.log(person2);
// node 下运行
// 如果为' name'，显示为 'first name'；如果为'name'，显示为 firstname。
// 打印结果不同，但都是字符串。