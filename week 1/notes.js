//  A good website to run your code is (https://replit.com/).
// Javascript is an interpretor languagle.
console.log("Hello World")

console.log("\n-------------------------\n");

// Javascript is loosely type or dynamic language.
// The below code will not work in strongly typed or static languagle like C++.
number = 5;
number = "hello";
console.log(number);

console.log("\n-------------------------\n");

// Javascript is a single threaded in nature. Whereas, languages like Java, GoLang are multithreaded in nature.
// That is why it is a bad language for scalable system, but there is a way to make it use are the cores of your machine.

// There are 3 ways to define variable in Javascript. These are let, var, and const.
// Now only let and const is used. const is not basically a variable but a constant.
let a = 1;
a = 2;
console.log(a);
const b = 1;
console.log(b)

console.log("\n-------------------------\n");

let firstName = "ishmeet";
let age = 20;
let isMarried = false;
console.log("My name is " + firstName + " and my age is " + age);

console.log("\n-------------------------\n");

if (isMarried == true) {
    console.log(firstName + " is married");
} else {
    console.log(firstName + " is not married");
}

console.log("\n-------------------------\n");

let sum = 0;
for (let i = 1; i <= 10; i ++) {
    sum += i;
}
console.log(sum);

console.log("\n-------------------------\n");

let arr = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < arr.length; i ++) {
    if((arr[i] % 2) == 0) {
        sum1 += arr[i];
    }
}
console.log(sum1);

console.log("\n-------------------------\n");

let user = {
    firstName: "ishmeet",
    gender: "male"
};
console.log(user["gender"] + " " + user.firstName);

let users = [
    {
        firstName: "abc",
        gender: "male"
    },
    {
        firstName: "def",
        gender: "female"
    }
]
console.log(users[1]["firstName"] + " " + users[1].gender);

function Sum(a, b) {
    return a + b;
}

console.log("\n-------------------------\n");

let value = Sum(2, 3);
console.log(value);


function Sum2(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

Sum2(1, 2, displayResultPassive);