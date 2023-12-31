function terminal_clock() {
    let date = new Date;
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    console.log(hours + ":" + minute + ":" + second);
    setTimeout(terminal_clock, 1000);
}

terminal_clock();