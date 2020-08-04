// function that generates a chess board with two queens on the given locations

// the chess board will be represented by an array of arrays
// 1 in the array represents a queen on the corresponding square
// O in the array represents an unoccupied square

const generateBoard = function (whiteQueen, blackQueen) {
  let board = [];
  for (let row = 0; row < 8; row++) {
    let chessRow = [];
    for (let col = 0; col < 8; col++) {
      if ((whiteQueen[0] === row && whiteQueen[1] === col) || (blackQueen[0] === row && blackQueen[1] === col)) {
        chessRow.push(1);
      } else {
        chessRow.push(0);
      }
    }
    board.push(chessRow);
  }
  return board;
}


// function that detects if the queens can attack each other

const queenThreat = function (generatedBoard) {
  // recover the queens' locations
  let firstQueen = [];
  let secondQueen = [];
  for (let row = 0; row < generatedBoard.length; row++) {
    for (let col = 0; col < generatedBoard[row].length; col++) {
      if (firstQueen.length < 2 && generatedBoard[row][col] === 1) {
        firstQueen.push(row);
        firstQueen.push(col);
      } else if (secondQueen.length < 2 && generatedBoard[row][col] === 1) {
        secondQueen.push(row);
        secondQueen.push(col);
      }
    }
  }
  // evaluate whether the queens are on the same row, column or diagonal
  const subRow = Math.abs(firstQueen[0] - secondQueen[0]);
  const subCol = Math.abs(firstQueen[1] - secondQueen[1]);
  if (firstQueen[0] === secondQueen[0] || firstQueen[1] === secondQueen[1] || subRow === subCol) {
    return true;
  } else {
    return false;
  }

}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));