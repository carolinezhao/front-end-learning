// ================= Method =================
// We can think of properties as variables associated with an object. 
// Similarly, a method is just like a function associated with an object.
// We call a method like a function, but we use ObjectName.methodName().

// Methods serve several important purposes when it comes to objects.
// 1.They can be used to change object property values.
// 2.They can be used to make calculations based on object properties. 
//   Functions can only use parameters as an input, but methods can make calculations with object properties.

var rabbit = new Object();
rabbit.age = 25;
// method 1
rabbit.setAge = function (newAge) {
	rabbit.age = newAge;
};
// method 2
rabbit.getYearOfBirth = function () {
	return 2017 - rabbit.age;
}
// 调用method的方式和function类似
rabbit.setAge(25); //调用，改变第一个property的值，由于method没有返回值，打印结果将为undefined
console.log(rabbit.age); //返回新的值
console.log(rabbit.getYearOfBirth()); //调用并获得返回值
console.log('\n');

// ================= this 1: works for everyone =================
// The keyword "this" acts as a placeholder, and will refer to whichever object called that method when the method is actually used.
// 用this定义的method，可以被多个object调用。
// 不能直接调用setAge，因为其中的this指代不明。
var setAge = function (newAge) {
	console.log('this refer to', this);
	this.age = newAge; //如果调用这个method的object中有这个property，则覆盖其值；如果没有，则创建
	return "rv";
}
var setAgeNoRV = function (newAge) {
	console.log('this refer to', this);
	this.age = newAge;
}

var bob = {};
// bob.age = 18;
bob.setAge = setAge; //第一个setAge是property，第二个是上面定义的method。

var bear = {};
// bear.age = 27;
bear.setAge = setAge;
bear.setAgeNoRV = setAgeNoRV;

// 这里是调用，对于带有this的method，调用时必须指明object
bob.setAge(16); // 调用bob.setAge就相当于调用了setAge，调用格式需要遵循setAge的设定，即需要给一个argument。
// 调用bob.setAge时，bob就是setAge中this指代的object。
console.log(bob); // 调用过bob.setAge之后，bob中多了一个property age
console.log(bob.age, bear.age);
console.log(" ");
console.log(bob.setAge(20)); //this refer to key in object-bob
//console.log(setAge(20)); this refer to env
console.log(bob.age, bear.age);
console.log(" ");
console.log(bear.setAge(30));
console.log(bob.age, bear.age);
console.log(" ");
console.log(bear.setAgeNoRV(35));
console.log(bob.age, bear.age);
console.log('\n');

// ================= this 2 =================
// this is still a placeholder, but in this scenario, this can only ever refer to rectangle.
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// method
rectangle.setHeight = function (newHeight) {
	console.log('this refer to', this);	
	this.height = newHeight;
};
rectangle.setWidth = function (newWidth) {
	this.width = newWidth;
};
// 调用method
rectangle.setHeight(8);
rectangle.setWidth(10);
console.log(rectangle.height,rectangle.width);
