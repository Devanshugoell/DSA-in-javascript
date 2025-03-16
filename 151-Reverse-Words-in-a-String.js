var reverseWords = function (s) {
  let str = "";
  let pointer = s.length;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " || i === 0) {
      let word = s.substring(i, pointer).trim();
      if (word) {
        str += " " + word;
      }
      pointer = i;
    }
  }
  return str.trim();
};

console.log(reverseWords("a good   example"));
