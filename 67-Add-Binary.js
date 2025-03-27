var addBinary = function (a, b) {
  let convertedBinary = parseInt(a, 2) + parseInt(b, 2);

  return convertedBinary.toString(2);
};
console.log(addBinary("1010", "1011"));
