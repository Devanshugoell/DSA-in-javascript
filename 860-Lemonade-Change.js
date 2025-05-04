//Brute force approach

var lemonadeChange = function (bills) {
  const newArr = [];

  for (let bill of bills) {
    if (bill === 5) {
      newArr.push(bill);
    } else if (bill === 10) {
      if (newArr.includes(5)) {
        const index = newArr.indexOf(5);
        newArr.splice(index, 1); // remove one 5
        newArr.push(bill);
      } else {
        return false;
      }
    } else {
      // bill === 20
      if (newArr.includes(10) && newArr.includes(5)) {
        const indexof10 = newArr.indexOf(10);
        const indexof5 = newArr.indexOf(5);
        newArr.splice(indexof10, 1);
        newArr.splice(indexof5, 1);
        newArr.push(bill);
      } else {
        // Try removing three 5s
        let count = 0;
        for (let i = newArr.length - 1; i >= 0 && count < 3; i--) {
          if (newArr[i] === 5) {
            newArr.splice(i, 1);
            count++;
          }
        }
        if (count === 3) {
          newArr.push(bill);
        } else {
          return false;
        }
      }
    }
  }

  return true;
};

//Optimized version

var lemonadeChange = function (bills) {
  let five = 0,
    ten = 0;

  for (let bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      if (five > 0) {
        five--;
        ten++;
      } else {
        return false;
      }
    } else {
      if (five > 0 && ten > 0) {
        ten--;
        five--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};

lemonadeChange([5, 5, 10, 10, 20]);
