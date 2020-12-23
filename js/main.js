$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    /*-click event on toggle menu*/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });
});
/*------side clocks--------*/
/*--------- functions to build a clock ---------*/
function drawFace(ctx, ctclr, bgclr, radius) {
    //the color of the clock face = bgclr
    ctx.beginPath();
    ctx.fillStyle = bgclr;
    ctx.fillRect(-radius, -radius, 2*radius, 2*radius);
    ctx.stroke();
    //the clock center's color = ctclr

    ctx.beginPath();
    ctx.fillStyle = ctclr;
    ctx.fillRect(-radius*0.08, -radius*0.08, 2*radius*0.08, 2*radius*0.08);
    ctx.stroke();
}

function drawNumbers(ctx, nbclr, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.18 + "px arial";

    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    
    //the color of the numbers = nbclr
    for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.8);
        ctx.rotate(-ang);
        ctx.fillStyle = nbclr;

        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.8);
        ctx.rotate(-ang);
    }

}

function drawTime(ctx, bgclr, ctclr, nbclr, hdclr, off, radius){
    //draw the face and numbers again and again to clear the canvas
    drawFace(ctx, ctclr, bgclr, radius);
    drawNumbers(ctx, nbclr, radius);

    var now = new Date();

    var local = now.getTime();
    var localOffset = now.getTimezoneOffset(); //default in minutes
    localOffset = localOffset * 60000; //make it into milliseconds

    var utc = local + localOffset;
    var offset = off; 
    
    var tz = utc + (3600000 * offset); //timezone = utc +off
    var tzTime = new Date(tz);

    var hour = tzTime.getHours();
    var minute = tzTime.getMinutes();
    var second = tzTime.getSeconds();
    
    //hour
    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.4, radius*0.06, hdclr);
    //minute
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.6, radius*0.04, hdclr);
    // second
    second = (second*Math.PI/30);
    drawHand(ctx, second, radius*0.7, radius*0.02, hdclr);
}

function drawHand(ctx, pos, length, width, hdclr) {
    //clock hands color = hdclr
    ctx.beginPath();
    ctx.strokeStyle = hdclr;

    ctx.lineWidth = width;

    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

/*-------local Clock offset = 0 --------*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var radius = canvas.height / 2;
ctx.translate(radius, radius);

setInterval(drawClock, 1000);

function drawClock() {
  drawTime(ctx, '#262626', 'white', 'white', 'white', 0, radius); // drawTime(ctx, bgclr, ctclr, nbclr, hdclr, offset, radius)
}
/*------local Clock end------- */

/*------SH Clock UTC +8, offset = 8 --------- */
var SHcanvas = document.getElementById("SHcanvas");
var SHctx = SHcanvas.getContext("2d");

var SHradius = SHcanvas.height / 2;
SHctx.translate(SHradius, SHradius);
SHradius = SHradius * 0.90
setInterval(drawSHClock, 1000); 


function drawSHClock(){
  drawTime(SHctx, '#262626', 'white', 'white', 'white', 8, radius);
}

/*------SH Clock end------- */



  /*--------clocks end----------*/

  /*----------calendar----------*/
  var calendar = document.getElementById("cal");
  var calctx = calendar.getContext("2d");
  calctx.imageSmoothingEnabled = false;
  calctx.shadowColor = "#6a888c";
  calctx.shadowBlur = 4;

  calctx.beginPath();
  calctx.rect(30, 30, 340, 340);
  calctx.fillStyle = "white";
  calctx.fill();

  calctx.beginPath();
  calctx.rect(40, 40, 320, 70);
  calctx.fillStyle = "#ffe2e7";
  calctx.fill();

  var today = new Date();
  var dd = String(today.getDate());
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var mm = months[today.getMonth()];

  drawMonth(calctx);
  drawDay(calctx);

    /*-----draw month----- */
  function drawMonth(calctx){
    calctx.font = "bold 45px Arial";
    calctx.translate(140, 90);
    calctx.fillStyle = "black";
    calctx.fillText(mm.toUpperCase(), 0, 0);
  }
  /*-------draw day-------*/
  function drawDay(calctx){
    calctx.font = "160px Arial";
    calctx.translate(-30, 200);
    calctx.fillStyle = "#003853";
    calctx.fillText(dd, 0, 0);
  }


  /*----------calendar end---------*/
