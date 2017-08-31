var player1 = document.querySelector(".player1");
var player2 = document.querySelector(".player2");
var resetbtn = document.querySelector(".reset");
var h1 = document.querySelector("h1");
var p1Display = document.querySelector(".p1Display");
var p2Display = document.querySelector(".p2Display");
var winner = document.querySelector(".winner");
var input = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

winner.innerHTML = winningScore;

// player 1
player1.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore ) {
			p1Display.classList.add("green");
			gameOver = true;
		};	
	};
	p1Display.innerHTML = p1Score;
}, false);


// player 2 
player2.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore ) {
			p2Display.classList.add("green");
			gameOver = true;
		};
	};
	p2Display.innerHTML = p2Score;
}, false);

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.innerHTML = p1Score;
	p2Display.innerHTML = p2Score;
	p1Display.classList.remove("green");
	p2Display.classList.remove("green");
	gameOver = false;
};

resetbtn.addEventListener("click", function(){
	reset();
	input.value = " ";
}, false);

input.addEventListener("change", function(){
	winningScore = Number(input.value);
	winner.innerHTML = input.value;
	reset();
}, false);