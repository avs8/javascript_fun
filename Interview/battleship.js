/**
 * Created by manishsinha on 11/14/16.
 */
console.log("hello from test2");

var model = {
	boardSize: 7,
	numShips: 3,
	shipsSunk: 0,
	shipLength: 3,
	ships: [{locations: ["06", "16", "26"], hits: ["", "", ""]},
			{locations: ["24", "34", "44"], hits: ["", "", ""]},
			{locations: ["10", "11", "12"], hits: ["", "", ""]}],
	fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);
			if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessgae("Hit!");
				if (this.isSunk(ship)) {
					view.displayMessgae("You sank my battleship!");
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessgae("You missed.");
		return false;
	},
	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	}
};

var view = {
	displayMessgae: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;

	},
	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit")

	},
	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss")
	}
};

function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F"];
	if (guess === null || guess.length > 2) {
		alert("Oops, that's not on board");
	}
	var firstChar = guess.charAt(0);
	var row = alphabet.indexOf(firstChar);
	var col = guess.charAt(1);

	if (isNaN(row) || isNaN(col)) {
		alert("Oops, that's not on board");
	}
	else {
		if (row < 0 || row >= model.boardSize ||
			col < 0 || col >= model.boardSize) {
			alert("Oops, that's not on board");
		} else {
			return row + col
		}

	}
	return null;
}

var controller = {
	guesses: 0,
	processGuess : function (guess) {
		var location = parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessgae("You sank all my battleship, in " + this.guesses + "guesses");
			}
		}

	}

};

function init() {
	var fireButton = document.getElementById("fireButton");
	console.log(fireButton);
	fireButton.onclick = handleFireButton;
}

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	console.log(guessInput);
	var guess = guessInput.value;
	controller.processGuess(guess);

	guessInput.value = "";

}

window.onload = init;

// console.log(model.fire("53"));
// console.log(model.fire("06"));
//
// console.log(parseGuess("A0"));
console.log(model);
console.log(controller);
