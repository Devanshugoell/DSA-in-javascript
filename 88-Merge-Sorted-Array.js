var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0,
    newArray = [];

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      newArray.push(nums1[i]);
      i++;
    } else {
      newArray.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    newArray.push(nums1[i]);
    i++;
  }

  while (j < n) {
    newArray.push(nums2[j]);
    j++;
  }

  for (let i = 0; i < newArray.length; i++) {
    nums1[i] = newArray[i];
  }

  return nums1;
};

//Brute force approach

var merge = function (nums1, m, nums2, n) {
  let mergedArray = [...nums1.slice(0, m), ...nums2]; // Step 1: Merge both arrays
  mergedArray.sort((a, b) => a - b); // Step 2: Sort the array

  for (let i = 0; i < m + n; i++) {
    nums1[i] = mergedArray[i]; // Step 3: Copy back to nums1
  }
};

//optimized approach by using three pointer

var merge = function (nums1, m, nums2, n) {
  let pointer1 = m - 1,
    pointer2 = n - 1,
    pointer3 = m + n - 1;
  while (pointer1 >= 0 && pointer2 >= 0) {
    if (nums1[pointer1] > nums2[pointer2]) {
      nums1[pointer3] = nums1[pointer1];
      pointer1--, pointer3--;
    } else {
      nums1[pointer3] = nums2[pointer2];
      pointer2--, pointer3--;
    }
  }

  // If elements are left in nums2
  while (pointer2 >= 0) {
    nums1[pointer3] = nums2[pointer2];
    pointer2--, pointer3--;
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
