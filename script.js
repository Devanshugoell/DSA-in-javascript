// function quickSort(arr, low = 0, high = arr.length - 1) {
//   if (low < high) {
//     const pivotIndex = pivot(arr, low, high); // Find pivot index
//     quickSort(arr, low, pivotIndex - 1); // Sort elements before pivot
//     quickSort(arr, pivotIndex + 1, high); // Sort elements after pivot
//   }
// }

// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// function pivot(arr, start = 0, end = arr.length - 1) {
//   let pivot = arr[start];
//   let swapIdx = start;

//   for (let i = start + 1; i <= end; i++) {
//     // Loop should go up to 'end'
//     if (arr[i] < pivot) {
//       // Maintain consistency in comparison
//       swapIdx++;
//       swap(arr, swapIdx, i);
//     }
//   }

//   swap(arr, start, swapIdx); // Place pivot in correct position
//   return swapIdx;
// }

// const array = [3, 6, 8, 10, 1, 2, 1];
// quickSort(array);
// console.log(array); // Output: [1, 1, 2, 3, 6, 8, 10]

// Quick Sort (2)

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr; // Base case: already sorted
//   }

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)]; // Recursive calls
// }

// // Example usage:
// const unsortedArray = [5, 2, 8, 1, 9, 4, 7, 6, 3];
// const sortedArray = quickSort(unsortedArray);
// console.log("Sorted array:", sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Quick Sort (3)

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr; // Base case: already sorted
//   }

//   const pivot = arr[Math.floor(arr.length / 2)]; // Choose a pivot (middle element here)
//   const left = [];
//   const equal = [];
//   const right = [];

//   for (let element of arr) {
//     if (element < pivot) {
//       left.push(element);
//     } else if (element > pivot) {
//       right.push(element);
//     } else {
//       equal.push(element);
//     }
//   }

//   return quickSort(left).concat(equal, quickSort(right)); // Recursive calls
// }

// Example usage:
// const unsortedArray1 = [5, 2, 8, 1, 9, 4, 7, 6, 3];
// const sortedArray1 = quickSort(unsortedArray1);
// console.log("Sorted array:", sortedArray1); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
