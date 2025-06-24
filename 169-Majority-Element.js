//Time Complexity - O(n)
//Space Complexity - O(n)

var majorityElement = function (nums) {
  let newMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    newMap.set(nums[i], (newMap.get(nums[i]) || 0) + 1);
  }

  let majorityElement = -1;

  for (let [key, val] of newMap) {
    if (val > nums.length / 2) {
      majorityElement = key;
      break;
    }
  }

  return majorityElement;
};

//Time Complexity - O(n)
//Space Complexity - O(1)  (Boyer-Moore algorithm )

var majorityElement = function (nums) {
  let result = nums[0];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) result = nums[i];

    if (nums[i] === result) {
      count++;
    } else {
      count--;
    }
  }

  return result;
};
