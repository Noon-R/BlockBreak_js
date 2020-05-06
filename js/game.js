var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var bx = canvas.width/2;
var by = canvas.height/2;
var br = 10;
var dx = 1;
var dy = 1;

var px = canvas.width/2;
var py = canvas.height - 50;

var wx = [100];
var wy = [0];
function drawBall(x,y,r){
    ctx.beginPath();{
        ctx.arc(x, y, r, 0, Math.PI * 2, false);
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

function coollisionArcRect(bx,by,br,wx,wy,ww,wh) {

    if( Math.abs(bx - (wx + ww/2)) <= br/2 + ww/2 && Math.abs(by - (wy + wh/2)) <= br/2 + wh/2 ){
        if( Math.abs(bx - (wx + ww/2)) < br/2 + ww/2 ){
            dx *= -1;
        }else if( Math.abs(by - (wy + wh/2)) < br/2 + wh/2 ){
            dy *= -1;
        }else{
            dx *= -1;
            dy *= -1;
        }

    }

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

    coollisionArcRect(bx,by,br,wx[0],wy[0],40,20);
    coollisionArcRect(bx,by,br,px,py,40,20);

    drawBall(bx,by,br);
    drawWall(wx[0],wy[0]);
    drawWall(px,py);
    
    
}

setInterval(draw, 10);