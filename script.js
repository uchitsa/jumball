const cnvs = document.getElementById("gameCanvas");
const ctx = cnvs.getContext("2d");

let ball = {
    x: cnvs.width/2,
    y: cnvs.height/2,
    radius: 20,
    speedX: 5,
    speedY: 5,
    color: "green"
};

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}
