// array of possible plays for the computer and the player to choose from
let plays = ["rock", "paper", "scissors"];

function computerPlay() {
  // returns a randomly selected element from the valid plays
  return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection=computerPlay()) {
  // make playerSelection case match plays array case
  playerSelection = playerSelection.toLowerCase();

	// win condition bool object
	let playerWon = (
					playerSelection !== computerSelection &&
					(playerSelection === "rock" && computerSelection === "scissors") ||
					(playerSelection === "scissors" && computerSelection === "paper") ||
					(playerSelection === "paper" && computerSelection === "rock")
	);

  if (playerSelection === computerSelection) {
    return `tie!! you both picked ${playerSelection}`;
  } else {
		if (playerWon) {
      return `good job bud, ${playerSelection} beats ${computerSelection}`;
    } else {
      return `sorry pal, ${computerSelection} beats ${playerSelection}`;
    }
  }
}

// main game loop
function game(rounds=5) {
  for (let i = 0; i < rounds; i++) {
    let roundChoice = prompt("rock, paper, or scissors?");
    console.log(playRound(roundChoice));
  }
}
