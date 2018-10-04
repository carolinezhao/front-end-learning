# ul, li, a

--> _menu.html_

默认属性

- 最外层 ul {margin: 20px, 0; padding-left: 40px;}
- ul, li {display: block;}

去掉装饰

- a {text-decoration: none;}
- ul,li {list-style: none;}
    - ul-li 结构，只写 ul 或 li 都可以
    - li 结构，必须写 li

列表内容横排 (ul-li, 单独li)

- li {display: inline-block;}
    - 仅设置 li 有效，对 ul 设置无效
    - 横排后默认底部对齐
    - 横排后自动去掉装饰

height 和 line-height

- ul
    - height 过小不会导致内容重叠
    - line-height 过小会导致内容重叠
- li
    - height 或 line-height 过小都会导致内容重叠