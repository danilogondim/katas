// function that receives a number maxValue as input and creates a square multiplication table according to maxValue

const multiplicationTable = function (maxValue) {
  let text = "";
  for (let row = 1; row <= maxValue; row++) {

    for (let col = 1; col <= maxValue; col++) {
      text += row * col;
      if (col < maxValue) {
        text += " ";
      } else {
        text += "\n"
      }
    }
  }
  return text;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));