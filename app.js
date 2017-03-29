$(document).ready(function){

var playerX =[];
var playerY =[];

var gamePlay = {};

function gameOn(){
$('.cell').click(function(){
	$(this).toggleClass('playerOne');
});
$('.cell').click(function(){
	$(this).toggleClass('playerTwo');
});

}

gameOn();

/*$('.cell').click(function(){
	$(this).toggleClass('playerOne');
});*/

}