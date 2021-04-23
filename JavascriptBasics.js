var a = 'Prince';
let age = 25;
let color = 'red';
//console.log(a + ' ' + age);

console.log(a);
console.log(age);
console.log(a + ' ' + age);
console.log(2+2);
console.log(color);

const range = 6;
//range = 7;
console.log(range);

const numberofdays = 7;
console.log(numberofdays);

let s1 = 'hello world';
let num = 30;
let salary = 12.33;
let flag = true;
let isActive = false;
let price;
let model = null;
let wheels = undefined;

//dynamic typing
let d = 'Prince';
d = 30;
console.log(d);

//Objects
let user = {
    name: 'Tom',
    age: 30
};

console.log(user);

// 1. dot notation:
console.log(user.name);
console.log(user.age);
user.age = 35;
console.log(user.age);

console.log(user.name + ' ' + user.age);

//using bracket notation
user['name'] = 'Mary';
console.log(user.name);