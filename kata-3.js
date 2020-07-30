// a function that counts the number of vowels that appear in a given string.

const numberOfVowels = function(data) {
  let sum = 0;
  for (let char of data) {
    if (char==='a' || char==='e' || char==='i' || char==='o' || char==='u') {
      sum++;
    }
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));