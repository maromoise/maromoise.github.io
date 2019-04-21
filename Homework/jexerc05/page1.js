/* Filename: app.js
   Javascript for Game 2 Homework
*/

//alert("ok");
//console.log("ok");

//global variables

var canvas; 
var ctx; 

var y = 20;
var x = 20;
var yP = 2;
var xP = 2;

running = false;

window.onload = init;



function init() {
    canvas = document.getElementById("game_area");
    ctx = canvas.getContext("2d");
    draw();

    document.querySelector("#sijak").addEventListener("click",function(){
        if(running){
          running = false;
          this.innerHTML = "Start";
          return ;
        }else{
          running = true;
          this.innerHTML = "Stop";
        }
        updateData();
    });

}

function updateData(){
    y+=yP;
    if(y>canvas.height-20)
        yP *=-1;
    if(y< 20)
        yP *=-1;

    x+=xP;
    if(x>canvas.width-20)
            xP *=-1
        if(x< 20)
            xP *=-1;

    draw();
    if(running)
    requestAnimationFrame(updateData);
}

function draw(){
  //CLEAR YOUR CANVAS
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  //DRAW CIRCLE
  ctx.fillStyle = "#f7f";
  ctx.beginPath();
  ctx.arc(x, y, 20, 0,2 * Math.PI);
  ctx.fill();


}