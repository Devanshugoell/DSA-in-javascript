//Brute force solution . here we are using two loops

var calPoints = function (operations) {
  const nums = [];
  let result = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "C") {
      nums.pop();
    } else if (operations[i] === "D") {
      const newNum = nums[nums.length - 1] * 2;
      nums.push(Number(newNum));
    } else if (operations[i] === "+") {
      let lastNum = nums[nums.length - 1];
      let prevNum = nums[nums.length - 2];
      nums.push(Number(lastNum + prevNum));
    } else {
      nums.push(Number(operations[i]));
    }
  }

  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
};

//But in the second approach we are not using two loops

var calPoints = function (operations) {
  const nums = [];
  let result = 0;

  for (let op of operations) {
    if (op === "C") {
      result -= nums.pop(); // Remove last score and update sum
    } else if (op === "D") {
      let double = nums[nums.length - 1] * 2;
      nums.push(double);
      result += double;
    } else if (op === "+") {
      let sumLastTwo = nums[nums.length - 1] + nums[nums.length - 2];
      nums.push(sumLastTwo);
      result += sumLastTwo;
    } else {
      let num = Number(op);
      nums.push(num);
      result += num;
    }
  }

  return result;
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
