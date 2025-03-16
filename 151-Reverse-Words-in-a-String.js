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

//This is more optimized version

var reverseWords = function (s) {
  let str = "";
  let pointer = s.length;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " || i === 0) {
      let start = i === 0 ? i : i + 1;
      let word = s.substring(start, pointer).trim();
      if (word) {
        if (str.length > 0) str += " ";
        str += word;
      }
      pointer = i;
    }
  }
  return str;
};

console.log(reverseWords("a good   example"));
