function counter(a) {
    if(a < 0) {
        return;
    }
    console.log("current count: " + a);
    setTimeout(counter, 1 * 1000, a-1)
}

counter(5);