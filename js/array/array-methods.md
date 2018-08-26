# 数组方法

## 字符串与数组互转

字符串 -> 数组
- 'string'.split('')
- [...'string']
- Array.from('string')

数组 -> 字符串
- array.join('') (调用每一项的 toString())
- array.toString()

## 数组方法之直接改变原数组
> [] 是对原数组的影响，() 中是返回值。

操作方法
- splice [增/删/改] (被删除元素组成的 array)
- fill [改]
- copyWithin [改]

栈/队列方法
- push [增] (length)
- pop [删] (item)
- unshift [增] (length)
- shift [删] (item)

重排序方法
- reverse [改]
- sort [改]

## 数组方法之不直接改变原数组
> () 中是返回值。

操作方法
- concat (新 array, length 不变或变大)
- slice (新 array, length 不变或变小)

迭代方法
- every (boolean)
- some (boolean)
- filter (新 array, length 不变或变小)
- map (新 array, length 不变)
- forEach

归并方法
- reduce (计算值)
- reduceRight (计算值)

位置方法
- indexOf (index)
- lastIndexOf (index)
- find (item)
- findIndex (index)
- includes (boolean)