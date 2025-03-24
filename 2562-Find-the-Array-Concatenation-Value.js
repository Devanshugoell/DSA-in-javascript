//Brute force approach using shift because it takes O(n) time

var findTheArrayConcVal = function (nums) {
  let finalNum = 0;

  while (nums.length) {
    if (nums.length === 1) {
      finalNum += nums.shift();
    } else {
      let newNum = `${nums.shift()}${nums.pop()}`;
      finalNum += Number(newNum);
    }
  }

  return finalNum;
};

//Optimized version using two pointer approach

var findTheArrayConcVal = function (nums) {
  let finalNum = 0,
    first = 0,
    last = nums.length - 1;

  while (first <= last) {
    if (first === last) {
      finalNum += nums[first];
    } else {
      let newNum = `${nums[first]}${nums[last]}`;
      finalNum += Number(newNum);
    }
    first++, last--;
  }

  return Number(finalNum);
};

console.log(findTheArrayConcVal([5, 14, 13, 8, 12])); //Output : 596
