// Figure out how to find if a number is power of 2 without any loop.

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0
}

console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(8))

// WAF to reverse an Integer n.

let num = 251;
let ans = 0;

while (num > 0) {
    let remainder = Math.floor(num % 10)
    num = Math.floor(num / 10)
    ans = ans * 10 + remainder

}
console.log(ans, 'reverse Number')