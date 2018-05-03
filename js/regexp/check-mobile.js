// 正则表达式 Regular Expression

// example-1
function checkPhone() {
    var phone = document.getElementById('phone').value;
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
        alert("手机号码有误，请重填");
        return false;
    }
}
// 中括号[]只能匹配其中一个，如果要匹配特定几组字符串的话，那就必须使用小括号()加或|。
// |在中括号里面也是一个字符，并不代表或。[3457]匹配3或者4或者5或者7，而(3457)只匹配3457，若要跟前面一样可以加或(3|4|5|7)。[34|57]匹配3或者4或者|或者5或者7，而(34|57)能匹配34或者57。

// ^1(3|4|5|7|8)\d{9}$
// 表示以1开头，第二位可能是3/4/5/7/8等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束。
// \d：任何ASCII数字，等价于[0-9]
// [...]：方括号内的任意字符
// {n, m}：匹配前一项至少n次，但不能超过m次
// {n, }：匹配前一项n次或者更多次
// {n}：匹配前一项n次

// example-2
var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
var phoneNum = '15507621999'; //手机号码
var flag = reg.test(phoneNum); //true
// 不验证第二位规则：
var reg = /^1[0-9]{10}$/;

// example-3
function checkMobile() {    
    var sMobile = document.mobileform.mobile.value     
    if (!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(sMobile))) {         
        alert("不是完整的11位手机号或者正确的手机号前七位");         
        document.mobileform.mobile.focus();         
        return false;         
    }
}
// \d{4,8} 这个\d跟[0-9]意思一样，都是0-9中间的数字。{4,8}表示匹配前面的最低4位数字最高8位数字。这里为什么不是直接的8呢，因为手机号码归属地查询的时候，根据前7位就可以知道具体的地址了，后面的4位没有影响的。

