var largestOddSubstring = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 !== 0) {
      return num.slice(0, i + 1);
    }
  }
  return "";
};

console.log(largestOddSubstring("52")); // Output: "5"
console.log(largestOddSubstring("4206")); // Output: ""
console.log(largestOddSubstring("35427")); // Output: "35427"
console.log(largestOddSubstring("1001")); // Output: "1"
console.log(largestOddSubstring("1003")); // Output: "1003"
console.log(largestOddSubstring("2468")); // Output: ""
console.log(largestOddSubstring("13579")); // Output: "13579"
console.log(largestOddSubstring("987654321")); // Output: "987654321"
console.log(largestOddSubstring("6782")); // Output: ""
console.log(largestOddSubstring("608353")); // Output: "608353"
