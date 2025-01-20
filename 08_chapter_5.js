//decimal to binary number


function decimalToBinary(decimalNum) {
    let ans = 0, pow = 1;

    while (decimalNum > 0) {
        let remainder = Math.floor(decimalNum % 2)
        decimalNum = Math.floor(decimalNum / 2)
        ans = ans + pow * (remainder)
        pow = Math.floor(pow * 10)

    }

    return ans
}

let decimalNum = 50;
console.log(decimalToBinary(decimalNum))

//bitwise and

let a = 4, b = 8

console.log((a & b), 'lala')