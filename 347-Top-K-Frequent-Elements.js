//With built in methods

var topKFrequent = function (nums, k) {
  const newObj = {}; // Create an empty object to store number frequencies.
  let newArray = [];

  // Populate the object with numbers as keys and their frequencies as values.
  for (let num of nums) {
    newObj[num] = (newObj[num] || 0) + 1;
  }

  // Convert the object into an array of [number, frequency] pairs and sort it in descending order of frequency.
  const sortedObj = Object.entries(newObj).sort((a, b) => b[1] - a[1]);

  // Extract the sorted numbers into a new array.
  for (let i = 0; i < sortedObj.length; i++) {
    newArray.push(Number(sortedObj[i][0]));
  }

  // Return the top k frequent elements.
  return newArray.slice(0, k);
};

//Without using built in methods .

var topKFrequent = function (nums, k) {
  const newMap = new Map();

  // Step 1: Count frequencies
  for (let i = 0; i < nums.length; i++) {
    newMap.set(nums[i], (newMap.get(nums[i]) || 0) + 1);
  }

  // Step 2: Convert Map to Array
  const freqArray = [];
  for (let [num, freq] of newMap) {
    freqArray.push([num, freq]);
  }

  // Step 3: Merge Sort to sort based on frequency
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
  }

  function merge(left, right) {
    let sortedArr = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (left[i][1] >= right[j][1]) {
        sortedArr.push(left[i]);
        i++;
      } else {
        sortedArr.push(right[j]);
        j++;
      }
    }

    while (i < left.length) {
      sortedArr.push(left[i]);
      i++;
    }

    while (j < right.length) {
      sortedArr.push(right[j]);
      j++;
    }

    return sortedArr;
  }

  freqArray = mergeSort(freqArray); // Sorting the frequency array

  // Step 4: Extract top K elements
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(freqArray[i][0]);
  }

  return result;
};

//Using bucket sort

var topKFrequent = function (nums, k) {
  const freqMap = new Map();

  // Step 1: Count frequencies
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Step 2: Initialize buckets (index = frequency)
  const bucket = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (let [num, freq] of freqMap) {
    bucket[freq].push(num); // Place number in the bucket corresponding to its frequency
  }

  // Step 3: Collect the top K frequent elements
  const result = [];
  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    if (bucket[i].length > 0) {
      result.push(...bucket[i]);
    }
  }

  return result.slice(0, k); // Ensure only top k elements are returned
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
