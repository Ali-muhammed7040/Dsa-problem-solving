//Patterns Print number 1 to 4 in a row

let rows = 4;

for (let index = 0; index <= rows - 1; index++) {
  for (let j = 1; j <= 4; j++) {
    console.log(j);
  }
}

//Patterns Print number A,B,C,D in a row

let alphabetRows = 4;

for (let i = 0; i < alphabetRows; i++) {
  let char = "A";
  for (let j = 0; j < alphabetRows; j++) {
    console.log(char);
    char = String.fromCharCode(char.charCodeAt(0) + 1);
  }
}

//Patterns Print number 1 to 3 in a row 4 to 6 in a row and 7 to 9 in a row

let numRows = 3;
let num = 1;

for (let i = 0; i < numRows; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(num);
    num++;
  }
}

// Triangle Patterns using *
let starRows = 5;
let stars = 1;
let space = starRows - 1;

for (let i = 1; i <= starRows; i++) {
  for (let j = 1; j <= space; j++) {
    console.log(" ");
  }
  for (let j = 1; j <= stars; j++) {
    console.log("*");
  }
  console.log("\n");
  stars += 1;
  space--;
}

// Right-Angled Triangle Pattern

let rightAngleRows = 5;

for (let i = 0; i < rightAngleRows; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}

console.log("\n");

// Inverted Right-Angled Triangle Pattern

let leftAngleRows = 5;

for (let i = leftAngleRows; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}
