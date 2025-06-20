// Brute Force Approach

//Time Complexity: O(2n) => O(n)
//Space Complexity: O(2n) => O(n)

var rearrangeArray = function (nums) {
  const positive = [];
  const negative = [];
  const newArr = [];

  for (let num of nums) {
    if (num > 0) positive.push(num);
    else negative.push(num);
  }

  for (let i = 0; i < positive.length; i++) {
    newArr.push(positive[i]);
    newArr.push(negative[i]);
  }

  return newArr;
};

//Optimal Approach

//Time Complexity: O(n)
//Space Complexity: O(n)

var rearrangeArray = function (nums) {
  let result = new Array(nums.length);
  let positive = 0,
    negative = 1;

  for (let num of nums) {
    if (num > 0) {
      result[positive] = num;
      positive += 2;
    } else {
      result[negative] = num;
      negative += 2;
    }
  }
  return result;
};

// More Optimal Approach

//Time Complexity: O(n)
//Space Complexity: O(n)

var rearrangeArray = function (nums) {
  let result = new Int32Array(nums.length);
  let positive = 0,
    negative = 1;

  for (let num of nums) {
    if (num > 0) {
      result[positive] = num;
      positive += 2;
    } else {
      result[negative] = num;
      negative += 2;
    }
  }
  return result;
};

// console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));

//Another related Question : You are given a 0-indexed integer array nums of even length consisting of an unequal number of positive and negative integers.

var rearrangeUnequalArray = function (nums) {
  const positive = [];
  const negative = [];
  const newArr = [];

  for (let num of nums) {
    if (num > 0) positive.push(num);
    else negative.push(num);
  }

  const maxLen = Math.max(positive.length, negative.length);

  for (let i = 0; i < maxLen; i++) {
    if (i < positive.length) {
      newArr.push(positive[i]);
    }

    if (i < negative.length) {
      newArr.push(negative[i]);
    }
  }

  return newArr;
};

console.log(rearrangeUnequalArray([-1, 2, 3, 4, -3, 1]));
