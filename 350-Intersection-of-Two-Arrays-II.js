var intersect = function (nums1, nums2) {
  const newMap = new Map();
  const newArr = [];

  for (let num of nums1) {
    newMap.set(num, (newMap.get(num) || 0) + 1);
  }

  for (let num of nums2) {
    if (newMap.has(num) && newMap.get(num) > 0) {
      newArr.push(num);
      newMap.set(num, newMap.get(num) - 1);
    }
  }

  return newArr;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
