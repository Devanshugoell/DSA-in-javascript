// Both solutions have the same time complexity, but the one below uses O(1) space, while the one above uses O(n).

//Using hashmap to store key values then returning the key stored in the array which has value nums.length / 3

var majorityElement = function (nums) {
  const newMap = new Map();
  const newArray = [];

  for (let i = 0; i < nums.length; i++) {
    newMap.set(nums[i], (newMap.get(nums[i]) || 0) + 1);
  }

  for (let [key, val] of newMap) {
    if (val > nums.length / 3) {
      newArray.push(key);
    }
  }

  return newArray;
};

//Boyer-Moore Optimized Solution in terms of space complexity only

var majorityElement = function (nums) {
  let candidate1 = null,
    candidate2 = null;
  let count1 = 0,
    count2 = 0;

  for (let num of nums) {
    if (candidate1 === num) {
      count1++;
    } else if (candidate2 === num) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  // Verify counts
  count1 = 0;
  count2 = 0;
  for (let num of nums) {
    if (num === candidate1) count1++;
    else if (num === candidate2) count2++;
  }

  let result = [];
  if (count1 > Math.floor(nums.length / 3)) result.push(candidate1);
  if (count2 > Math.floor(nums.length / 3)) result.push(candidate2);

  return result;
};

console.log(majorityElement([1, 2]));
