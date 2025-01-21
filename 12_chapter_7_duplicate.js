// remove duplicates from the given sorted Array

// let array = [5, 5, 7, 8, 8, 9, 9]
let array = [5, 55, 7, 8, 55, 26, 9, 26]
let newArr = []
let seen = {}

for (let i = 0; i < array.length; i++) {
    const currentElement = array[i]

    if (!seen[currentElement]) {
        newArr.push(currentElement)
        seen[currentElement] = true
    }
}

console.log(newArr, 'newArr')


