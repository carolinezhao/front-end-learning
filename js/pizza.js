var orderCount = 0; //全局变量

function takeOrder(topping, crustType) {
  orderCount = orderCount + 1;
  console.log("Order: " + crustType + " crust pizza topped with " + topping);
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function getTax() {
  return getSubTotal(orderCount) * 0.06; //这里要使用实参。错误使用形参，则会出现error未定义。
}

function getTotal() {
  return getTax() + getSubTotal(orderCount); //这里要使用实参。错误使用形参，则会出现error未定义。
}

takeOrder("bacon", "thin");
console.log(orderCount);
takeOrder("beef", "thick");
console.log(orderCount);
takeOrder("fruit", "thin");
console.log(orderCount);

console.log(getSubTotal(orderCount));
console.log(getTotal());