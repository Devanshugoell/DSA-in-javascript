var peakIndexInMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(peakIndexInMountainArray([1, 3, 5, 7, 9, 11, 20, 50, 100, 80, 60]));
