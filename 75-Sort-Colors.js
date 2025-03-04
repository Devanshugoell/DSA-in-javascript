// We use three pointers:

// low (boundary for 0s)
// mid (current element)
// high (boundary for 2s)
// Steps:

// Traverse the array using mid pointer:

// If nums[mid] == 0: Swap with low, move both low & mid forward.
// If nums[mid] == 1: Move mid forward.
// If nums[mid] == 2: Swap with high, move high backward.
// Repeat until mid crosses high.

// Time Complexity: O(n) (Single Pass)
// Space Complexity: O(1) (In-place Sorting)

function sortColors(nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // nums[mid] === 2
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));
