const rockButton = document.getElementById('rock').addEventListener('click', playRock);
//const paperButton = document.getElementById('paper').addEventListener('click', playPaper);
//const scissorsButton = document.getElementById('scissors').addEventListener('click', playScissors);

function playRock() {
  const playerChoice = 'rock';

  if (playerChoice === computer(items)) {
    console.log('Stalemate');
  }

}





function computer(items) {
  return items[Math.floor(Math.random() * 3)]
};
const items = ['rock', 'paper', 'scissors'];