var canvas, ctx;
var test;
window.onload = function main() {
	canvas = document.createElement("canvas");
	canvas.width = 860;
	canvas.height = 560;
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);

	ctx.beginPath();
	ctx.moveTo(canvas.width/2, 0);
	ctx.lineTo(canvas.width/2, canvas.height);
	ctx.stroke();

	init();
	tick();
}

function init() {
	test = new Card(50,50);
}

function tick() {
	window.requestAnimationFrame(tick);

	update();
	render();
}

function update() {

}

function render() {
	test.render();
}

function Card(x, y) {
	var x = x, y = y;

	var is = Card.BACK;

	if (is == null) {
		var _c = document.createElement("canvas"); _c.width = 60; _c.height = 100;
		var card = _c.getContext("2d");

		card.fillStyle = "skyblue";
		card.fillRect(0, 0, 60, 100);

		card.fillStyle = "white";
		card.textAlign = "center"; 
		card.textBaseline = "middle"; 
		card.font = "60px arial";
		card.fillText("H",30,50);

		Card.BACK = new Image();
		Card.BACK.src = _c.toDataURL();

		is = Card.BACK;
	}

	this.render = function(ctx) {
		ctx.drawImage(is, 50, 50);
	}
}