var score;
var last_play;
var broom;
var has_ball;
var is_in_tree;
var crying;



//Player One
		var score = 193;
        var last_play = 'Q';
        var broom = 'handle';
        var has_ball = false;
        var is_in_tree = false;
        var crying = false;
/*
//Player Two
        var score = 394;
        var last_play = "W";
        var broom = "none";
        var has_ball = true;
        var is_in_tree = true;
        var crying = false; 
        */
/*
//Player Three
		var score = "f";
        var last_play = 1.5;
        var broom = "brush";
        var has_ball = true;
        var is_in_tree = false;
        var crying = true
*/
if (last_play !== 'number') {
	console.log(score === 500);
}

if (crying === true) {
	console.log(score === score - 300);
}
else {
	console.log(score === score + 50);
}
if (last_play === 'Q') {
	console.log(score === score - 77);
}
if (is_in_tree === true && last_play !== 'number') {
	console.log(score === score + 395);
}
if (broom === 'handle') {
	console.log(score === score * 2);
}
else if 
	(broom === 'brush') {
		console.log(score === score * 3);
}
else {
	console.log(score / 2);
}
if (has_ball === true && is_in_tree === false) {
	console.log(score === score * 1.5);
}
else if 
	(crying === true) {
		console.log(null);
	}
if (last_play === 'number') {
	console.log(score === score * score);
}
console.log(score)