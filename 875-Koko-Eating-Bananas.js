var minEatingSpeed = function (piles, h) {
  let left = 1,
    right = Math.max(...piles);

  const canEatAll = (k) => {
    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / k);
    }
    return hours <= h;
  };

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (canEatAll(mid)) {
      right = mid; // try smaller k
    } else {
      left = mid + 1; // need bigger k
    }
  }

  return left;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
