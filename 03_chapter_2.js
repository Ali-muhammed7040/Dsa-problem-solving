// check the character is lower case or upper case

let char = "a";

if (char >= "a" && char <= "z") {
  console.log("character is Lower Case", char);
} else {
  console.log("character is upperCase", char);
}
//print the sum of even numbers

let numbers = 10;

let sum = 0;
for (let i = 0; i < numbers; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("Sum of even numbers", sum);

// print sum of odd numbers

let n = 10;
let i = 0;
let sumOfOdd = 0;

while (i <= n) {
  if (i % 2 !== 0) {
    sumOfOdd += i;
  }
  i++;
}

console.log("Sum of odd numbers", sumOfOdd);

// Print Patterns using loops

let rows = 2;

for (let i = 1; i <= rows; i++) {
  //   console.log("*****");
  let stars = 2;
  for (let j = 1; j <= stars; j++) {
    console.log("*");
  }
}
