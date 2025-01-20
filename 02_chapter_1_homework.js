// a. Calculate "Simple Interest" from Principal (P), Rate (R) & Time (T).
// SI = (P * R * T) /100

let P = 1000;
let R = 5;
let T = 2;

let SI = (P * R * T) / 100;

console.log(`Simple Interest is ${SI}`);

// b. Calculate Max of 2 numbers. if a = 10 ,b = 20, then output should be 20.

let a = 10;
let b = 20;

function max(a, b) {
  if (a > b) {
    return a;
  }
  if (a === b) {
    return "Both numbers are equal";
  } else {
    return b;
  }
}

console.log(`Max number is ${max(a, b)}`);

// c. Calculate Factorial of a number N.

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(`Factorial of ${n} is ${fact}`);
  return fact;
}

console.log(factorial(5));

// d. Given a person's age, find if they should get a driving license or not.

let age = 12;

function drivingLicense(age) {
  if (age >= 18) {
    return "You are eligible for driving license";
  } else {
    return "You are not eligible for driving license";
  }
}

console.log(drivingLicense(age));
