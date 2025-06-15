var minBitFlips = function (start, goal) {
  let xorResult = start ^ goal;
  let count = 0;
  while (xorResult > 0) {
    xorResult = xorResult & (xorResult - 1);
    count++;
  }
  return count;
};

console.log(minBitFlips(10, 7));
