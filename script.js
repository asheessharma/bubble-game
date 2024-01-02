function bubbleMaker(){
    var bubble=""
for(var i=1;i<=154;i++){
    var rn=Math.floor(Math.random()*10);
    bubble += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=bubble;
}
var timer=6;
function runTimer(){
     var timerInt=  setInterval(()=>{
           if(timer>0){
            timer--;
            document.querySelector("#timerBox").textContent=timer;
           }
           else{
             clearInterval(timerInt);
             document.querySelector("#pbtm").innerHTML=`<h4>Game Over!</h4>`
           }
        },1000);
}
var hits=0;
function hitFun(){
    hits=Math.floor(Math.random()*10);
    document.querySelector("#hitbox").textContent=hits;
}
var score=0;
function scoreFun(){
    score+=10;
    document.querySelector("#scorebox").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click", function(details){
    var value=Number(details.target.textContent);
    if(value===hits){
        scoreFun();
        hitFun();
        bubbleMaker();
    }
});



hitFun();
runTimer();
bubbleMaker();
