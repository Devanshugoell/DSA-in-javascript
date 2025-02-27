//[3,2,3]
//[2,2,1,1,1,2,2]

var majorityElement = function (nums) {
  let results = nums[0];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) results = nums[i];

    if (nums[i] === results) {
      count++;
    } else {
      count--;
    }
  }
  return results;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
