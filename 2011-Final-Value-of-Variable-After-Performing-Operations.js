var finalValueAfterOperations = function (operations) {
  let value = 0;

  for (let num of operations) {
    value += num[1] === "+" ? 1 : -1;
  }

  return value;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
