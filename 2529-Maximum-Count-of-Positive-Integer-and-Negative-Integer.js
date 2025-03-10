//Brute Force approach

var maximumCount = function (nums) {
  let positiveNum = 0,
    negativeNum = 0;
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    if (nums[left] < 0) {
      negativeNum++;
      left++;
    } else if (nums[right] > 0) {
      positiveNum++;
      right--;
    } else {
      right--;
    }
  }

  return positiveNum > negativeNum ? positiveNum : negativeNum;
};

//Optimized approach

var maximumCount = function (nums) {
  const findFirstPositive = () => {
    let left = 0,
      right = nums.length - 1,
      ans = nums.length;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > 0) {
        ans = mid; // Store the first positive index
        right = mid - 1; // Search in the left half
      } else {
        left = mid + 1;
      }
    }
    return ans;
  };

  const findLastNegative = () => {
    let left = 0,
      right = nums.length - 1,
      ans = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] < 0) {
        ans = mid; // Store the last negative index
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1;
      }
    }
    return ans + 1; // Convert index to count
  };

  let negCount = findLastNegative();
  let posCount = nums.length - findFirstPositive();

  return Math.max(negCount, posCount);
};

console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
