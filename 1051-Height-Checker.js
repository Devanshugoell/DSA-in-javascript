var heightChecker = function (heights) {
  const prevHeights = [...heights];
  let count = 0;

  const expectedHeight = heights.sort((a, b) => a - b);

  for (let i = 0; i < prevHeights.length; i++) {
    if (prevHeights[i] !== expectedHeight[i]) {
      count++;
    }
  }

  return count;
};

console.log(heightChecker([1, 2, 3, 4, 5]));
