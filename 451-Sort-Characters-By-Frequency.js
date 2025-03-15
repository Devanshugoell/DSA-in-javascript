var frequencySort = function (s) {
  const newMap = new Map();

  for (let i = 0; i < s.length; i++) {
    newMap.set(s[i], (newMap.get(s[i]) || 0) + 1);
  }

  const sortedMap = new Map([...newMap.entries()].sort((a, b) => b[1] - a[1]));
  let newStr = "";

  for (let [key, val] of sortedMap) {
    newStr += key.repeat(val);
  }
  return newStr;
};

//We can optimize it further it is not optimized yet

console.log(frequencySort("tree")); //Output : "eert"
