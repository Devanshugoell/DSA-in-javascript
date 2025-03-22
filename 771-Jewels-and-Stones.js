var numJewelsInStones = function (jewels, stones) {
  const newMap = new Map();
  let count = 0;
  for (let jewel of jewels) {
    newMap.set(jewel, (newMap.get(jewel) || 0) + 1);
  }

  for (let stone of stones) {
    if (newMap.has(stone)) {
      count++;
    }
  }

  return count;
};

//Using Set

var numJewelsInStones = function (jewels, stones) {
  const jewelSet = new Set(jewels);
  let count = 0;

  for (let stone of stones) {
    if (jewelSet.has(stone)) {
      count++;
    }
  }

  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
