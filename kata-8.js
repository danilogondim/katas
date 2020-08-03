
// function that returns a string with each of the given values repeated the appropriate number of times

const repeatNumbers = function (data) {
  let text = "";
  data.forEach((element, index, array) => {
    for (let i = 0; i < element[1]; i++) {
      text += element[0];
    }
    if (array.length > 1 && index < array.length - 1) {
      text += ", ";
    }
    return text;
  });
  return text;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));