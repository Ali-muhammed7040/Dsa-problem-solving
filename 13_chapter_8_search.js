//Linear Search

let numbers = [10, 20, 30, 40, 50, 60, 70];
let target = 40

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        console.log(`Target Value is ${target} at index ${i}`)
        break;
    }

}
// binary Search

let array = [10, 20, 30, 40, 50, 60, 70];
let target_2 = 60;

let begin = 0
let end = array.length
while (begin <= end) {
    let mid = Math.floor((begin + end) / 2)
    console.log(mid, 'mid')
    if (array[mid] === target_2) {
        console.log(`Found ${array[mid]} at index ${mid}`)
        break
    } else if (target_2 > array[mid]) {
        begin = mid + 1
    } else {
        end = mid - 1
    }
}