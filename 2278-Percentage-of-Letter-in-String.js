var percentageLetter = function (s, letter) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) {
      count++;
    }
  }

  return (count / s.length) * 100;
};

console.log(percentageLetter("foobar", "o"));
