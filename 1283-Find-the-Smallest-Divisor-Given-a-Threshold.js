//Brute force approach which has the time complexity of O(maxNum * nums.length(n)) and space complexity is of O(1)

var smallestDivisor = function (nums, threshold) {
  let i;
  for (i = 1; i < Math.max(...nums); i++) {
    let sum = 0;

    for (let j = 0; j < nums.length; j++) {
      sum += Math.ceil(nums[j] / i);
    }

    if (sum <= threshold) break;
  }

  return i;
};

//Optimized version using binary search which has the time complexity of O(n × log(max(nums))) and space complexity of O(1)

var smallestDivisor = function (nums, threshold) {
  let left = 1,
    right = Math.max(...nums);
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;

    for (let j = 0; j < nums.length; j++) {
      sum += Math.ceil(nums[j] / mid);
    }

    if (sum <= threshold) {
      ans = mid; // ✅ mid is a valid candidate
      right = mid - 1; // try to find a smaller valid divisor
    } else {
      left = mid + 1; // mid too small, try a bigger one
    }
  }

  return ans;
};

console.log(smallestDivisor([1, 2, 5, 9], 6)); // 5
console.log(smallestDivisor([1000000], 1)); // ✅ Expected: 1000000
console.log(smallestDivisor([1, 2, 3], 3)); // ✅ Expected: 2
