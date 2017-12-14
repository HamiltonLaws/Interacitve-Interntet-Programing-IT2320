var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');
Main.StandardColor = "#999999";
Main.HighlightColor = "#FF0000";
Main.MousePressed = false;
Main.MX = 0;
Main.MY = 0;

Main.Circle = function(x, y, r, sAngle, eAngle)
{
	this.X = x;
	this.Y = y;
	this.Radius = r;
	this.StartAngle = sAngle;
	this.EndAngle = eAngle;

	this.IsSelected = function()
	{
		if (!Main.MousePressed) return false;
		var withinXAxisCoordinates = Main.MX > this.X && Main.MX < (this.X + this.Radius);
		var withinYAxisCoordinates = Main.MY > this.Y && Main.MY < (this.Y + this.Radius);
		return withinXAxisCoordinates && withinYAxisCoordinates;
	}
}

Main.Circles = [
	new Main.Circle(80, 50, 50, 0, 2*Math.PI),
	new Main.Circle(150, 150, 50, 0, 2*Math.PI),
	new Main.Circle(300, 300, 80, 0, 2*Math.PI)
];

Main.Canvas.onmousemove = function(event)
{
	if (event.offsetX)
	{
		mouseX = event.offsetX;
		mouseY = event.offsetY;
	}
	else if (event.layerX)
	{
		mouseX = event.layerX;
		mouseY = event.layerY;
	}

	Main.MX = mouseX;
	Main.MY = mouseY;
}

Main.MouseUp = function(mouseEvent)
{
	Main.MousePressed = false;
}

Main.MouseDown = function(mouseEvent)
{
	Main.MousePressed = true;
}

Main.Animate = function()
{
	Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);

	for (var i=0; i<Main.Circles.length; i++)
	{
		var circle = Main.Circles[i];
		Main.Context.beginPath();
		Main.Context.arc(circle.X, circle.Y, circle.Radius, circle.StartAngle,circle.EndAngle);
		Main.Context.fillStyle = circle.IsSelected() ? Main.HighlightColor : Main.StandardColor;
		Main.Context.fill();
		
	}

	requestAnimFrame(function() { Main.Animate(); });
}

window.requestAnimFrame = (function(callback)
{
	return window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(document).ready(function()
{
	Main.Animate();
	Main.Canvas.addEventListener('mouseup', function(mouseEvent) { Main.MouseUp(mouseEvent); });
	Main.Canvas.addEventListener('mousedown', function(mouseEvent) { Main.MouseDown(mouseEvent); });
});