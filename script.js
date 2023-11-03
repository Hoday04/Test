let questarr = ["Which of these is a vegetable?The question has several answers","In what year did WW1 start?","Where is Norway located?","25+3=?","Where can I buy the cheapest flights?"];
let FAarr = [["Pineapple"],["1918","1913","1917"],["America","Africa","Asia"],["26","27","29"],["Kufar","Wildberries","Ozon"]];
let RAarr = [["Tomato","Cucumber","Carrot"],["1914"],["Europe"],["28"],["Aviasales"]];
let temp=0;
let right;
let colright = RAarr[temp].length;
let tempra =0;
let j=0;
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
            arr[i].hidden = true;
        } 
        Qnumber.textContent = "Finish!";
        quest.textContent = "Right answers = "+RghtAnswers;
        let replayBut = document.createElement("button");
        replayBut.textContent = "Replay";
        ButtonCont.appendChild(replayBut);
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
    for(let i=0;i<colright;i++){
        right = Math.floor(Math.random() * 4);
        while(arr[right].value === "right"){
            right = Math.floor(Math.random() * 4);
        }
        arr[right].textContent = RAarr[temp][i];
        arr[right].value = "right";
    }    
    for(let i=0;i<4;i++){
        arr[i].style.backgroundColor = "DarkSlateGray";
        arr[i].disabled = false;
        if(arr[i].value !== "right"){
            arr[i].textContent = FAarr[temp][j];
            j++;
        }
    }
    j=0;
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
    if(arr[number].value==="right"){
        RghtAnswers+=1/colright;
        arr[number].style.backgroundColor = "green";
    }
    else{
        arr[number].style.backgroundColor = "red";
    }
    tempra++;
    if(tempra===colright){
        nextBut();
        for(let i=0;i<4;i++){
            arr[i].disabled = true;
            arr[i].value = "false";
        }
        tempra=0;   
        colright = RAarr[temp].length;
    }  
}
