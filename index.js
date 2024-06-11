let board = [[0,0,0],[0,0,0],[0,0,0]]

let x = 1;

function turnChanger() {
  x = -x;
  return x;
}

console.log(x)

console.log(board)

function turnAnnouncer() {
  if(x === 1) {
    console.log("Player 1 turn")
  } else {
    console.log("Player 2 turn")
  }
}

function checkDraw() {
  if(board.flat().includes(0) === true) {
    return;
  } else {
    console.log("This is a draw")
  }
}

function boardChanger(row,column,sign) {
  
  if (board[row][column] === 0) {
    board[row][column] = sign;
  } else {
    console.log("Please choose a valid square");
  }
}


let p1Wins = false;
let p2Wins = false;

let p1Score = 0;
let p2Score = 0;

function updateScore() {
  const score = document.querySelector(".score")

  score.textContent = `${p1Score} - ${p2Score}`
  return `Player 1 ${p1Score} - ${p2Score} Player 2`;
}

function checkWin(board) {

  
  //Player 1 Logic

  for (let i = 0; i < 3; i++){
    if (board[i][0] + board[i][1] + board[i][2] === 3) {
      p1Score++;
      p1Wins = true;
      return;
    }
  }
  
  for (let j = 0; j < 3; j++){
    if (board[0][j] + board[1][j] + board[2][j] === 3) {
      p1Score++;
      p1Wins = true;
      return;
    }
  }

  if (board[0][0] + board[1][1] + board[2][2] === 3) {
    p1Score++;
    p1Wins = true;
      return;
  }

  if (board[2][0] + board[1][1] + board[0][2] === 3) {
    p1Score++;
    p1Wins = true;
    return;
  }
  
  //Player 2 Logic

  for (let i = 0; i < 3; i++){
    if (board[i][0] + board[i][1] + board[i][2] === -3) {
      p2Score++;
      p2Wins = true;
      return;
    }
  }
  
  for (let j = 0; j < 3; j++){
    if (board[0][j] + board[1][j] + board[2][j] === -3) {
      p2Score++;
      p2Wins = true;
      return;
    }
  }

  if (board[0][0] + board[1][1] + board[2][2] === -3) {
    p2Score++;
    p2Wins = true;
    return;
  }

  if (board[2][0] + board[1][1] + board[0][2] === -3) {
    p2Score++;
    p2Wins = true;
    return;
  }
} 

function move(row,column) {
  turnAnnouncer();
  updateScore()
  //let row = prompt("Enter your row")
  //let column = prompt("Enter your column")

  turnAnnouncer();
  boardChanger(row,column,x);
  turnChanger();
  checkDraw();

  console.log(` ${board[0]} \n ${board[1]} \n ${board[2]}`)


}

function gameFlow() {
  

  while (p1Wins === false && p2Wins === false) {
    move()
    checkWin(board)

  }

  if (p1Wins === true) {
    console.log("Player 1 has won!")
    console.log(updateScore());
  } else if (p2Wins === true) {
    console.log("Player 2 has won!")
    console.log(updateScore())
  }
}

const startGame = function() {
  p1Wins = false;
  p2Wins = false;
  board = [[0,0,0],[0,0,0],[0,0,0]]
  console.log(` ${board[0]} \n ${board[1]} \n ${board[2]}`)

  clickHandlerBoard()
  gameFlow();

}

function clickHandlerBoard() {
  const squares = document.querySelectorAll(".boardsquare")
  const newGameButton = document.querySelector(".newgame");
  const resetGameButton = document.querySelector(".resetgame");

  newGameButton.addEventListener('click', () => {
    startGame();
  })

  resetGameButton.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;
    updateScore()
    startGame();
  })

  squares.forEach((square) => {
    square.addEventListener('click', () => {
      console.log(square.id);
    })
  })

  square1.addEventListener('click', () => { 
    move(0,0)
  })
  square2.addEventListener('click', () => { 
    move(0,1)
  })
  square3.addEventListener('click', () => { 
    move(0,2)
  })
  square4.addEventListener('click', () => { 
    move(1,0)
  })
  square5.addEventListener('click', () => { 
    move(1,1)
  })
  square6.addEventListener('click', () => { 
    move(1,2)
  })
  square7.addEventListener('click', () => { 
    move(2,0)
  })
  square8.addEventListener('click', () => { 
    move(2,1)
  })
  square9.addEventListener('click', () => { 
    move(2,2)
  })
};

clickHandlerBoard()



console.log(`Type "startGame()" to initiate the game`)







