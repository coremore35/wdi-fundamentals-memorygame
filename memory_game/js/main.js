console.log("Up and Running");
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; */

/*console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree);
console.log("User flipped " + cardFour); */

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
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
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	}
};

flipCard(0);
flipCard(2);






