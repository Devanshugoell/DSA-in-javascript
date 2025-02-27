// This function calculates the maximum depth of a binary tree using recursion:

// If the tree is empty (root === null), return 0.
// Recursively find the depth of the left and right subtrees.
// Return 1 + the maximum of the two depths (to account for the current node).
// Time Complexity:
// O(n) (visits each node once).

// Space Complexity:

// O(h) (recursion stack, where h is the tree height).

var maxDepth = function (root) {
  if (!root) return 0;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return 1 + Math.max(left, right);
};
