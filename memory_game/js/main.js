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

var cardOne = cards[0];
cardsInPlay.push("cardOne");
console.log("User flipped" + cardOne); 

var cardTwo = cards[2];
cardsInPlay.push("cardThree");
console.log("User flipped" + cardThree);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You've found a match!")
	} else {
		alert ("Sorry, try again.");