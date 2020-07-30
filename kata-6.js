// a function that returns the coordinates of an available parking spot given a vehicle type

// Regular cars can only park in R spots.
// Small cars can park in R or S spots.
// Motorcycles can park in R, S, or M spots.
// An upper-case letter means that the particular spot is AVAILABLE

const whereCanIPark = function (spots, vehicle) {
  const availableSpot = [];
  for (let row = 0; row < spots.length; row++) {
    for (let column = 0; column < spots[row].length; column++) {
      if ((vehicle === 'regular' || vehicle === 'small' || vehicle === 'motorcycle') && spots[row][column] === 'R') {
        availableSpot.push(column, row)
        return availableSpot;

      } else if ((vehicle === 'small' || vehicle === 'motorcycle') && spots[row][column] === 'S') {
        availableSpot.push(column, row)
        return availableSpot;

      } else if (vehicle === 'motorcycle' && spots[row][column] === 'M') {
        availableSpot.push(column, row)
        return availableSpot;
      }
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))