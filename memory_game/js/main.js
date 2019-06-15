console.log("Up and Running");
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; */

/*console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree);
console.log("User flipped " + cardFour); */

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; 
let cardId

function checkForMatch () {
if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("you found a match!");
	} else {
	console.log("Sorry, try again.");
	}
};

function flipCard (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);
