/*
你不知道的 js 2.5 值和引用
js 没有指针 (pointer, 比如 C++ 中的)，只有引用 (reference)。
js 引用指向的是值。如果一个值有多个引用，这些引用指向的都是同一个值，它们相互之间没有引用/指向关系。

论坛
js 引用与指针类似的是：它可以对同一个地址的值进行操作。
与指针不同的是：永远只能指向这个地址，不存在多重引用问题。

和书中内容差不多
https://medium.com/@naveenkarippai/learning-how-references-work-in-javascript-a066a4e15600

高程 4.1.2 复制变量值
基本类型值：
1）把值复制到为新变量分配的位置上。
2）复制到新变量上的值与原来的值完全独立，互不影响。
引用类型值：
1）把值复制一份放到为新变量分配的空间中。
2）值的副本是一个指针 (不是真正的指针)，指向存储在堆中的一个对象。两个变量引用同一个对象，改变其中一个会影响另一个。
参考图 4-2

from 高频考题
这种设计的原因是：按值传递的类型，复制一份存入栈内存，这类类型一般不占用太多内存，而且按值传递保证了其访问速度。
按共享传递的类型，是复制其引用，而不是整个复制其值，保证过大的对象等不会因为不停复制内容而造成内存的浪费。
*/

// 简单值/基本类型值 scalar primitive 
// 通过【值复制】的方式来赋值/传递
let e = 2,
    g = e; // g 是 e 的值的一个复本
g++; // 递增操作符修改 g 的值
console.log(e, g); // 两者的值互不影响

// 复合值 compound value
// 通过【引用复制】的方式来赋值/传递
let arr1 = [1, 2, 3],
    arr2 = arr1; // arr2 是 [1, 2, 3] 的一个引用
// 两者指向同一个值 (并非持有)，所以也会更改同一个值，随后都指向更改后的新值。
arr2.push(4);
console.log(arr1, arr2);

// 由于引用指向的是值本身，而不是变量，因此一个引用无法更改另一个引用的指向 (这就是与指针的区别)。
arr2 = [4, 5, 6]; // 更改引用，不影响 arr1
console.log(arr1, arr2);
console.log('');

// 另一个复合值的例子
var obj1 = new Object();
var obj2 = obj1;
obj1.name = 'rabbit';
obj2.age = 25;
console.log(obj1, obj2);
console.log('')

// 作为函数参数
let h = [1, 2, 3];
(function foo(x) {
    x.push(4);
    console.log(x);
    // 更改了 x 的引用
    x = [4, 5, 6];
    x.push(7);
    console.log(x);
})(h);
console.log(h);
// 向函数传递 h 时，是将引用 h 的一个复本赋值给 x，而 h 仍然指向 [1,2,3]。
// 在函数中可以通过引用 x 来更改数组的值。但 x 重新赋值不会影响 h 的指向。
// 只能更改 h 和 x 共同指向的值，不能通过引用 x 更改 h 的指向。
console.log('');


// 如果希望改变 j 的值，就要更改 x 原本指向的数组内容，而不是为它新赋值。
let j = [1, 2, 3];
(function foo1(x) {
    x.push(4);
    console.log(x);
    // 保持 x 的引用
    x.length = 0; // 清空数组
    x.push(4, 5, 6); // 更改了当前数组的值
    console.log(x);
})(j);
console.log(j);
console.log('');


// 如果希望通过【值复制】的方式来传递复合值，就需要为其创建一个复本，这样传递的就不是原始值。
// slice() 不带参数会返回当前数组的一个浅复本 (shallow copy) (复制得到的数组及其中的基本类型是独立的，数组中的引用类型仍和原来数组中对应的元素指向同一引用)
// 由于传递给函数的是指向该复本的引用，因此函数中的操作不会影响 m 指向的数组。
let m = [1, 2, 3];
(function foo2(x) {
    // x 和 m 不指向一个数组
    x.push(4, 5, 6);
    console.log(x);
    x.length = 0;
    x.push(4, 5, 6); 
    console.log(x);
})(m.slice());
console.log(m);
console.log('');


// 如果要将基本类型值传递到函数中并进行更改，就需要将该值封装到一个复合类型值中，然后通过【引用复制】的方式传递。
// obj 是一个封装了基本值 n 的封装对象。obj 引用的一个复本作为参数被传递到函数中，就可以通过 wrapper 访问对象并更改它的属性。
let obj = {
    n: 2
};
(function foo3(wrapper) {
    wrapper.n++;
})(obj);
console.log(obj.n);


// 未完