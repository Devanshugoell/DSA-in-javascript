//Used the approach like how we merge two sorted array in merge sort.

var mergeAlternately = function (word1, word2) {
  var i = 0,
    j = 0,
    mergeStr = [];

  while (i < word1.length && j < word2.length) {
    mergeStr.push(word1[i]);
    i++;
    mergeStr.push(word2[j]);
    j++;
  }

  while (i < word1.length) {
    mergeStr.push(word1[i]);
    i++;
  }

  while (j < word2.length) {
    mergeStr.push(word2[j]);
    j++;
  }

  return mergeStr.join("");
};

console.log(mergeAlternately("abc", "wxyz"));

//But this can be simplified to this. We created an empty array in which we will push if any of the condition gets true it will in the while loop suppose we loop completed and i == word1.length (Suppose our word1 has small in length then word2)then first condition will be false but second condition will still be true .So again it will get into the loop then check the condition i < word1.length which will be false because now i will be equal to word1.length

var mergeAlternately = function (word1, word2) {
  let i = 0,
    mergeStr = [];

  while (i < word1.length || i < word2.length) {
    if (i < word1.length) mergeStr.push(word1[i]);
    if (i < word2.length) mergeStr.push(word2[i]);
    i++;
  }

  return mergeStr.join("");
};

// Time complexity is the same for both: O(N+M) for worst case and Best case: O(max(N,M))

// Space Complexity Analysis
// Both solutions store the merged characters in an array before joining them into a string:

// First approach: Uses mergeStr = [], and two separate indexes i, j.
// Second approach: Uses mergeStr = [], but only a single index i.
// 🚀 Both use O(N+M) additional space, but the second approach is slightly better in memory usage due to fewer variables.
