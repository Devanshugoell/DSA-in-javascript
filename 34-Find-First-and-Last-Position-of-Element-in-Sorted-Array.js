var searchRange = function (nums, target) {
  let first = -1,
    last = -1;

  // Binary search for first occurrence
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      first = mid; // Store the position
      right = mid - 1; // Continue searching on the left side
    }
  }

  // Binary search for last occurrence
  (left = 0), (right = nums.length - 1);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      last = mid; // Store the position
      left = mid + 1; // Continue searching on the right side
    }
  }

  return [first, last];
};

var searchRange = function (nums, target) {
  let result = [-1, -1];

  // Find leftmost index
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1; // Even if nums[mid] === target, move left
    }
  }
  // Check if target is found
  if (nums[left] !== target) return result;
  result[0] = left;

  // Find rightmost index
  right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1; // Even if nums[mid] === target, move right
    }
  }
  result[1] = right;

  return result;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
