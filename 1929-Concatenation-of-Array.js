//Pushing in the ans array and looping on nums which results in an O(n) loop running twice, making the time complexity O(2n) ≈ O(n)

var getConcatenation = function (nums) {
  let ans = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
    if (count === 0 && i === nums.length - 1) {
      (i = -1), count++;
    }
  }
  return ans;
};

//We can optimize it using array method by using built in methods like spread operator or concat.

var getConcatenation = function (nums) {
  const ans = [...nums, ...nums];
  return ans;
};

getConcatenation([1, 2, 3]);

//Concatination

var getConcatenation = function (nums) {
  return nums.concat(nums);
};

getConcatenation([1, 2, 3]); // Output: [1,2,3,1,2,3]
