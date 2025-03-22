var detectCapitalUse = function (word) {
  if (
    word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    (word[0] === word[0].toUpperCase() &&
      word.slice(1, word.length) === word.slice(1, word.length).toLowerCase())
  ) {
    return true;
  }

  return false;
};
