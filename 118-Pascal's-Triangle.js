//Give R and C, feel the element at the place.
// R = 5 , C = 3 and ans = 6

var getElementAt = function (R, C) {
  let n = R - 1;
  let r = C - 1;
  let result = 1;
  for (let i = 0; i < r; i++) {
    result = result * (n - i);
    result = result / (i + 1);
  }
  return result;
};

//Time complexity : O(r)
//Space complexity : O(1)

//Print any nth row of pascal triangle
// N = 5

var generate = function () {};

//Given N , print the entire triangle

var generate = function (numRows) {
  function generateRow(row) {
    let ans = 1;
    const ansRow = [1];

    for (let col = 1; col < row; col++) {
      ans = (ans * (row - col)) / col;
      ansRow.push(ans);
    }

    return ansRow;
  }

  const ans = [];
  for (let i = 1; i <= numRows; i++) {
    ans.push(generateRow(i));
  }

  return ans;
};

console.log(generate(5));
