var sortArrayByParity = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    if (nums[right] % 2 === 0 && nums[left] % 2 !== 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      right--;
      left++;
    } else {
      if (nums[left] % 2 === 0) left++; // left is even, move ahead
      if (nums[right] % 2 !== 0) right--; // right is odd, move back
    }
  }

  return nums;
};

console.log(sortArrayByParity([1, 0, 3]));
