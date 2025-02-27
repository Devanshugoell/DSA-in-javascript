function FrequencyCounterCheck(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let count1 = {};
  let count2 = {};

  for (let num of arr1) {
    count1[num] = (count1[num] || 0) + 1;
  }

  for (let num of arr2) {
    count2[num] = (count2[num] || 0) + 1;
  }

  for (let key in count1) {
    const squaredValue = Number(key) ** 2;
    if (!(squaredValue in count2)) return false;
    if (count2[squaredValue] !== count1[key]) return false;
  }

  return true;
}

console.log(FrequencyCounterCheck([1, 2, 2, 1, 3], [4, 4, 1, 1, 9]));
