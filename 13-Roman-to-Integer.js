var romanToInt = function (s) {
  let total = 0;

  const newObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (newObj[s[i]] < newObj[s[i + 1]]) {
      total -= newObj[s[i]];
    } else {
      total += newObj[s[i]];
    }
  }

  return total;
};

console.log(romanToInt("III"));
