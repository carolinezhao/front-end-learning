function useDocWrite(text) {
    var str = '<p>';
    str += text;
    str += '</p>';
    // 这么写和直接定义三者相加有什么区别？
    document.write(str);
}
// 写了此语句后，页面只显示 [object Event]，无法显示 <script> 中的内容，why？？
// window.onload = useDocWrite;