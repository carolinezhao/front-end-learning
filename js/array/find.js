// 场景：在数组中返回第一个满足条件的元素。

// forEach 遇到 return 不停止遍历。
// some 返回的是 boolean，且不应该影响外层变量。

// find 返回第一个满足条件的元素，如果都不满足则返回 undefined。
// 基本用法见 es6-array

const people = [{
  job: 'frontend',
  type: 'intern'
}, {
  job: 'backend',
  type: 'fulltime'
}, {
  job: 'designer',
  type: 'fulltime'
}]
const validPerson = people.find(item => {
  const { type } = item
  return type === 'fulltime'
})
console.log(validPerson);