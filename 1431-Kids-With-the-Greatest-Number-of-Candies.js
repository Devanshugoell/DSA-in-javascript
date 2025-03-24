var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let maxCandies = 0;

  for (let j = 0; j < candies.length; j++) {
    maxCandies = Math.max(maxCandies, candies[j]);
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
