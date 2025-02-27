function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr.slice(left, right + 1); // Base case
  let mid = Math.floor((left + right) / 2);
  let leftSorted = mergeSort(arr, left, mid);
  let rightSorted = mergeSort(arr, mid + 1, right);
  return merge(arr, leftSorted, rightSorted);
}

let left = arr.slice(0, mid); // Creates a new array
let right = arr.slice(mid); // Creates another new array

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
