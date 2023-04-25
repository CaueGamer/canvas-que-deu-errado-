var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var color = "red";

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e)
{


    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;


    circle(mouseX , mouseY);
}

function circle(mouseX , mouseY)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 10;
ctx.arc(mouseX, mouseY, 40 ,0 , 2*Math.PI);
ctx.stroke();
}