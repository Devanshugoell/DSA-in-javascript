//Brute force approach which has the time complexity of O(n * m)

var strStr = function (haystack, needle) {
  let count = 0;
  let initialValue = count;
  for (let i = 0; i < haystack.length; i++) {
    if (needle[count] === haystack[i]) {
      count++;
      if (count === needle.length) {
        return i - needle.length + 1;
      }
    } else {
      i = i - count; // move back to next char after where matching started
      count = 0;
    }
  }

  return -1;
};

//Optimized version KMP improves this to O(N + M) by avoiding unnecessary comparisons after a mismatch.

console.log(strStr("sabbutsad", "sad"));
