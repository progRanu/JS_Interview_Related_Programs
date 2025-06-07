function fibonacciSeries(n) {
    let fibonacciNumber;

    if (n === 0) {
        fibonacciNumber = [0];
    } else if (n === 1) {
        fibonacciNumber = [0, 1];
    } else if (n === 2) {
        fibonacciNumber = [0, 1, 1];
    } else {
        fibonacciNumber = [0, 1];
        for (let index = 2; index <= n; index++) {
            fibonacciNumber[index] = fibonacciNumber[index - 1] + fibonacciNumber[index - 2];
        }
    }

    console.log(fibonacciNumber);
}
fibonacciSeries(9);
