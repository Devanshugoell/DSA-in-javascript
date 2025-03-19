//Brute force approach using time complexity of O(n^2)

var productExceptSelf = function (nums) {
  const newArr = [];

  for (let i = 0; i < nums.length; i++) {
    var product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    newArr.push(product);
  }
  return newArr;
};

//Optimized approach using prefix and time complexity gets decreased to O(n)

var productExceptSelf = function (nums) {
  const n = nums.length;
  const prefix = new Array(n).fill(1);
  const suffix = new Array(n).fill(1);
  const result = new Array(n);

  // Build prefix product
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  // Build suffix product
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  // Multiply prefix and suffix products for each index
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
};

//another one

var productExceptSelf = function (nums) {
  const result = [];

  // First Pass
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }

  // Second Pass
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
