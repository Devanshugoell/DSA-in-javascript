var reverseVowels = function (s) {
  const newSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let arr = s.split("");
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (newSet.has(arr[left]) && newSet.has(arr[right])) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++, right--;
    } else if (newSet.has(arr[left]) && !newSet.has(arr[right])) {
      right--;
    } else {
      left++;
    }
  }

  return arr.join("");
};

console.log(reverseVowels("leetcode"));
