//Unoptimized code

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  newStr1 = str1.split("").sort();
  newStr2 = str2.split("").sort();

  let i = 0;
  while (i < newStr1.length) {
    if (newStr1[i] === newStr2[i]) {
      i++;
    } else {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("anagram", "nagaram"));

//Optimized code
