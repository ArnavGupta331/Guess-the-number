const number=document.getElementById("number");
const submit=document.getElementById("submit");
const restart=document.getElementById("restart");
const message=document.getElementById("message");
const att = document.getElementById("att"); 
const minnum = 1;
const maxnum = 100;
let ans = Math.floor(Math.random()*(maxnum-minnum + 1)) + minnum;
let attempts = 0;
   submit.onclick=function(){
     let guess=Number(number.value);
     if(isNaN(guess) || guess>maxnum || guess<minnum){
        message.textContent=`Please enter a valid number`;
     }
     else{
        attempts++;
     if(guess<ans){
        message.textContent=`got very low value`;
     }
     else if(guess>ans){
        message.textContent=`got very high value`;
     }
     else{
        message.textContent=`you got the correct value`
     }
    }
    att.textContent= attempts;
    
    }
 restart.onclick=function(){
    answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
    attempts = 0;
    message.textContent = "";
    guessInput.value = "";
 }
