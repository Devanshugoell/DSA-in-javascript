//Brute force approach without using prefix sum

var pivotIndex = function (nums) {
  let leftSum = 0,
    rightSum = 0,
    pivotIdx = 0;

  function findIdx() {
    leftSum = 0;
    rightSum = 0;

    for (let i = 0; i < pivotIdx; i++) {
      leftSum += nums[i];
    }

    for (let i = pivotIdx + 1; i < nums.length; i++) {
      rightSum += nums[i];
    }
  }
  while (pivotIdx < nums.length) {
    findIdx();

    if (leftSum === rightSum) {
      return pivotIdx;
    } else {
      pivotIdx++;
    }
  }

  return -1;
};

//optimized approach by using prefix sum

var pivotIndex = function (nums) {
  let totalSum = 0;
  let leftSum = 0;

  // Step 1: Calculate total sum of array
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  // Step 2: Iterate and check pivot condition
  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i]; // Derive right sum

    if (leftSum === rightSum) {
      return i; // Found pivot index
    }

    leftSum += nums[i]; // Update left sum
  }

  return -1; // No pivot index found
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
