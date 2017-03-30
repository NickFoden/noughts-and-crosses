$(document).ready(function(){

"use strict";

var gamePlay = [0,0,0,0,0,0,0,0,0];

var currentPlayer = 1;

var youWinOne = "PLAYER ONE WINS!";
var youWinTwo = "PLAYER TWO WINS!";
 
$('.cell').click(function(){
	var id = $(this).attr('id');
	id = parseInt(id);
	console.log(id);
	if (gamePlay[id] == 0) { 
		if (currentPlayer == 1) {
			$(this).toggleClass('playerOne');
			gamePlay[id] = 1;
			currentPlayer = 2;
		}
		else {
			$(this).toggleClass('playerTwo');
			gamePlay[id] = 2;
			currentPlayer = 1;
		}
	}
	grade();
})

function grade(){
	 var game = JSON.stringify(gamePlay);
	if (game === JSON.stringify([1,1,1,2,2,0,0,0,0]) || game === [2,2,2,1,1,1,1,1] || game === [1,1,1,2,2,1,1,1,1]){
		$(".winner").html(youWinOne)
		}
	else if (game === [2,2,2,1,1,0,1,0,0] || game === [1,1,1,2,2,2,1,1,1] || game === [1,1,1,2,2,2,1,1,1]) {
		$(".winner").html(youWinTwo);
		}
	else{

		}
};

});
