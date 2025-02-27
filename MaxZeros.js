// var moveZeroes = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       nums.push(nums[i]);
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums;
// };

// console.log(moveZeroes([0, 1, 0, 3, 12]));

// var moveZeroes = function (nums) {
//   let nonZeroIndex = 0;

//   // Move all non-zero elements to the front
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
//       nonZeroIndex++;
//     }
//   }
// };

var moveZeroes = function (nums) {
  let insertPos = 0;

  for (const num of nums) {
    if (num !== 0) {
      nums[insertPos] = num;
      insertPos++;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

var moveZeroes = function (nums) {
  let idex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idex] = nums[i]; // 1 3 12
      idex++;
    }
  }
  while (idex < nums.length) {
    nums[idex] = 0;
    idex++;
  }
};
