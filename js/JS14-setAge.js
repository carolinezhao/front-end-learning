var setAge = function(newAge) {
	console.log('this refer to', this);
	this.age = newAge;
	return "rv";
}
var setAgeNoRV = function(newAge) {
	console.log('this refer to', this);	
	this.age = newAge;
}

var bob = {};
bob.age = 18;
bob.setAge = setAge;

var bear = {};
bear.age = 27;
bear.setAge = setAge;
bear.setAgeNoRV = setAgeNoRV;

bob.setAge(16);//bob.setAge equal to setAge, which has one argument. should call bob.setAge according to setAge defination.
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
