$(document).ready(function(){

var gamePlay = [1,1,1,1,1,1,1,1,1];

var currentPlayer = 1;

var youWinOne = "PLAYER ONE WINS!";
var youWinTwo = "PLAYER TWO WINS!";

function playGame(){ 
	$('.cell').click(function(){
		grade();
		var id = $(this).attr('id');
		console.log(id);
		if (gamePlay[id] == 1) { 
			if (currentPlayer == 1) {
			$(this).toggleClass('playerOne')
			gamePlay[id] = 2;
			currentPlayer = 2;
			}
			else {
			$(this).toggleClass('playerTwo')
			gamePlay[id] = 3;
			currentPlayer = 1;
				}
			}
	})
};

function grade(){
	if (gamePlay == [2,2,2,3,3,3,1,1,1]) {
		$(".winner").html(youWinOne);
	}
}

playGame();

/*function gameOn(){ 
	$(".cell").click(function(){
		if (currentPlayer == 1) {
		$(this).toggleClass('playerOne');
			currentPlayer = 2;
		}
		else {
		$(this).toggleClass('playerTwo');
		currentPlayer =1;
		}

	});
};

gameOn();*/

/*var playerX ={
	A: "no",
	B: "no",
	C: "no",
	D: "no",
	E: "no",
	F: "no",
	G: "no",
	H: "no",
	I: "no",
};
//playerOne
var playerY ={
	A: "no",
	B: "no",
	C: "no",
	D: "no",
	E: "no",
	F: "no",
	G: "no",
	H: "no",
	I: "no",
};
//playerTwo
*/

/*
function gameOn(){
$('#A').click(function(){
	if (currentPlayer == 1) {
	$(this).toggleClass('playerOne');
	currentPlayer = 2;
	}
	else {
	$(this).toggleClass('playerTwo');
	currentPlayer =1;
	}
});

$('#B').click(function(){
	if (currentPlayer == 1) {
	$(this).toggleClass('playerOne');
	currentPlayer = 2;
	}
	else {
	$(this).toggleClass('playerTwo');
	currentPlayer =1;
	}
});

$('#C').click(function(){
	if (currentPlayer == 1) {
	$(this).toggleClass('playerOne');
	currentPlayer = 2;
	}
	else {
	$(this).toggleClass('playerTwo');
	currentPlayer =1;
	}
});

$('#D').click(function(){
	if (currentPlayer == 1) {
	$(this).toggleClass('playerOne');
	currentPlayer = 2;
	}
	else {
	$(this).toggleClass('playerTwo');
	currentPlayer =1;
	}
});

$('#E').click(function(){
	if (currentPlayer == 1) {
	$(this).toggleClass('playerOne');
	currentPlayer = 2;
	}
	else {
	$(this).toggleClass('playerTwo');
	currentPlayer =1;
	}
});

$('#F').click(function(){
	if (currentPlayer == 1) {
	$(this).toggleClass('playerOne');
	currentPlayer = 2;
	}
	else {
	$(this).toggleClass('playerTwo');
	currentPlayer =1;
	}
});

$('#G').click(function(){
	if (currentPlayer == 1) {
	$(this).toggleClass('playerOne');
	currentPlayer = 2;
	}
	else {
	$(this).toggleClass('playerTwo');
	currentPlayer =1;
	}

});

$('#H').click(function(){
	if (currentPlayer == 1) {
	$(this).toggleClass('playerOne');
	currentPlayer = 2;
	}
	else {
	$(this).toggleClass('playerTwo');
	currentPlayer =1;
	}
});

$('#I').click(function(){
	if (currentPlayer == 1) {
	$(this).toggleClass('playerOne');
	currentPlayer = 2;
	}
	else {
	$(this).toggleClass('playerTwo');
	currentPlayer =1;
	}
});

}*/

/*$('.cell').click(function(){
	$(this).toggleClass('playerOne');
});*/
});
