//[7,1,5,3,6,4]
//[7,6,4,3,1]
//[7,1,5,0,6,4]
function buySell(arr) {
  if (arr.length < 2) return 0; // Edge case: No profit possible with less than 2 prices

  let min = arr[0];
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    min = Math.min(arr[i], min);
    maxProfit = Math.max(maxProfit, arr[i] - min);
  }

  return maxProfit;
}

function buyandSell(arr) {
  let max = 0;
  let l = 0,
    r = 1;

  while (r < arr.length) {
    if (arr[l] > arr[r]) {
      l = r;
    }

    max = Math.max(max, arr[r] - arr[l]);
    r++;
  }
  return max;
}
