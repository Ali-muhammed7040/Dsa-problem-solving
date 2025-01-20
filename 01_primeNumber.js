// Find the number is prime or not

const n = 45;

function isPrime(n) {
  if (n === 0) return false;
  if (n === 1) return false;
  if (n === 2) return false;
  if (n % 2 === 0) return false;

  for (let i = 3; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

if (isPrime(n)) {
  console.log(`${n} is a prime number`);
} else {
  console.log(`${n} is not a prime number`);
}

// Find the number is prime or not

let num = 45;
let isPrime = true;

for (let i = 2; i <= num - 1; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
