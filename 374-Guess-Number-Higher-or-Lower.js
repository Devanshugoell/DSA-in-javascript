var guessNumber = function (n) {
  let low = 1,
    high = n;

  const target = 7; // Change this value to test different cases

  function guess(num) {
    if (num > target) return -1; // Guessed number is too high
    if (num < target) return 1; // Guessed number is too low
    return 0; // Guessed number is correct
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let result = guess(mid);

    if (result === 0) {
      return mid; // Return the correct guessed number
    } else if (result === -1) {
      high = mid - 1; // Search in the left half
    } else {
      low = mid + 1; // Search in the right half
    }
  }
  return -1; // This line should not be reached
};

console.log(guessNumber(10)); // Output: 6
