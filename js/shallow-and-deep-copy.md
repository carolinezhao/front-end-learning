# 浅拷贝 vs 深拷贝

区别

| 操作 | 对于原对象 | 对于原对象中的引用类型值 | 类型 |
| --- | --- | --- | --- |
| = 赋值 | 拷贝引用 (互相影响) | 拷贝引用 (互相影响) | 浅拷贝 |
| slice, concat, Object.assign | 拷贝实例 (不互相影响) | 拷贝引用 (互相影响) | 浅拷贝 |
| 无直接方法 | 拷贝实例 (不互相影响) | 拷贝实例 (不互相影响) | 深拷贝 |

## 浅拷贝 (shallow copy)

见 _object/02-know-object-copy.js_ 和 _shallow-copy.js_

## 深拷贝 (deep copy)

- JSON.stringify 和 JSON.parse
- 递归

库方法
- jQuery.extend()
- lodash 系列

## reference

- https://github.com/wengjq/Blog/issues/3
- https://juejin.im/entry/58df4c8b61ff4b006b131792
- https://segmentfault.com/a/1190000008637489