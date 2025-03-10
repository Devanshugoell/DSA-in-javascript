var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b); // Sort in ascending order
  let left = 0,
    right = people.length - 1;
  let boats = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++; // Lightest person also boards
    }
    right--; // Heaviest person always boards
    boats++; // One boat is used
  }

  return boats;
};

// Example Test Case
console.log(numRescueBoats([3, 2, 2, 1], 3)); // Output: 3
