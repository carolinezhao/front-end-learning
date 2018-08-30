# 算法

## 时间复杂度 (time complexity)

时间复杂度：针对指定基本运算，计数算法所做运算次数。

基本运算：比较，加法，乘法，置指针，交换……
- 排序：元素之间的比较。
- 检索：被检索元素 x 与数组元素的比较。

输入规模：输入串编码长度 (如：数组元素多少，调度问题的任务个数，图的顶点数与边数等)

算法基本运算次数可表示为输入规模的函数。给定问题和基本运算就决定了一个算法类。

两种时间复杂度
- 最坏情况下的时间复杂度
- 平均情况下的时间复杂度

大O表示法：算法运行时间随操作数的增长趋势。如下为常见的五种 (由快到慢)：

| Big O | 描述 | 代表算法 |
| --- | --- | --- |
| O(logn) | 对数时间 | 二分查找 |
| O(n) | 线性时间 (linear time) | 简单查找 |
| O(n*logn) | | 快排 |
| O(n^2) | | 选择排序 |
| O(n!) | | 旅行商问题 |

判断时间复杂度的规则：
- 快排的核心是二分法 O(logn)，再算上递归部分的复杂度，因此为 O(n*logn)
- 如果有循环，一重是O(n)，两重是 O(n^2) (前提：前后两个循环都是 1 - tn，其中 t 为常量)

给了区间 [1, 1000]，猜某个给定值，需要猜几次？
- 用二分查找，最多需要检查 logn 个元素，相当于求 log1000。因为 2^10 = 1024，log1000 约等于 10，因此大概需要猜 10 次。

对数是幂运算的逆运算。
- 幂：2^5=32
- 对数：log32=5

## 排序算法

- 冒泡排序 bubble sort
    - 特点：每次比较都可能引发交换；都是相邻位置交换；最后的值先排好。

- 选择排序 selection sort
    - 特点：全部都比较一轮后才可能交换；每次都和最小的值交换位置；前边的值先排好。

- 插入排序 insertion sort

- 归并排序 merge sort

- 快速排序 quick sort
    - [Zakas 版本 (同书中)](https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/)
    - [js 各种版本](https://gist.github.com/ideawu/a114679bb8f0a94452d462ae14b7c977)
    - [函数式思想](http://learnyouahaskell.com/recursion#quick-sort)
    - [多种思路](https://www.zhihu.com/question/24361443)

- 堆排序 heap sort

## 搜索算法

- 顺序搜索
- 二分搜索

## 算法模式

- 递归
- 动态规划
- 贪心算法

## reference

- 《学习 JavaScript 数据结构与算法 (第2版)》
- 《算法图解》
- 算法设计与分析 @Coursera
- [高频面试题](https://juejin.im/book/5a8f9ddcf265da4e9f6fb959/section/5a8f9fcb6fb9a063417b3f9e)
- [排序算法的动画演示](http://jsdo.it/norahiko/oxIy/fullscreen)