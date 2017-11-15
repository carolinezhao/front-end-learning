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
在纯文本中，既可以表示js对象，也可以表示json字符串，因为文本中不需要加引号。js文件中引号用于明确区分。

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



JSON 文件的文件类型是 ".json"
JSON 文本的 MIME 类型是 "application/json"

把 JSON 文本转换为 JavaScript 对象
JSON 最常见的用法之一，是从 web 服务器上读取 JSON 数据（作为文件或作为 HttpRequest），将 JSON 数据转换为 JavaScript 对象，然后在网页中使用该数据。


json 是字符串，js 对象
用引号区分（非文本环境下）
