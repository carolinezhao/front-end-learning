// 使用 export 关键字将代码暴露给其他模块

// 目前 Node.js 不支持
// Chrome 支持，设置见 html

// 导出数据
export let name = 'caroline';
export const birthday = 9;

// 导出函数
export function sum(num1, num2) {
    return num1 + num2;
}

// 导出“类”
export class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

// 先定义函数
function multiply(num1, num2) {
    return num1 * num2;
}

// 再导出 (报错)
// export multiply;

// 这个函数是本模块私有的，不导出
function subtract(num1, num2) {
    return num1 - num2;
}