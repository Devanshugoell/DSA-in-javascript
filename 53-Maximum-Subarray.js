//Brute force approach

var maxSubArray = function (nums) {
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      maxSum = Math.max(maxSum, currentSum); // Correct comparison
    }
  }
  return maxSum;
};

//Kadane's Algoritham (optimized)

var maxSubArray = function (nums) {
  let maxSum = nums[0],
    sum = 0;

  for (let num of nums) {
    sum += num;
    maxSum = Math.max(maxSum, sum); // Update maxSum first
    if (sum < 0) sum = 0; // Then reset sum
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
