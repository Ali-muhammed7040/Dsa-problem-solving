// WAF to print all prime numbers from 1 to N.

let n = 20;

function isPrime(n) {
    if (n == 1) return false
    if (n == 2) return false
    if (n % 2 == 0) return false
    let isPrime = true
    for (let i = 2; i <= n - 1; i++) {
        if (n % i === 0) {
            isPrime = false
        }

    }
    return isPrime
}

// console.log(isPrime(4))

for (let i = 3; i <= n; i++) {
    let isPrime = true
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false
            break
        }
    }
    if (isPrime) {
        console.log(i, 'prime numbers')
    }
}

// WAF to print nth Fibonacci.

function generateFibonacci(n) {
    let fibSeries = [0, 1]
    for (let i = 2; i <= n; i++) {

        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2]
        console.log(fibSeries)
    }
    return fibSeries
}

let series = generateFibonacci(5)

console.log(series, 'series')