// radio buttons
const rounds5 = document.getElementById('radio5'),
 rounds10 = document.getElementById('radio10'),
 rounds15 = document.getElementById('radio15'),
 rounds20 = document.getElementById('radio20');

// html output Runden
const roundsTotal = document.getElementById('roundsTotal'),
 activeRound = document.getElementById('roundActiv');

// html output outputText + Counter
const outputText = document.getElementById('outputText'),
	playerCounter = document.getElementById('gamerCount'),
	computerCounter = document.getElementById('compCount');

const rockBtn = document.getElementById('rock'),
 paperBtn = document.getElementById('paper'),
 scissorsBtn = document.getElementById('scissors');

// globale Variablen Zähler Player/Computer - Rundenzähler
let playerScore = 0;
let computerScore = 0;
let activeRoundScore = 0;
let totalRoundScore = 0;

// überprüfe welcher Radio Button ist aktiv
function checkRounds() {
	if (rounds5.checked) {
		totalRoundScore = 5;
		roundsTotal.innerHTML = 5;
		activeRound.innerHTML = 0;
		console.log('Es wurde die 5 gewählt');
	} else if (rounds10.checked) {
		totalRoundScore = 10;
		roundsTotal.innerHTML = 10;
		activeRound.innerHTML = 0;
		console.log('Es wurde die 10 gewählt');
	} else if (rounds15.checked) {
		totalRoundScore = 15;
		roundsTotal.innerHTML = 15;
		activeRound.innerHTML = 0;
		console.log('Es wurde die 15 gewählt');
	} else if (rounds20.checked) {
		totalRoundScore = 20;
		roundsTotal.innerHTML = 20;
		activeRound.innerHTML = 0;
		console.log('Es wurde die 20 gewählt');
	}
}

// klick auf Button Stein
function playerChooseRock() {
	const rock = 1; // Stein = 1
	console.log('Spieler wählt: Stein: ', rock);

	compare(rock);
}

// klick auf Button Papier
function playerChoosePaper() {
	const paper = 2; // Papier = 2
	console.log('Spieler wählt: Papier: ', paper);
	compare(paper);
}

// klick auf Button Schere
function playerChooseScissors() {
	const scissors = 3; // Schere = 3
	console.log('Spieler wählt: Schere: ', scissors);

	compare(scissors);
}

// Funktionsaufruf Vergleich wer was gewählt hat, es wird 1, 2, oder 3 als Argument übergeben
function compare(choisPlayer) {
	let compChoise = Math.floor(Math.random() * 3) + 1; // Random Wahl des Computers 1-3

	if (
		rounds5.checked ||
		rounds10.checked || // schauen ob ein Radio-Button angeklickt wurde
		rounds15.checked ||
		rounds20.checked
	) {
		// Überprüfe ob aktuelle Runde !== max Rundenzahl ist
		if (activeRoundScore !== totalRoundScore) {
			// überprüfe ob das Gleiche gewählt wurde,
			if (choisPlayer == compChoise) {
				outputText.innerHTML = 'Unentschieden'; // falls ja = Unentschieden
				outputText.style.color = 'yellow';
				activeRoundScore++; // Rundenzähler um 1 erhöhen
				activeRound.innerHTML = activeRoundScore; // ins HTML schreiben
			}

			// Spieler hat Stein(1) UND Computer hat Papier(2)
			if (choisPlayer == 1 && compChoise == 2) {
				outputText.innerHTML = 'Der Computer gewinnt diese Runde!'; // Ausgabe Computer gewinnt diese Runde
				outputText.style.color = 'red';
				computerScore++; // Zähler Computer +1
				computerCounter.innerHTML = computerScore; //Zählerstand ins HTML schreiben
				activeRoundScore++; // Rundenzähler +1
				activeRound.innerHTML = activeRoundScore; // Rundenzähler ins HTML schreiben
			}

			// Spieler hat Stein(1) UND Computer hat Schere(3)
			if (choisPlayer == 1 && compChoise == 3) {
				outputText.innerHTML = 'Der Spieler gewinnt diese Runde!';
				outputText.style.color = 'green';
				playerScore++;
				playerCounter.innerHTML = playerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
			}

			// Spieler hat Papier(2) UND Computer hat Stein(1)
			if (choisPlayer == 2 && compChoise == 1) {
				outputText.innerHTML = 'Der Spieler gewinnt diese Runde!';
				outputText.style.color = 'green';
				playerScore++;
				playerCounter.innerHTML = playerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
			}

			// Spieler hat Papier(2) UND Computer hat Schere(3)
			if (choisPlayer == 2 && compChoise == 3) {
				outputText.innerHTML = 'Der Computer gewinnt diese Runde!';
				outputText.style.color = 'red';
				computerScore++;
				computerCounter.innerHTML = computerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
			}

			// Spieler hat Schere(3) UND Computer hat Stein(1)
			if (choisPlayer == 3 && compChoise == 1) {
				outputText.innerHTML = 'Der Computer gewinnt diese Runde!';
				outputText.style.color = 'red';
				computerScore++;
				computerCounter.innerHTML = computerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
			}

			// Spieler hat Schere(3) UND Computer hat Papier(2)
			if (choisPlayer == 3 && compChoise == 2) {
				outputText.innerHTML = 'Der Spieler gewinnt diese Runde!';
				outputText.style.color = 'green';
				playerScore++;
				playerCounter.innerHTML = playerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
			}
		} else {
			// wenn Rundenzähler maximum Runden erreicht hat vergleiche Spielstand und gib im HTML aus ob der Spieler gewonnen/verloren hat oder obs ein Unentschieden ist.
			if (playerScore > computerScore) {
				outputText.innerHTML = 'Yeaaaah 🥳 Du hast das Spiel gewonnen. 🥂';
				outputText.style.color = 'green';
				startConfetti();			
			}
			if (playerScore < computerScore) {
				outputText.innerHTML = 'Leider hast du das Spiel verloren. 😣';
				outputText.style.color = 'red';
			}
			if (playerScore == computerScore) {
				outputText.innerHTML = 'Unentschieden, spiel nochmal 😀';
				outputText.style.color = 'yellow';
			}
		}
	} else {
		document.getElementById('outputRadio').innerHTML = 'Bitte zuerst eine Rundenanzahl wählen!';
	}
}

function restart() {
	activeRound.innerHTML = 0;
	playerCounter.innerHTML = 0;
	computerCounter.innerHTML = 0;
	outputText.innerHTML = '';
	outputText.style.color = 'white';
	playerScore = 0;
	computerScore = 0;
	activeRoundScore = 0;
	stopConfetti();
}