const rockButton = document.getElementById('rock').addEventListener('click', playRock);
const paperButton = document.getElementById('paper').addEventListener('click', playPaper);
const scissorsButton = document.getElementById('scissors').addEventListener('click', playScissors);

function playRock() {
  const computerChoice = computer(items);
  document.getElementById('userChoice').innerText = 'You Have Chosen Rock';
  document.getElementById('computerChoice').innerText = `Computer has chosen ${computerChoice}`;
  if (computerChoice === 'Rock') {
    document.getElementById('results').innerText = "It's a tie";
  } else if (computerChoice === 'Paper') {
    document.getElementById('results').innerText = "You Win!!";
  } else {
    document.getElementById('results').innerText = "You Lose!!";
  }
}

function playPaper() {
  const computerChoice = computer(items);
  document.getElementById('userChoice').innerText = 'You Have Chosen Paper';
  document.getElementById('computerChoice').innerText = `Computer has chosen ${computerChoice}`;
  if (computerChoice === 'Paper') {
    document.getElementById('results').innerText = "It's a tie";
  } else if (computerChoice === 'Scissors') {
    document.getElementById('results').innerText = "You Win!!";
  } else {
    document.getElementById('results').innerText = "You Lose!!";
  }
}

function playScissors() {
  const computerChoice = computer(items);
  document.getElementById('userChoice').innerText = 'You Have Chosen Scissors';
  document.getElementById('computerChoice').innerText = `Computer has chosen ${computerChoice}`;
  if (computerChoice === 'Scissors') {
    document.getElementById('results').innerText = "It's a tie";
  } else if (computerChoice === 'Rock') {
    document.getElementById('results').innerText = "You Win!!";
  } else {
    document.getElementById('results').innerText = "You Lose!!";
  }
}

function computer(items) {
  return items[Math.floor(Math.random() * 3)]
};
const items = ['Rock', 'Paper', 'Scissors'];