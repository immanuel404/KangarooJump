var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
var scorecount = null;

// ONCLICK JUMP
function jump(){
	if(character.classList != "animate"){
		character.classList.add("animate");
	}
	setTimeout(function(){
		character.classList.remove("animate");
	}, 500);
}

// CHECK FOR COLLISSION
function checkDead() {
	setInterval( () => {
		var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
		var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

		if(blockLeft < 35 && blockLeft > 0 && characterTop >= 130){
			scorecount = null;
			block.style.display = "none";
			character.style.opacity = "0";
			document.getElementById("start").style.display = 'none';
			document.getElementById("restart").style.display = 'block';
			document.getElementById("message").style.display = 'block';
		}
	},10);
}
checkDead()


function timer(){
	setInterval( () => {
		if(scorecount !== null){
			score<1000 ? score++ : 0;
			document.getElementById("timer").innerHTML = "Points: "+score;
		}
	},1000);
}
timer()


// TRIGGER START
function start(){
	scorecount = 1;
	document.getElementById("game-container").style.display = 'block';
}
// TRIGGER RESTART
function restart(){
	score = -1;
	scorecount = 1;
	document.getElementById("message").style.display = 'none';
	document.getElementById("block").style.display = "block";
	document.getElementById("character").style.opacity = "1";
}