var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      // Check distance
      if (i - map.get(nums[i]) <= k) {
        return true;
      }
    }
    // Update the latest index
    map.set(nums[i], i);
  }

  return false;
};

//Optimized version

var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;

    set.add(nums[i]);

    // Keep window size ≤ k
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
