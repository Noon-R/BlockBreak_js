var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var bx = canvas.width/2;
var by = canvas.height/2;
var dx = 1;
var dy = 1;

var wx = [0];
var wy = [0];
function drawBall(x,y){
    ctx.beginPath();{
        ctx.arc(x, y, 20, 0, Math.PI * 2, false);
        ctx.fillStyle = "green";
        ctx.fill();
    }ctx.closePath();
}

function drawWall(x,y){
    ctx.beginPath();{
        ctx.rect(x, y, 40, 20);
        ctx.fillStyle = "#44DDAA";
        ctx.fill();
    }ctx.closePath();
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bx += dx;
    by -= dy;

    if( bx <= 0 || bx >= canvas.width){
        dx *= -1;
    }

    if(by <= 0 || by >= canvas.height){
        dy *= -1;
    }

    drawBall(bx,by);
    drawWall(wx[0],wy[0]);
    
    
}

setInterval(draw, 10);