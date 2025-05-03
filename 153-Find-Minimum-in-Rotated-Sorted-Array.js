var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      //Then we are in the left sorted portion
      left = mid + 1;
    } else {
      //Otherwise we are in the right sorted portion
      right = mid;
    }
  }

  return nums[left];
};
console.log(findMin([3, 4, 5, 1, 2])); //1
// console.log(findMin([4, 5, 6, 7, 0, 1, 2])); //0
// console.log(findMin([2, 3, 4, 5, 6, 7, 8, 9, 1])); //1
// console.log(findMin([1])); //1
// console.log(findMin([5, 1, 2, 3, 4])); //1
// console.log(findMin([2, 1])); //1
// console.log(findMin([11, 13, 15, 17])); //11
