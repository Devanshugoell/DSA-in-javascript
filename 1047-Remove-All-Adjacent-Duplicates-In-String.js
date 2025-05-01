var removeDuplicates = function (s) {
  let newArr = [...s];
  let stack = [];
  let returnedStr = "";

  for (let str of newArr) {
    if (stack.includes(str)) {
      let removedIndex = stack.indexOf(str);
      stack.splice(removedIndex, 1);
    } else {
      stack.push(str);
    }
  }

  for (let str of stack) {
    returnedStr += str;
  }

  return returnedStr;
};

console.log(removeDuplicates("abbaca"));
