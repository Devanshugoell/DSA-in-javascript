//Brute Force Approach

// var setZeroes = function (matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === 0) {
//         markRow(i, matrix);
//         markCol(j, matrix);
//       }
//     }
//   }

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === -1) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
// };

// function markRow(i, matrix) {
//   for (let j = 0; j < matrix[0].length; j++) {
//     if (matrix[i][j] !== 0) {
//       matrix[i][j] = -1;
//     }
//   }
// }

// function markCol(j, matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     if (matrix[i][j] !== 0) {
//       matrix[i][j] = -1;
//     }
//   }
// }

//Better Approach

var setZeroes = function (matrix) {
  const row = new Array(matrix.length).fill(0);
  const col = new Array(matrix[0].length).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1;
        col[i] = 1;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
