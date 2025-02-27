function twoSum(nums, target) {
  const numToIndex = {}; // Use 'const' since we are modifying properties, not reassigning

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const complement = target - num;

    if (complement in numToIndex) {
      return [numToIndex[complement], index];
    }

    numToIndex[num] = index;
  }
}

console.log(twoSum([3, 2, 3], 6));
