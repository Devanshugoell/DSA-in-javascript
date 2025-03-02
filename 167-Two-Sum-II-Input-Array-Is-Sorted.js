//Brute Force solution using nested loops

var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
  return false;
};

//Since the array is sorted we can implement two pointer approach which solves the problem efficiently in O(n) time complexity using constant extra space O(1).
// If numbers[left] + numbers[right] < target, move left rightward (increase sum).
// If numbers[left] + numbers[right] > target, move right leftward (decrease sum).

var twoSum = function (numbers, target) {
  var left = 0,
    right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
};

console.log(twoSum([2, 7, 11, 15], 9));
