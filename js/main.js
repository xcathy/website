$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    /*-click event on toggle menu*/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });
});
/*------side clock--------*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);


function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;
  
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    /* clock face color */
    grad = ctx.createRadialGradient(0, 0 ,radius * 0.98, 0, 0, radius * 1);
    grad.addColorStop(0, '#f0c88c');
    grad.addColorStop(1, '#c1905e');
   
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
  
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.07, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    /*shadow effecy on clock center */
    grad = ctx.createRadialGradient(0, 0 ,radius * 0.01, 0, 0, radius * 0.08);
    grad.addColorStop(0, '#aaa9ad');
    grad.addColorStop(0.25, '#aaa9ad');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(0.75, '#c1905e');
    grad.addColorStop(1, '#f0c88c');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.08;
    ctx.stroke();
}

function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = "bold " + radius * 0.18 + "px arial";

    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    
    
    for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.75);
        ctx.rotate(-ang);
        ctx.fillStyle = "black";
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.75);
        ctx.rotate(-ang);
    }

}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.4, radius*0.06, "red");
    //minute
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.6, radius*0.04, "green");
    // second
    second = (second*Math.PI/30);
    drawHand(ctx, second, radius*0.7, radius*0.02, "blue");
}

  function drawHand(ctx, pos, length, width, color) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineCap = "round";
    ctx.lineWidth = width;

    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
    
  }