
//Find max in this array

const numbers = [3, 7, 1, 15, 9, 21, 8, 6];

let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]
    }

}
console.log(max, 'is the maximum number')


// Find second max in the array

const maxArray = [12, 45, 7, 98, 23, 56, 88, 34];

let max_1 = maxArray[0];
let max_2 = maxArray[1];

for (let i = 2; i < maxArray.length; i++) {

    if (maxArray[i] > max_1) {
        max_2 = max_1
        max_1 = maxArray[i]
    } else if (maxArray[i] > max_2) {
        max_2 = maxArray[i]
    }
}

console.log(max_1, 'is the maximum value')
console.log(max_2, 'is the second maximum value')


// For the array [1, 3, 4, 5, 7, 9, 10] and a target sum of 12:

// First Solution

let arr1 = [1, 3, 4, 5, 7, 9, 10]

for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr1.length; j++) {
        if (arr1[i] + arr1[j] === 12) {
            console.log(`Sum of ${arr1[i]}, ${arr1[j]} = 12`)
        }

    }

}

// Optimize Solution
// two pointer method

let arr2 = [1, 3, 4, 5, 7, 9, 12]

let left = 0
let right = arr2.length - 1
let total = 11

while (left < right) {
    let currentSum = arr2[left] + arr2[right]
    if (currentSum === total) {
        console.log(`sum of ${arr2[left]} , ${arr2[right]} = ${total}`)
        break;
    } else if (currentSum < total) {
        left++;
    } else {
        right--;
    }
}