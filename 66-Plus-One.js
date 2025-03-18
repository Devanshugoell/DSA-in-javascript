var plusOne = function (digits) {
  let lastDigit = digits[digits.length - 1];

  if (lastDigit !== 9) {
    lastDigit++;
    digits[digits.length - 1] = lastDigit;
    return digits;
  }
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      return digits;
    }
  }

  digits.unshift(1);

  return digits;
};

//More concise / clean up version

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits; // Done, no carry needed
    }
    digits[i] = 0; // Set to 0 if digit was 9
  }

  // If loop finished, all digits were 9 (e.g., [9,9,9] → [1,0,0,0])
  digits.unshift(1);
  return digits;
};

console.log(plusOne([8, 9, 9, 9]));
