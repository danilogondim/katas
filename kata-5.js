// a function that receives a string of words and replaces all whitespace with %20.

const urlEncode = function(text) {
  let newString = "";
  
  // defines the first valid character position
  let firstValidChar = 0;
  while (text[firstValidChar] === " " && firstValidChar < text.length) {
    firstValidChar++;
  }

  // defines the last valid character position
  let lastValidChar = text.length - 1;
  while (text[lastValidChar] === " " && lastValidChar > 0)  {
    lastValidChar--;
  }

  // replaces whitespaces with %20
  for (let i = firstValidChar; i <= lastValidChar; i++) {
    if (text[i] === " ") {
      newString += "%20"
    } else {
      newString += text[i];
    }
  }
  return newString;
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));



// alternative function code:

// const urlEncode = function(text) {
//   let newString = "";
//   let firstValidChar;
//   let j = 0;
  
//   // defining the last valid character position
//   let i = 1;
//   let lastValidChar = text.length - i;
//   while (lastValidChar > 0 && text[lastValidChar] === " ")  {
//     i++;
//     lastValidChar = text.length - i;
//   }

//   for (let char of text) {
//     // setting the first valid character to start newString
//     if (j <= lastValidChar && firstValidChar === undefined && char !== " ") {
//       firstValidChar = char;
//       newString += char;
//     } else if (j <= lastValidChar && firstValidChar && char === " ") {
//       newString += "%20"; 
//     } else if (j <= lastValidChar && firstValidChar && char !== " ") {
//       newString += char;
//     };
//     j++
//   }
//   return newString;
// };