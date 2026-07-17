function fibonacci(n) {

    console.log(0);

    if (n === 0) return
    console.log(1);
    if (n === 1) return
    let a = 0, b = 1, c;

    for (let i = 2; i <= n; i++) {
        c = a + b;
        console.log(c);

        a = b;
        b = c;

    }
}

console.log(fibonacci(4));
