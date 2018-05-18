// 使用 import 关键字将其他模块的功能导入
// import {identifier1, identifier2} from "./example.js";
// {从给定模块导入的绑定} 只可读不可改
// from "从哪个模块导入"

// 目前 Node.js 不支持
// Chrome 支持，设置见 html

import { birthday, sum, Rectangle } from "./export.js";

console.log(birthday);

console.log(sum(2, 6));

let rec = new Rectangle(12, 20);
console.log(rec.width);