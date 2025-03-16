//Using Hashmaps

var firstMissingPositive = function (nums) {
  const newMap = new Map();

  // Step 1: Record occurrences of each number
  for (let i = 0; i < nums.length; i++) {
    newMap.set(nums[i], (newMap.get(nums[i]) || 0) + 1);
  }

  // Step 2: Find the first positive integer missing from the map
  for (let i = 1; i <= nums.length; i++) {
    if (!newMap.has(i)) {
      return i;
    }
  }

  // Step 3: If all positives from 1 to n are present, return n + 1
  return nums.length + 1;
};

// Set-based Solution:

var firstMissingPositive = function (nums) {
  const set = new Set(nums);
  let i = 1;
  while (set.has(i)) ++i;
  return i;
};

//Most Optimized version

var firstMissingPositive = function (nums) {
  const n = nums.length;

  // Step 1: Place each number in its correct position if possible
  for (let i = 0; i < n; i++) {
    // Keep swapping until nums[i] is in the correct position or out of range
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  // Step 2: Identify the first index where the number is not correct
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // Step 3: All positions are filled correctly → return n + 1
  return n + 1;
};

console.log(firstMissingPositive([3, 4, -1, 1]));
