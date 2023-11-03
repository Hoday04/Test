let questarr = ["What is the capital of Germany?","In what year did WW1 start?","Where is Norway located?","25+3=?","Where can I buy the cheapest flights?"];
let answerarr = [["Berlin","Cologne","Augsburg","Hamburg"],["1914","1918","1913","1917"],["Europe","America","Africa","Asia"],["28","26","27","29"],["Aviasales","Kufar","Wildberries","Ozon"]];
let right;
let temp=0;
let j=1;
let RghtAnswers = 0;
let ButtonCont = document.getElementById("ButtonCont");
let arr = document.querySelectorAll("button");

function Replay(){
    location.reload();
}

function IsItFinish(){    
    let Qnumber = document.querySelector("h1");
    let quest = document.querySelector("p");
    if(temp===5){     
        for(let i=0;i<4;i++){
            arr[i].disabled = true;
        } 
        Qnumber.textContent = "Finish!";
        quest.textContent = "Right answers = "+RghtAnswers;
        let replayBut = document.createElement("button");
        replayBut.textContent = "Replay";
        replayBut.id = "replay";
        ButtonCont.appendChild(replayBut);
        ButtonCont.style.border = "2px solid black";
        temp=0;
        replayBut.onclick = function ReplayQuiz(){Replay();};        
    }
    else{
        Qnumber.textContent = "Question "+(temp+1)+"/"+questarr.length;
        quest.textContent = questarr[temp];
    }
}

function ButtonText(){
    IsItFinish();
    right = Math.floor(Math.random() * 4)
    for(let i=0;i<4;i++){
        arr[i].style.backgroundColor = "DarkSlateGray";
        arr[i].disabled = false;
        if(i===right){
            arr[i].textContent = answerarr[temp][0];
        }
        else{
            arr[i].textContent = answerarr[temp][j];
            j++;
        }
    }
    j=1;
    temp++;
}

function removeBut(){
    let but = document.getElementById("next");
    but.remove();
}

function nextBut(){
    let but = document.createElement("button");
    but.textContent = "Next";
    but.onclick = function Next(){ButtonText();removeBut();};
    but.id = "next";
    ButtonCont.appendChild(but);
}

function CheckAnswer(number){
    if(number===right){
        RghtAnswers++;
        arr[right].style.backgroundColor = "green";
        nextBut();
    }
    else{
        arr[number].style.backgroundColor = "red";
        nextBut();
    }
    for(let i=0;i<4;i++){
        arr[i].disabled = true;
    }
}
