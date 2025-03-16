//Brute force

var rotateString = function (s, goal) {
  for (let i = 0; i < s.length; i++) {
    if (s === goal) {
      return true;
    }
    s = s.slice(1) + s.charAt(0);
  }
  return false;
};

//Using built in method

var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  return (s + s).includes(goal);
};

//Without using built in  but not optimized

var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  for (let i = 0; i < s.length; i++) {
    let rotated = "";

    // Create a rotated version of s by shifting characters
    for (let j = 0; j < s.length; j++) {
      rotated += s[(i + j) % s.length];
    }

    if (rotated === goal) return true;
  }

  return false;
};

//Optimized Approach (Without Built-in Methods):

var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  for (let i = 0; i < s.length; i++) {
    let isMatch = true;

    // Check if rotating `s` by `i` places matches `goal`
    for (let j = 0; j < s.length; j++) {
      if (s[(i + j) % s.length] !== goal[j]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) return true;
  }

  return false;
};

// Optimized O(n) Solution:

var rotateString = function (s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
};

console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false
