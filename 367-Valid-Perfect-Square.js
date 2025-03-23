var isPerfectSquare = function (num) {
  if (num === 0 || num === 1) return true;

  let low = 2,
    high = num;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid * mid === num) {
      return true;
    } else if (mid * mid > num) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return false;
};

console.log(isPerfectSquare(16));
