var isPalindrome = function (x) {
  let toString = x.toString();
  let left = 0,
    right = toString.length - 1;

  while (left < right) {
    if (toString[left] === toString[right]) {
      left++, right--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(-121));
