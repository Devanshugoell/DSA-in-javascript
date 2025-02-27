function removeDuplicates(nums) {
  let i = 0; // Slow pointer

  for (let j = 1; j < nums.length; j++) {
    // Fast pointer
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1; // Number of unique elements
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
