//Unoptimized  version

var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let topElement = stack[stack.length - 1];
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (
      (s[i] === ")" && topElement === "(") ||
      (s[i] === "}" && topElement === "{") ||
      (s[i] === "]" && topElement === "[")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

//Optimized Version

const isValid = (s) => {
  let stack = [];

  for (const c of s) {
    if (c === "(") stack.push(")");
    else if (c === "[") stack.push("]");
    else if (c === "{") stack.push("}");
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0;
};

//console.log(isValid("([])"));
console.log(isValid(")")); // Expected: false, but your code returns true
//console.log(isValid("({)}")); // Expected: false, but your code returns true
