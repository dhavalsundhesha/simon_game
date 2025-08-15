let gameSeq=[];
let usarSeq=[];

let btns = ["yellow","red","purple","green"];
let started =  false;
let leval = 0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
    levalUp();    
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levalUp(){
    usarSeq=[];
    leval++;
    h2.innerText = `Leval ${leval}`;
    
    let randInx = Math.floor(Math.random()*3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    //console.log(randInx);
    //console.log(randColor);
    //console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}

function checkAns(idx){
   if(usarSeq[idx] === gameSeq[idx]){
    if(usarSeq.length == gameSeq.length){
        setTimeout(levalUp,1000);
    }
   }else{
    h2.innerHTML = `Game over!Your score was <b>${leval}</b> <br> 
    Press any key to start.`;
    document.querySelector("body").style.background = "red";
    setTimeout(function(){
    document.querySelector("body").style.background= "white";
    },240);
    reset();
   }
    
}

function btnPress(){
    let btn = this; 
    userFlash(btn);
    userColor = btn.getAttribute("id");
    usarSeq.push(userColor);
    checkAns(usarSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");   //btn  asses html file se 
for(btn of allBtns){
    btn.addEventListener("click",btnPress);   
}

function reset(){
    started = false;
    gameSeq = [];
    usarSeq = [];
    leval = 0;
}
