// Hollow Square Pattern
// *****
// *   *
// *   *
// *   *
// *****

let hollowRows = 5;

for (let i = 0; i < hollowRows; i++) {
  let row = "";
  for (let j = 0; j < hollowRows; j++) {
    if (i === 0 || i === hollowRows - 1 || j === 0 || j === hollowRows - 1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

// nested loops Diamond Pattern

//      *
//     ***
//    *****
//   *******
//  *********
//   *******
//    *****
//     ***
//      *

let diamondRows = 5;

for (let i = 0; i < diamondRows; i++) {
  let row = "";
  for (let j = 0; j < diamondRows - i; j++) {
    row += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    row += "*";
  }
  console.log(row);
}

for (let t = diamondRows - 1; t >= 1; t--) {
  let row = "";
  for (let l = 1; l <= diamondRows - t; l++) {
    row += " ";
  }
  for (let p = 1; p <= 2 * t - 1; p++) {
    row += "*";
  }
  console.log(row);
}
//Nested Loops Number Pyramid Pattern
let numPyramidRows = 5;
for (let f = 0; f < numPyramidRows - 1; f++) {
  let row = "";
  for (let k = 0; k < numPyramidRows - f; k++) {
    row += " ";
  }
  for (let j = 0; j < 2 * f - 1; j++) {
    row += f;
  }
  console.log(row);
}

// nested loops Hollow Pyramid Pattern

let hollowPyramidRows = 5;

for (let i = 0; i < hollowPyramidRows; i++) {
  let row = "";
  for (let k = 0; k < hollowPyramidRows - i; k++) {
    row += " ";
  }
  for (let g = 0; g < 2 * i - 1; g++) {
    if (g === 0 || i === hollowPyramidRows - 1 || g === 2 * i - 2) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

// nested loops butterfly pattern
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  for (let k = 1; k <= 2 * (n - i); k++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

for (let i = n - 1; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  for (let k = 1; k <= 2 * (n - i); k++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
