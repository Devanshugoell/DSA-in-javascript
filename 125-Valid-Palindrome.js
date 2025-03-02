// first it convert it into a simple string and check if newStr = "" then it will directly return true and we will get out of this function then we set the value of left and right and we are using two pointer approach here. and check if the string is Palindrome or not?

var isPalindrome = function (s) {
  const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (newStr === "") return true;
  var left = 0,
    right = newStr.length - 1;

  while (left < right) {
    if (newStr[left] === newStr[right]) {
      left++, right--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
