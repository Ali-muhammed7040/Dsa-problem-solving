// Custom function to find the maximum value in a nested array
function findMax(arr) {
    let max = -Infinity; // Initialize max to the smallest possible value

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        // If the current element is an array, recursively find its max
        if (Array.isArray(current)) {
            const nestedMax = findMax(current);
            if (nestedMax > max) {
                max = nestedMax;
            }
        }
        // If the current element is a number, compare it with max
        else if (typeof current === 'number') {
            if (current > max) {
                max = current;
            }
        }
    }

    return max;
}

// Input array
const nestedArray = [2, [3, 1], 13, [[23, 31], 6]];

// Find the maximum value
const maxValue = findMax(nestedArray);

console.log(maxValue); // Output: 31