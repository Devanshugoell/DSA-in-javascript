var firstUniqChar = function (s) {
  const newMap = new Map();

  for (let str of s) {
    newMap.set(str, (newMap.get(str) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (newMap.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));
