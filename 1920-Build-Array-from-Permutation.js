var buildArray = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[nums[i]]);
  }

  return arr;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
