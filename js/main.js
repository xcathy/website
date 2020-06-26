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
ctx.shadowColor = "#D3D3D3";
ctx.shadowBlur = 4;

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
SHctx.shadowColor = "#D3D3D3";
SHctx.shadowBlur = 4;

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

    

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.07, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (theme == "pink"){
        /* clock center color = pink */
        ctx.strokeStyle = "#ffe2e7";
        ctx.lineWidth = radius*0.08;
    }
    else{
        /* default theme blue theme*/
        /* clock center color = blue */
        ctx.strokeStyle = "#daf9ff";
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
