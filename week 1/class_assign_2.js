function sayHello() {
    console.timeEnd("my_timer");
    console.log("Hello!");
}

console.time("my_timer");
setTimeout(sayHello, 2000);