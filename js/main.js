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
drawFace(ctx, radius);
drawNumbers(ctx, radius);
drawTime(ctx, radius);

function drawFace(ctx, radius) {
    var grad;
  
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#f0c88c';
    ctx.fill();

    /* clock face color */
    grad = ctx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#f0c88c');
    grad.addColorStop(0.25, '#ffe7c8');
    grad.addColorStop(0.3, '#f0c88c');
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
    grad.addColorStop(0, 'white');
    grad.addColorStop(0.25, 'white');
    grad.addColorStop(0.5, '#c1905e');
    grad.addColorStop(0.75, '#c1905e');
    grad.addColorStop(1, '#f0c88c');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.08;
    ctx.stroke();
}

function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.2 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    
    for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
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
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second = (second*Math.PI/30);
    drawHand(ctx, second, radius*0.78, radius*0.02);
}

  function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = width;
   
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }