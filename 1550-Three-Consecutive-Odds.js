function threeConsecutiveOdds(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
      return true;
    }
  }
  return false;
}

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
