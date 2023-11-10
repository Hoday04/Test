let questarr = ["Which of these is a vegetable?","In what year did WW1 start?","Where is Norway located?","25+3=?","Where can I buy the cheapest flights?"];
let FAarr = [["Pineapple"],["1918","1913","1917"],["America","Africa","Asia"],["26","27","29"],["Kufar","Wildberries","Ozon"]];
let RAarr = [["Tomato","Cucumber","Carrot"],["1914"],["Europe"],["28"],["Aviasales"]];
let temp=0;
let colright = RAarr[temp].length;
let tempra =0;
let RghtAnswers = 0;
let ButtonCont = document.getElementById("ButtonCont");
let arr = document.querySelectorAll("button");
let tick=10;
let bbgcolor = "DarkSlateGray";

function Timer(){
    ptime = setInterval ((x) => 
    {  
        let timer = document.getElementById("time");
        if(tick>1){
            tick--;
        }
        else{
            tick=10;
            IsItFinish();
            ClearBut();
            ButtonText();
        }
        timer.textContent = tick;
    },1000);
}

function Replay(){
    location.reload();
}

function IsItFinish(){    
    let Qnumber = document.querySelector("h1");
    let quest = document.getElementById("question");
    if(temp===5){   
        for(let i=0;i<4;i++){
            arr[i].hidden = true;
        } 
        Qnumber.textContent = "Finish!";
        quest.textContent = "Right answers = "+RghtAnswers.toFixed(2);
        let replayBut = document.createElement("button");
        replayBut.textContent = "Replay";    
        if(bbgcolor==="Sienna"){
            replayBut.style.backgroundColor = "Sienna";
        }
        else{
            replayBut.style.backgroundColor = "DarkSlateGray";
        }
        ButtonCont.appendChild(replayBut);
        replayBut.onclick = function ReplayQuiz(){Replay();};  
        let timer = document.getElementById("time");
        clearInterval(ptime);
        timer.remove();
        removeBut();  
    }
    else{
        Qnumber.textContent = "Question "+(temp+1)+"/"+questarr.length;
        if(colright>1){
            quest.textContent = questarr[temp]+"The question has several answers.";
        }
        else{
            quest.textContent = questarr[temp];
        }
    }
}

function ButtonText(){
    IsItFinish();
    let right;
    for(let i=0;i<colright;i++){
        right = Math.floor(Math.random() * 4);
        while(arr[right].value === "right"){
            right = Math.floor(Math.random() * 4);
        }
        arr[right].textContent = RAarr[temp][i];
        arr[right].value = "right";
    }    
    let j=0;
    for(let i=0;i<4;i++){
        arr[i].style.backgroundColor = bbgcolor;
        arr[i].disabled = false;
        if(arr[i].value !== "right"){
            arr[i].textContent = FAarr[temp][j];
            j++;
        }
    }
    temp++;
}

function removeBut(){
    let but = document.getElementById("next");
    but.remove();
    tick=10;
    let timer = document.getElementById("time");
    timer.textContent = tick;
    Timer();
}

function nextBut(){
    let but = document.createElement("button");
    but.textContent = "Next";
    but.onclick = function Next(){ButtonText();removeBut();};
    but.id = "next";
    if(bbgcolor==="Sienna"){
        but.style.backgroundColor = "Sienna";
    }
    else{
        but.style.backgroundColor = "DarkSlateGray";
    }
    ButtonCont.appendChild(but);
}

function CheckAnswer(number){
    let arr = document.querySelectorAll("button");
    if(arr[number].value==="right"){
        RghtAnswers+=1/colright;
        arr[number].style.backgroundColor = "green";
    }
    else{
        arr[number].style.backgroundColor = "red";
    }
    arr[number].disabled = true;
    tempra++;
    if(tempra===colright){
        clearInterval(ptime);
        nextBut();
        ClearBut();
    }  
}

function ClearBut(){
    for(let i=0;i<4;i++){
        arr[i].disabled = true;
        arr[i].value = "false";
    }
    tempra=0;   
    colright = RAarr[temp].length;
}

function LightTheme(){
    let bg = document.getElementById("BG");
    let theme = document.getElementById("switch");
    if(theme.checked){
        bg.classList.toggle('BG');
        bg.classList.toggle('light-theme');
        bbgcolor = "Sienna";
    }
    else{
        bg.classList.toggle('light-theme');
        bg.classList.toggle('BG');
        bbgcolor = "DarkSlateGray";
    }
    let arr = document.querySelectorAll("button");
    for(let i=0;i<arr.length;i++){
        if(arr[i].style.backgroundColor==="red" || arr[i].style.backgroundColor==="green"){}
        else{
            arr[i].style.backgroundColor = bbgcolor;
        }
    }
}
