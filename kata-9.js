// function that converts a string to camel case and returns the result

const camelCase = function (input) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      i++;
      newString += input[i].toUpperCase();
    } else {
      newString += input[i];
    }
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));