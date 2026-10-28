const score = JSON.parse(localStorage.getItem("Score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You lose";
    } else {
      result = "You win";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else {
      result = "You lose";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose";
    } else if (computerMove === "Paper") {
      result = "You win";
    } else {
      result = "Tie";
    }
  }
  if (result === "You win") {
    score.wins++;
  } else if (result === "You lose") {
    score.losses++;
  } else {
    score.ties++;
  }
  updateResult(result);

  localStorage.setItem("Score", JSON.stringify(score));
}

document.querySelector('.js-rock-button')
.addEventListener('click',()=>playGame('rock'));

document.querySelector('.js-rock-button')
.addEventListener('click',()=>playGame('rock'));

document.querySelector('.js-rock-button')
.addEventListener('click',()=>playGame('rock'));

function updateResult(result){
  document.querySelector('.js-result').innerHTML=`${result}`;
}
function updateScoreElement() {
  document.querySelector(".js-score").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}