var findMin = function (nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return nums[low];
};

console.log(findMin([3, 4, 5, 1, 2])); //1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); //0
console.log(findMin([2, 3, 4, 5, 6, 7, 8, 9, 1])); //1
console.log(findMin([1])); //1
console.log(findMin([5, 1, 2, 3, 4])); //1
console.log(findMin([2, 1])); //1
console.log(findMin([11, 13, 15, 17])); //11
