// The approach used in this function is the Two-Pointer Technique to solve the Container With Most Water problem efficiently.

// Approach (Two-Pointer Technique)
// Initialize two pointers:

// left at the start (0)
// right at the end (height.length - 1)
// Calculate area:

// The height is determined by the shorter of the two bars (Math.min(height[left], height[right])).
// The width is the distance between the two pointers (right - left).
// Compute area = length * width and update maxArea if it's larger.
// Move the pointer with the smaller height:

// This is because the water level is limited by the shorter height.
// Moving the shorter bar might give a larger area in the next iteration.
// Repeat until left meets right.

// Time Complexity
// O(n): Each element is processed once as the pointers move toward each other.

var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    maxArea = 0;

  while (left < right) {
    let length = Math.min(height[left], height[right]);
    let width = right - left;
    let area = length * width;

    maxArea = Math.max(maxArea, area);

    height[left] < height[right] ? left++ : right--;
  }
  return maxArea;
};

console.log(maxArea([1, 3, 2, 5, 25, 24, 5]));
