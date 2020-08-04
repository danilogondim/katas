// a function that converts strings into all different kinds of case styles; like camel, pascal, snake, or even kebab.

const makeCase = function (input, type) {
  // create a variable that will be manipulated to produce an output
  let output = input;
  // create a new array to make sure that the function accepts both strings or arrays as type argument and that the case styles will be applied in the requested order
  let typesArray = [];
  if (typeof type == "string") {
    typesArray.push(type);
  } else {
    type.forEach(element => {
      if (element === "camel" || element === "pascal" || element === "snake" || element === "kebab" || element === "title") {
        typesArray.push(element);
      }
    });
    type.forEach(element => {
      if (element === "vowel" || element === "consonant") {
        typesArray.push(element);
      }
    });
    type.forEach(element => {
      if (element === "upper" || element === "lower") {
        typesArray.push(element);
      }
    });
  }
  // make the necessary changes for each element of the typesArray
  typesArray.forEach(element => {
    switch (element) {
      case "camel":
        output = camelCase(output);
        break;
      case "pascal":
        output = pascal(output);
        break;
      case "snake":
        output = output.replace(/ /g, "_");
        break;
      case "kebab":
        output = output.replace(/ /g, "-");
        break;
      case "title":
        output = title(output);
        break;
      case "vowel":
        output = vowel(output);
        break;
      case "consonant":
        output = consonant(output);
        break;
      case "upper":
        output = output.toUpperCase();
        break;
      case "lower":
        output = output.toLowerCase();
        break;
    }
  });
  return output;
}

// a helper function that converts a string to camel case and returns the result
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

// a helper function that converts a string to pascal case and returns the result
const pascal = function (input) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      i++;
      newString += input[i].toUpperCase();
    } else if (i === 0) {
      newString += input[i].toUpperCase();
    } else {
      newString += input[i];
    }
  }
  return newString;
};

// a helper function that converts a string to title case and returns the result
const title = function (input) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      newString += input[i]
      i++;
      newString += input[i].toUpperCase();
    } else if (i === 0) {
      newString += input[i].toUpperCase();
    } else {
      newString += input[i];
    }
  }
  return newString;
};

// a helper function that makes only the vowels upper case and returns the result
const vowel = function (input) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    if (/[aeiou]/i.test(input[i])) {
      newString += input[i].toUpperCase();
    } else {
      newString += input[i].toLowerCase();
    }
  }
  return newString;
};

// a helper function that makes only the consonants upper case and returns the result
const consonant = function (input) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    if (!/[aeiou]/i.test(input[i])) {
      newString += input[i].toUpperCase();
    } else {
      newString += input[i].toLowerCase();
    }
  }
  return newString;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

















