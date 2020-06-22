$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    /*-click event on toggle menu*/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });
});
/*------side clocks--------*/
/*-------BC Clock UTC -8 --------*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
    drawFace(ctx, "blue", radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, "BC", radius);
}

/*------BC Clock end------- */
/*------SH Clock UTC +8 --------- */
var SHcanvas = document.getElementById("SHcanvas");
var SHctx = SHcanvas.getContext("2d");
var SHradius = SHcanvas.height / 2;
SHctx.translate(SHradius, SHradius);
SHradius = SHradius * 0.90
setInterval(drawSHClock, 1000); 


function drawSHClock(){
    drawFace(SHctx, "pink", SHradius);
    drawNumbers(SHctx, SHradius);
    drawTime(SHctx, "SH", radius);
}

/*------SH Clock end------- */


function drawFace(ctx, theme, radius) {
    var grad;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (theme == "pink"){
        /* clock face color pink theme*/
        grad = ctx.createRadialGradient(0, 0 ,radius * 0.9, 0, 0, radius * 1);
        grad.addColorStop(0, 'white');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(0.7, '#ffe2e7');
        grad.addColorStop(0.9, '#ec366e');
        grad.addColorStop(1, 'white');

        ctx.strokeStyle = grad;
        ctx.lineWidth = radius*0.1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.07, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        /*shadow effect on clock center pink theme */
        grad = ctx.createRadialGradient(0, 0 ,radius * 0.01, 0, 0, radius * 0.08);
        grad.addColorStop(0, '#ffe2e7');
        grad.addColorStop(0.25, '#ffb7c5');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(0.75, '#f4539c');
        grad.addColorStop(1, '#ffe2e7');
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius*0.08;
    }
    else{
        /* default theme blue theme*/
        /* clock face color blue theme */
        grad = ctx.createRadialGradient(0, 0 ,radius * 0.9, 0, 0, radius * 1);
        grad.addColorStop(0, 'white');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(0.7, '#b1f2ff');
        grad.addColorStop(0.9, '#2e616f');
        grad.addColorStop(1, 'white');
    
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius*0.1;
        ctx.stroke();
    
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.07, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        /*shadow effecy on clock center blue theme*/
        grad = ctx.createRadialGradient(0, 0 ,radius * 0.01, 0, 0, radius * 0.08);
        grad.addColorStop(0, '#daf9ff');
        grad.addColorStop(0.25, '#b1f2ff');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(0.75, '#3e6787');
        grad.addColorStop(1, '#daf9ff');

        ctx.strokeStyle = grad;
        ctx.lineWidth = radius*0.08;
    }

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

function drawTime(ctx, location, radius){
    var now = new Date();

    if (location == "SH"){
        var local = now.getTime();
        var localOffset = now.getTimezoneOffset(); //default in minutes
        localOffset = localOffset * 60000; //make it into milliseconds
        var utc = local + localOffset;
        var offset = 8; //Shanghai timezone = utc +8
        var SH = utc + (3600000 * offset);
        var SHTime = new Date(SH);

        var hour = SHTime.getHours();
        var minute = SHTime.getMinutes();
        var second = SHTime.getSeconds();
    }
    else{
        /* default timezone = local timezone */
        /* which is BC now */
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
    }
    
    //hour
    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.4, radius*0.06, "black");
    //minute
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.6, radius*0.04, "black");
    // second
    second = (second*Math.PI/30);
    drawHand(ctx, second, radius*0.7, radius*0.02, "black");
}

function drawHand(ctx, pos, length, width, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.lineWidth = width;

    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
    
}

  /*--------clocks end----------*/

  /*----------calendar----------*/
  var calendar = document.getElementById("cal");
  var calctx = calendar.getContext("2d");
  var calheight = calctx.height * 0.8;
   
  /*----------calendar end---------*/
