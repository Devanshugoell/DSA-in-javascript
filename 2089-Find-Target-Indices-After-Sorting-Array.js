var targetIndices = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      ans.push(i);
    }
  }
  return ans;
};
