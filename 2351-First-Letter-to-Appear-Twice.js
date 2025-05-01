var repeatedCharacter = function (s) {
  let newMap = new Map();

  for (let num of s) {
    if (newMap.has(num)) {
      if (newMap.get(num) === 2) {
        return num;
      }
      newMap.set(num, newMap.get(num) + 1);
    } else {
      newMap.set(num, 1);
    }
  }
};

console.log(repeatedCharacter("abccbaacz"));
