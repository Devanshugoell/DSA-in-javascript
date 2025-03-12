//Brute force approach

var moveZeroes = function (nums) {
  let lastNonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[lastNonZeroIndex]] = [nums[lastNonZeroIndex], nums[i]];
      lastNonZeroIndex++;
    }
  }
  return nums;
};

//optimized approach

var moveZeroes = function (nums) {
  let leftCursor = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      nums[leftCursor++] = nums[index];
    }
  }
  for (let index = leftCursor; index < nums.length; index++) {
    nums[index] = 0;
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
