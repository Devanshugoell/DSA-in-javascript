var fizzBuzz = function (n) {
  let newArray = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      newArray.push("Fizz");
    } else if (i % 5 === 0) {
      newArray.push("Buzz");
    } else {
      newArray.push(`${i}`);
    }
  }

  return newArray;
};

console.log(fizzBuzz(15));
