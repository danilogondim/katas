// function that calculates which bills and coins to return when giving change

const calculateChange = function (total, cash) {
  let toReturn = cash - total;
  const change = {};
  const billsAndCoins = [
    ["twentyDollar", 2000],
    ["tenDollar", 1000],
    ["fiveDollar", 500],
    ["twoDollar", 200],
    ["oneDollar", 100],
    ["quarter", 25],
    ["dime", 10],
    ["nickel", 5],
    ["penny", 1]]
  if (toReturn > 0) {
    for (let value of billsAndCoins) {
      if (Math.floor(toReturn / Number(value[1])) !== 0) {
        change[value[0]] = Math.floor(toReturn / Number(value[1]));
        toReturn -= Math.floor(toReturn / Number(value[1])) * Number(value[1]);
        if (toReturn === 0) {
          break;
        }
      }
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));