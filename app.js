$(document).ready(function(){
"use strict";
var gamePlay = [0,0,0,0,0,0,0,0,0];
var currentPlayer = 1;
var youWinOne = "PLAYER ONE WINS!";
var youWinTwo = "PLAYER TWO WINS!";
 
$('.cell').click(function(){
	var id = $(this).attr('id');
	id = parseInt(id);
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

function oneWin(){
	$(".winner").addClass("winnerOne");
	$(".winner").html(youWinOne);
}

function twoWin(){
	$(".winner").addClass("winnerTwo");
	$(".winner").html(youWinTwo);
}

function grade(){
	var gradeGame = [ [gamePlay[0], gamePlay[1], gamePlay[2]], [gamePlay[3], gamePlay[4], gamePlay[5]], [gamePlay[6], gamePlay[7], gamePlay[8]] ];
		for (var i = 0; i<=2; i++) {
			//columns
			if (gradeGame[0][i] === gradeGame[1][i] && gradeGame[0][i] === gradeGame[2][i]) {
				if (gradeGame[0][i] === 1) {
					oneWin();
				}
				else if (gradeGame[0][i] === 2) {
					twoWin();
				}
			}
		};
		for (var i = 0; i<=2; i++) {
			//rows
			if (gradeGame[i][0] === gradeGame[i][1] && gradeGame[i][0] === gradeGame[i][2]) {
				if (gradeGame[i][0] === 1) {
					$(".winner").addClass("winnerOne");
					$(".winner").html(youWinOne);
				}
				else if (gradeGame[i][0] === 2) {
					$(".winner").addClass("winnerTwo");
					$(".winner").html(youWinTwo);
				}
			}
		};
		if (gradeGame[0][0] === gradeGame[1][1] && gradeGame[0][0] === gradeGame[2][2]) {
			//diagonals
			if (gradeGame[0][0] === 1) {
				$(".winner").addClass("winnerOne");
				$(".winner").html(youWinOne);
			}
			else if (gradeGame[0][0] === 2) {
				$(".winner").addClass("winnerTwo");
				$(".winner").html(youWinTwo);
			}
		};
		if (gradeGame[0][2] === gradeGame[1][1] && gradeGame[0][2] === gradeGame[2][0]) {
			//diagonals
			if (gradeGame[0][2] === 1) {
				$(".winner").addClass("winnerOne");
				$(".winner").html(youWinOne);
			}
			else if (gradeGame[0][2] === 2) {
				$(".winner").addClass("winnerTwo");
				$(".winner").html(youWinTwo);
			}
		};
	};
});
