// typeof
// hasOwnProperty
// for/in loop

var info = {
    name: 'caroline',
    type: 'rabbit',
    age: 25,
    city: 'Beijing',
    skill: function () {
        console.log('front-end developer');
    }
};

console.log(typeof info);
console.log(typeof info.name); // 注意 info.property 得到的是 value
console.log(typeof 'caroline');
console.log(typeof info.age);
console.log(typeof info.skill);
console.log(typeof info.skill());
console.log('\n');

// lets us know if an object has a particular property.
console.log(info.hasOwnProperty('type'));
console.log(info.hasOwnProperty('gender'));

if (info.hasOwnProperty('gender')) {
    console.log(info.gender);
} else {
    info.gender = 'female';
    console.log(info.gender);    
}
console.log('\n');

// List all the Properties
// by assigning the property name to a variable, we can then use the variable name in bracket notation to get the property's value.
for (key in info) {
    console.log(key);
}
console.log('\n');
for (key in info) {
    console.log(info[key]);
}