const board = [[0,0,0],[0,0,0],[0,0,0]]

console.log(board)

function boardChanger(row,column,sign) {
  
  if (board[row][column] === 0) {
    board[row][column] = sign;
  } else {
    console.log("Please choose a valid square");
  }
}

const checking = checkWin(board)

let p1Wins = false;
let p2Wins = false;

function checkWin(board) {

  
  //Player 1 Logic

  for (let i = 0; i < 3; i++){
    if (board[i][0] + board[i][1] + board[i][2] === 3) {
      return p1Wins = true;
    }
  }
  
  for (let j = 0; j < 3; j++){
    if (board[0][j] + board[1][j] + board[2][j] === 3) {
      return p1Wins = true;
    }
  }

  if (board[0][0] + board[1][1] + board[2][2] === 3) {
    return p1Wins =  true;
  }

  if (board[2][0] + board[1][1] + board[0][2] === 3) {
    return p1Wins = true;
  }
  
  //Player 2 Logic

  for (let i = 0; i < 3; i++){
    if (board[i][0] + board[i][1] + board[i][2] === -3) {
      return p2Wins =true;
    }
  }
  
  for (let j = 0; j < 3; j++){
    if (board[0][j] + board[1][j] + board[2][j] === -3) {
      return p2Wins = true;
    }
  }

  if (board[0][0] + board[1][1] + board[2][2] === -3) {
    return p2Wins = true;
  }

  if (board[2][0] + board[1][1] + board[0][2] === -3) {
    return p2Wins = true;
  }
}

function move() {
  let row = prompt("Enter your row")
  let column = prompt("Enter your column")
  let sign = parseInt(prompt("Enter your sign"));

  boardChanger(row,column,sign);

  console.log(` ${board[0]} \n ${board[1]} \n ${board[2]}`)
}

function gameFlow() {
  
  while (p1Wins === false && p2Wins === false) {
    move()
    checkWin(board)

  }

  if (p1Wins === true) {
    console.log("Player 1 has won!")
  } else if (p2Wins === true) {
    console.log("Player 2 has won!")
  }
}

gameFlow()






