var buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b);
  let totalPrice = prices[0] + prices[1];

  return money >= totalPrice ? money - totalPrice : money;
};

console.log(buyChoco([11, 90], 70));
