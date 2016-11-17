/**
 * Created by manishsinha on 11/15/16.
 */

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52,
			  54, 48, 69, 34, 58, 51, 52, 44, 51,
			  69, 64, 66, 55, 52, 61, 46, 31, 57,
			  52, 44, 18, 41, 53, 55, 61, 51, 44];


function printAndGetScores(scores) {
	var highScore = 0;
	for (var i = 0; i < scores.length; i++) {
		var output = "Bubbles Solution #" + i + " Score " + scores[i];
		console.log(output);

		if (scores[i] > highScore) {
			highScore = scores[i];
		}
	}

	return highScore;

}

function findBestSolutions(scores, highScore) {

	var highScoresIndex = [];
	for (var j = 0; j < scores.length; j++) {
		if (scores[j] == highScore) {
			highScoresIndex.push(j);
		}
	}
	return highScoresIndex;
}

var highScore = printAndGetScores(scores);
console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = findBestSolutions(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);
