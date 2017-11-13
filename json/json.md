JSON：JavaScript 对象表示法（JavaScript Object Notation）

JSON 语法是 JavaScript 对象表示法语法的子集。

* 数据在名称/值对中，数据由逗号分隔
"firstName" : "John"
等价于这条 JavaScript 语句：firstName = "John"

* 花括号保存对象，对象可以包含多个名称/值对。
 { "firstName":"John" , "lastName":"Doe" }
 
* 方括号保存数组，数组可包含多个对象。
{
"employees": [
{ "firstName":"John" , "lastName":"Doe" },
{ "firstName":"Anna" , "lastName":"Smith" },
{ "firstName":"Peter" , "lastName":"Jones" }
]
}

* 创建一个对象数组，并进行赋值
var employees = [
{ "firstName":"Bill" , "lastName":"Gates" },
{ "firstName":"George" , "lastName":"Bush" },
{ "firstName":"Thomas" , "lastName": "Carter" }
];

* 访问 JavaScript 对象数组中的第一项
employees[0].lastName;
返回 Gates

* 修改数据
employees[0].lastName = "Jobs";


