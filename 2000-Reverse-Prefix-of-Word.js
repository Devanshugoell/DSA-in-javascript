var reversePrefix = function (word, ch) {
  let index = -1;

  // Find the index of first occurrence of ch
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      index = i;
      break;
    }
  }

  // If ch is not found, return word as it is
  if (index === -1) return word;

  let result = "";

  // Add reversed part
  for (let i = index; i >= 0; i--) {
    result += word[i];
  }

  // Add remaining part
  for (let i = index + 1; i < word.length; i++) {
    result += word[i];
  }

  return result;
};

console.log(reversePrefix("abcdefd", "d"));
