// function that receives a message and returns the secret square code version of the message

const squareCode = function (message) {
  // remove spaces;
  message = message.replace(/ /g, "");

  // transform the message into a square (or rectangle) shape
  let maxCol = Math.ceil(Math.sqrt(message.length));
  let newMessage = "";
  for (let i = 0; i < message.length; i++) {
    if (i === 0 || i % maxCol !== 0) {
      newMessage += message[i];
    } else {
      newMessage += "\n" + message[i];
    }
  }

  // produce the final message by reading down the columns going left to right
  message = ""
  for (let col = 0; col < maxCol; col++) {
    for (let position = col; position < newMessage.length; position+= maxCol+1) {
      message += newMessage[position];
    }
    message += " ";
  }
  return message;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));