let step = 1;

function nextQuestion(){

step++;

if(step==2){
document.getElementById("question").innerText="Kya tum ab mujhse pyaar nahi karte?";
document.getElementById("buttons").innerHTML=`
<button class="yes" onclick="nextQuestion()">Karta hu</button>
<button class="no" onclick="nextQuestion()">Nai karta</button>
`;
}

else if(step==3){
document.getElementById("question").innerText="Will you marry me? 💍";
document.getElementById("buttons").innerHTML=`
<button class="yes" onclick="showCard()">Yes</button>
<button class="no" id="runBtn">No</button>
`;

let noBtn=document.getElementById("runBtn");

noBtn.addEventListener("mouseover",function(){
let x=Math.random()*300-150;
let y=Math.random()*300-150;
noBtn.style.transform=`translate(${x}px,${y}px)`;
});

}

}

function showCard(){

document.getElementById("quiz").style.display="none";
document.getElementById("flowerCard").style.display="block";

}
