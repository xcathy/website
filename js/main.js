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
    ctx.lineWidth = radius*0.05;
    ctx.stroke();
}