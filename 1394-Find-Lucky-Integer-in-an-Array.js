//Solution using Map

var findLucky = function (arr) {
  let newMap = new Map();
  let result = -1;
  for (let num of arr) {
    newMap.set(num, (newMap.get(num) || 0) + 1);
  }

  for (let [key, val] of newMap) {
    if (key === val) {
      result = Math.max(result, key);
    }
  }

  return result;
};

//Solution using object slightly more optimized in terms of time and space complexity through both have the same time and space complexity

var findLucky = function (arr) {
  const newObj = new Object();
  let result = -1;

  for (let num of arr) {
    if (!(num in newObj)) {
      newObj[num] = 1;
    } else {
      newObj[num] = newObj[num] + 1;
    }
  }

  for (let [key, val] of Object.entries(newObj)) {
    if (Number(key) === val) {
      result = Math.max(result, key);
    }
  }

  return result;
};

//Another one

var findLucky = function (arr) {
  const newObj = {};
  let result = -1;

  for (let num of arr) {
    newObj[num] = (newObj[num] || 0) + 1;
  }

  for (let [key, val] of Object.entries(newObj)) {
    const numKey = Number(key);
    if (numKey === val) {
      result = Math.max(result, numKey);
    }
  }

  return result;
};

// Another one

var findLucky = function (arr) {
  const newObj = {};
  let result = -1;

  for (let num of arr) {
    newObj[num] = num in newObj ? newObj[num] + 1 : 1;
  }

  for (let [key, val] of Object.entries(newObj)) {
    const numKey = Number(key);
    if (numKey === val) {
      result = Math.max(result, numKey);
    }
  }

  return result;
};

console.log(findLucky([4, 3, 2, 2, 4, 1, 3, 4, 3]));
