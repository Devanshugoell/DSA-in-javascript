//1st approach (Unoptimized / Using array for the value but easy to understand)

var areOccurrencesEqual = function (s) {
  let newMap = new Map();
  let count = 0;

  const newArr = [];

  for (let i = 0; i < s.length; i++) {
    newMap.set(s[i], (newMap.get(s[i]) || 0) + 1);
  }

  for (let [key, val] of newMap) {
    newArr.push(val);
  }
  let newNum = newArr[0];
  let i = 0;
  while (i < newArr.length) {
    if (newArr[i] === newNum) {
      i++;
    } else {
      return false;
    }
  }

  return true;
};

//Second optimal approach using map to check the values

var areOccurrencesEqual = function (s) {
  let newMap = new Map();

  for (let i = 0; i < s.length; i++) {
    newMap.set(s[i], (newMap.get(s[i]) || 0) + 1);
  }

  const targetedValues = null;
  for (let val of newMap.values()) {
    if (targetedValues === null) {
      targetedValues = val;
    } else if (targetedValues !== val) {
      return false;
    }
  }

  return true;
};

console.log(areOccurrencesEqual("abacbc"));
