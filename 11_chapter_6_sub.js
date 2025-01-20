// find Max subArray from the given array and sub-array length should be 4

const arr = [3, 8, 2, 5, 7, 6, 12];

let subLength = 3;
let max = 0

for (let i = 0; i <= arr.length - subLength; i++) {

    let current = 0;
    for (let j = i; j < i + subLength; j++) {
        current += arr[j]
    }
    if (current > max) {
        max = current
    }

}
console.log(max, 'max result linear')

// find Max subArray from the given array and sub-array length should be 4
// Sliding window optimize solution

const array = [3, 8, 2, 5, 7, 6, 12];

let subLength_2 = 3;
let max_2 = 0

for (let i = 0; i < subLength_2; i++) {
    max_2 += array[i]
}
console.log(max_2, 'max_2')
let current = max_2;

for (let i = 1; i <= array.length - subLength_2; i++) {

    current = current - array[i - 1] + array[subLength_2 + i - 1]
    console.log(current, 'current')
    if (current > max_2) {
        max_2 = current
    }

}

console.log(max_2, 'max Sliding window')