document.getElementById("rockButton").addEventListener('Click' runCompareRock());

function runCompareRock() {
  const userChoice = document.getElementById('rockButton')
  if (userChoice === computerChoice) {
    prompt("Stalemate")
  }
}
const items = ['Rock', 'Paper', 'Scissors'];

function computer(items) {
  return items[Math.floor(Math.random() * 3)]
};

const computerChoice = computer(items);
console.log(computerChoice);