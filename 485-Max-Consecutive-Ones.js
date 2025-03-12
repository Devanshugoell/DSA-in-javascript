var findMaxConsecutiveOnes = function (nums) {
  let firstCount = 0,
    secondCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      firstCount++;
    } else {
      secondCount = secondCount > firstCount ? secondCount : firstCount;
      firstCount = 0;
    }
  }
  return secondCount > firstCount ? secondCount : firstCount;
};

var findMaxConsecutiveOnes = function (nums) {
  let maxOnes = -Infinity;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else if (nums[i] === 0) {
      count = 0;
    }
    maxOnes = Math.max(maxOnes, count);
  }

  return maxOnes;
};

///Both are optimized

console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 1, 0, 1, 1]));
