let numberOfQuest=0;
let countRight = questions[numberOfQuest].rightAns.length;
let clickcount =0;
let RghtAnswers = 0;
let tick=10;
let bgcolor = dark;

function Timer(){
    ptime = setInterval ((x) => 
    {  
        let timer = document.getElementById("time");
        if(tick>1){
            tick--;
        }
        else{
            tick=10;
            ClearBut();
            ButtonText();
        }
        timer.textContent = tick;
    },1000);
}

function stopTimer(){
    let timer = document.getElementById("time");
    clearInterval(ptime);
    timer.remove();
}

function Replay(){
    location.reload();
}

function itsFinish(){      
    for(let i=0;i<4;i++){
        buttons[i].hidden = true;
    } 
    Qnumber.textContent = "Finish!";
    quest.textContent = "Right answers = "+RghtAnswers.toFixed();
    let replayBut = document.createElement("button");
    replayBut.textContent = "Replay";  
    ButtonCont.appendChild(replayBut);
    replayBut.onclick = function ReplayQuiz(){Replay();};  
    stopTimer();
    removeBut();
}

function itsNotFinish(){
    Qnumber.textContent = "Question "+(numberOfQuest+1)+"/"+questions.length;
    if(countRight>1){
        quest.textContent = questions[numberOfQuest].question+"The question has several answers.";
    }
    else{
        quest.textContent = questions[numberOfQuest].question;
    }
}

function ButtonText(){
    if(numberOfQuest===questions.length){
        itsFinish();
    }
    else{
        itsNotFinish();
    }
    let right;
    for(let i=0;i<countRight;i++){
        right = Math.floor(Math.random() * 4);
        while(buttons[right].value === "right"){
            right = Math.floor(Math.random() * 4);
        }
        buttons[right].textContent = questions[numberOfQuest].rightAns[i];
        buttons[right].value = "right";
    }   
    falseButtonText(); 
    numberOfQuest++;
}

function falseButtonText(){
    let j=0;
    for(let i=0;i<4;i++){
        buttons[i].style.backgroundColor = bgcolor;
        buttons[i].disabled = false;
        if(buttons[i].value !== "right"){
            buttons[i].textContent = questions[numberOfQuest].falseAns[j];
            j++;
        }
    }
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
    if(bgcolor===light){
        but.style.backgroundColor = light;
    }
    else{
        but.style.backgroundColor = dark;
    }
    ButtonCont.appendChild(but);
}

function CheckAnswer(number){
    if(buttons[number].value==="right"){
        RghtAnswers+=1/countRight;
        buttons[number].style.backgroundColor = "green";
    }
    else{
        buttons[number].style.backgroundColor = "red";
    }
    buttons[number].disabled = true;
    clickcount++;
    if(clickcount===countRight){
        clearInterval(ptime);
        nextBut();
        ClearBut();
        clickcount=0;
    }  
}

function ClearBut(){
    for(let i=0;i<4;i++){
        buttons[i].disabled = true;
        buttons[i].value = "false";
    }   
    countRight = questions[numberOfQuest].rightAns.length;
}

function LightTheme(){
    if(theme.checked){
        bg.classList.toggle('BG');
        bg.classList.toggle('light-theme');
        bgcolor = light;
        localStorage.setItem("theme","light-theme");
    }
    else{
        bg.classList.toggle('light-theme');
        bg.classList.toggle('BG');
        bgcolor = dark;
        localStorage.setItem("theme","BG");
    }
    for(let i=0;i<buttons.length;i++){
        if(buttons[i].style.backgroundColor!=="red" || buttons[i].style.backgroundColor!=="green"){
            buttons[i].style.backgroundColor = bgcolor;
        }
    }
}

function startSite(){
    if(localStorage.getItem("theme")==="light-theme"){      
        theme.checked = true;
        LightTheme();
    }
    else if(localStorage.getItem("theme")==="BG"){
        bg.classList.toggle('light-theme');
        bg.classList.toggle('BG');
        theme.checked = false;
        LightTheme();
    }
}
