var containsDuplicate = function (nums) {
  const newMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    newMap.set(nums[i], (newMap.get(nums[i]) || 0) + 1);
  }

  for (let val of newMap.values()) {
    if (val > 1) {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
