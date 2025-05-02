var uniqueOccurrences = function (arr) {
  const newMap = new Map();
  const newSet = new Set();

  for (let num of arr) {
    newMap.set(num, (newMap.get(num) || 0) + 1);
  }

  for (let [key, val] of newMap) {
    if (newSet.has(val)) {
      return false;
    } else {
      newSet.add(val);
    }
  }

  return true;
};

console.log(uniqueOccurrences([1, 2]));
