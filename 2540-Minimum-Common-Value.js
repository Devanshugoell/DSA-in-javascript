var getCommon = function (nums1, nums2) {
  let i = 0,
    j = 0;

  if (!nums1.length || !nums2.length) return -1;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      return nums1[i];
    }
  }
  return -1;
};

console.log(getCommon([1, 2, 3], [2, 4]));
