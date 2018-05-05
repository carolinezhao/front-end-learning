// 2.5 值和引用

// js 中没有指针。
// js 引用指向的是值。如果一个值有多个引用，这些引用指向的都是同一个值，它们相互之间没有引用/指向关系。
let e = 2,
    g = e; // g 是 a 的值的一个复本。
g++;
console.log(e, g);

let earr = [1, 2, 3],
    garr = earr; // garr 是 [1, 2, 3] 的一个引用。
// 两者指向同一个值，所以更改了同一个值，随后都指向更改后的新值。
garr.push(4);
console.log(earr, garr);
// 由于引用指向的是值本身，而不是变量，因此一个引用无法更改另一个引用的指向。
garr = [4, 5, 6]; // 更改引用，不影响 earr。
console.log(earr, garr);
console.log('');


function foo(x) {
    x.push(4);
    console.log(x);

    x = [4, 5, 6];
    x.push(7);
    console.log(x);
}

let h = [1, 2, 3];
foo(h);
console.log(h);
// 向函数传递 h 时，是将引用 h 的一个复本赋值给 x，而 h 仍然指向 [1,2,3]。
// 在函数中可以通过引用 x 来更改数组的值。但 x 重新赋值不会影响 h 的指向。
// 只能更改 h 和 x 共同指向的值，不能通过引用 x 更改 h 的指向。
console.log('');


// 如果希望改变 j 的值，需要更改 x 指向的数组，而不是为它新赋值。
function foo1(x) {
    x.push(4);
    console.log(x);

    x.length = 0; // 清空数组
    x.push(4, 5, 6); // 更改了当前数组的值
    console.log(x);
}
let j = [1, 2, 3];
foo1(j);
console.log(j);


// 如果希望通过值复制的方式来传递复合值，就需要为其创建一个复本，这样传递的就不是原始值。

// 如果要将基本类型值传递到函数中并进行更改，就需要将该值封装到一个复合类型值中，然后通过引用复制的方式传递。