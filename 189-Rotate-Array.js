// First we have an edge case that if k is greater than number of elements in the array then we ensure that k is in the bounds and first we reverse the whole array . Suppose we have array = [1,2,3,4,5,6,7] and if we reverse the array = [7,6,5,4,3,2,1] then we reverse the array upto k-1th element then our array will become [5,6,7,4,3,2,1] then we reverse the remaining array [5,6,7,1,2,3,4] which is our desired result.

var rotate = function (nums, k) {
  if (k > nums.length) {
    k %= nums.length;
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
};

const reverse = (nums, left, right) => {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++, right--;
  }
};

console.log(rotate([-1, -100, 3, 99], 2));
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 10));
