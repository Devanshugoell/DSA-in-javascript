var canConstruct = function (ransomNote, magazine) {
  const newransomNoteMap = new Map();
  const newmagazineMap = new Map();

  for (let str of ransomNote) {
    newransomNoteMap.set(str, (newransomNoteMap.get(str) || 0) + 1);
  }

  for (let str of magazine) {
    newmagazineMap.set(str, (newmagazineMap.get(str) || 0) + 1);
  }

  for (let [key, val] of newransomNoteMap) {
    if (!(newransomNoteMap.get(key) <= newmagazineMap.get(key))) {
      return false;
    }
  }

  return true;
};

var canConstruct = function (ransomNote, magazine) {
  const letters = magazine.split("");
  return ransomNote.split("").every((char) => {
    if (letters.indexOf(char) !== -1) {
      delete letters[letters.indexOf(char)];
      return true;
    } else {
      return false;
    }
  });
};

console.log(canConstruct("aa", "aab"));
