//@ts-nocheck
// a guessing game where the user has to guess a secret number between 0 and 100

// instantiate a prompt
let prompt = require("prompt-sync")();

// generate a random number between 0 and 100
const number = Math.floor(Math.random() * 101);

// start the counter and an object to hold the attempts
let attempts = 1;
const previousAnswers = {};

let answer;

// loop until the user guess the right number
while (answer !== number) {
  answer = Number(prompt("Guess a number between 0 and 100: "));
  // check whether it is a number and if it is within the range
  if (isNaN(answer) || answer < 0 || answer > 100) {
    console.log("The value you entered is not valid. Please try again.");
  } else if (answer > number) {
    console.log("Too High!");
    // check whether it was a different attempt to increment the counter
    if (previousAnswers[String(answer)] === undefined) {
      attempts++;
      previousAnswers[String(answer)] = 1;
    } else {
      previousAnswers[String(answer)]++;
    }
  } else if (answer < number) {
    console.log("Too Low!");
    // check whether it was a different attempt to increment the counter
    if (previousAnswers[String(answer)] === undefined) {
      attempts++;
      previousAnswers[String(answer)] = 1;
    } else {
      previousAnswers[String(answer)]++;
    }
    // if none of the previous conditions are met, the answer is right
  } else if (attempts > 1) {
    console.log("You got it! You took " + attempts + " attempts!");
  } else {
    console.log("You got it! You took only 1 attempt! That's incredible!!");
  }
}