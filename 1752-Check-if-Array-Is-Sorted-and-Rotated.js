function check(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let next = nums[(i + 1) % nums.length];
    if (nums[i] > next) {
      count++;
    }
  }
  return count <= 1;
}

console.log(check([3, 4, 5, 1, 2]));
