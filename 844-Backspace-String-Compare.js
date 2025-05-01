var backspaceCompare = function (s, t) {
  const stackofS = [];
  const stackofT = [];

  for (let str of s) {
    if (str !== "#") stackofS.push(str);
    else {
      stackofS.pop();
    }
  }

  for (let str of t) {
    if (str !== "#") stackofT.push(str);
    else {
      stackofT.pop();
    }
  }

  return stackofS.join("") === stackofT.join("");
};

console.log(backspaceCompare("a", "aa#a"));
