var singleNonDuplicate = function (nums) {
  let left = 0,
    right = nums.length - 1;

  // Edge case: if array has only one element, that's the answer
  if (nums.length === 1) return nums[0];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if mid is at the start and unique
    if (mid === 0 && nums[0] !== nums[1]) return nums[mid];
    // Check if mid is at the end and unique
    if (mid === nums.length - 1 && nums[mid] !== nums[mid - 1])
      return nums[mid];

    // Check if current element is the single element
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
      return nums[mid];
    }

    // If mid is at an even index
    else if (mid % 2 === 0) {
      // If mid matches with previous element, single element is on the left
      if (nums[mid] === nums[mid - 1]) {
        right = mid - 1;
      } else {
        // Otherwise it's on the right
        left = mid + 1;
      }
    }
    // If mid is at an odd index
    else {
      // If mid matches with previous element, single element is on the right
      if (nums[mid] === nums[mid - 1]) {
        left = mid + 1;
      } else {
        // Otherwise it's on the left
        right = mid - 1;
      }
    }
  }

  // If not found (though problem guarantees one exists)
  return -1;
};
