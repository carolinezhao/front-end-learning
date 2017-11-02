function useDocWrite(text) {
    var str = '<p>';
    str += text;
    str += '</p>';
    // 这么写和直接定义三者相加有什么区别？
    document.write(str);
}

// test 1
// 写了此语句后，页面只显示[object Event]，无法显示html内部<script>的内容，why？？
// 引用了此语句的<script>在前，当window.onload执行后，在后的内部<script>无法执行？但是js中定义的函数也无法执行？
// 所以有两个<script>时，不能用window.onload？
// window.onload = useDocWrite;

// test 2 出现两种结果
// 结果1: html中的内容均可正常显示，此函数结果不显示；
// 结果2: div和alert内容显示，点击确定后，页面只显示“test”。
// window.onload = function() {
//     document.write("test");
// }

// test 3
// 都可以正常显示，下面函数中的语句覆盖<script>中的innerHTML写入
// window.onload = function () {
//     var testdiv2 = document.getElementById("testdiv2");
//     testdiv2.innerHTML = "<h2>I inserted <em>this</em> content by external innerHTML.</h2>";
// }