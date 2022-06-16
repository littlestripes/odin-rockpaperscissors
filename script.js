// array of possible plays for the computer and the player to choose from
const plays = ["rock", "paper", "scissors"];

let score = 0;

// returns a random choice from the plays array
let computerPlay = () => {
  return plays[Math.floor(Math.random() * plays.length)];
};

// player input validity checker
let validChoice = (choice) => {
  // format string
  choice = choice.toLowerCase();
  choice = choice.trim();
  // test membership of input choice in plays array
  return (plays.indexOf(choice) >= 0);
};

function playRound(playerSelection, computerSelection=computerPlay()) {
  // format playerSelection to match plays array elements
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection.trim();

	// win condition bool object
	let playerWon = (
					playerSelection !== computerSelection &&
					(playerSelection === "rock" && computerSelection === "scissors") ||
					(playerSelection === "scissors" && computerSelection === "paper") ||
					(playerSelection === "paper" && computerSelection === "rock")
	);

  // message logic
  if (playerSelection === computerSelection) {
    return `tie!! you both picked ${playerSelection}`;
  } else {
		if (playerWon) {
      score++;
      return `good job bud, ${playerSelection} beats ${computerSelection}`;
    } else {
      return `sorry pal, ${computerSelection} beats ${playerSelection}`;
    }
  }
}

// main game loop
function game(rounds=5) {
  let i = 0;
  for (i = 0; i < rounds; i++) {
    let roundChoice = prompt("rock, paper, or scissors?");
    if (roundChoice === null) {
      alert("sayonara, then");
      return true;
    } else if (validChoice(roundChoice)) {
      console.log(playRound(roundChoice));
    } else {
      alert("invalid input!!");
      i--;
    }
  }

  // if all goes well, this happens
  console.log(`your final score is ${score}`);
  score = 0;
  return true;
}
