// https://github.com/forrany/Web-Project/blob/master/%E4%BA%8C%E3%80%81JavaScript%E6%8E%92%E5%9D%91%E6%8C%87%E5%8D%97(%E4%BA%8C).md
// https://github.com/forrany/Web-Project/blob/master/%E5%9B%9B%E3%80%81JavaScript%E6%8E%92%E5%9D%91%E6%8C%87%E5%8D%97(%E4%B8%89).md

console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);

/* 知识点
一元操作符 (+ 或 -，注意只操作一个值) 
相当于 Number()，得到相应数字或者 NaN。

加性操作符
加法：只要其中一个值是 string，就会对另一个值调用 toString()。相当于字符串拼接。
减法：如果有非数值，则先调用 Number()。
*/ 


console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

/* 知识点
从左到右运算
第一行：true < 3 --> 1 < 3 --> true
第二行：true > 1 --> 1 > 1 --> false
*/