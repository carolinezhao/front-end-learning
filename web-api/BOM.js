// window 对象

// navigator 对象
// userAgent 浏览器信息 (都会包含 Mozilla)
let ua = navigator.userAgent;
console.log(navigator);
let isChrome = ua.indexOf('Chrome');
console.log(isChrome);

// location 对象
// 提供了与当前窗口加载的文档有关的信息，还提供了一些导航功能。
// 既是 window 对象的属性，也是 document 对象的属性。
// 将 URL 解析为独立片段。
console.log(location.href);
console.log(location.protocol);
console.log(location.pathname);
console.log(location.search);
console.log(location.hash);

// 查询字符串参数
(function getQueryStringArgs() {
    if (location.search.length > 0) {
        let qs = location.search.substring(1), // 去掉开头的问号
            items = qs.length ? qs.split("&") : [],
            args = {},
            group,
            name,
            value;
        items.forEach(item => {
            group = item.split("=");
            name = decodeURIComponent(group[0]);
            value = decodeURIComponent(group[1]);
            if (name.length) {
                args[name] = value;
            }
        });
        console.log(args);
    }
})();

// screen 对象
// 获取屏幕宽度/高度
console.log(screen.width, screen.height);

// history 对象