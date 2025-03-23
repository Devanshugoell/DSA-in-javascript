var arrangeCoins = function (n) {
  let low = 1,
    high = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (n < (mid * (mid + 1)) / 2) {
      high = mid - 1;
    } else if (n > (mid * (mid + 1)) / 2) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return high;
};

console.log(arrangeCoins(5));
