let numberOfQuest=0;
let countRight = questions[numberOfQuest].rightAns.length;
let clickcount =0;
let RghtAnswers = 0;
let tick=10;

function Replay(){
    localStorage.removeItem("numberOfQuest");
    localStorage.removeItem("Complex");
    localStorage.removeItem("RghtAnswers");
    location.reload();
}

function itsFinish(){ 
    localStorage.removeItem("numberOfQuest");
    for(let i=0;i<4;i++){
        buttons[i].hidden = true;
    } 
    Qnumber.textContent = "Finish!";
    quest.textContent = "Right answers = "+RghtAnswers.toFixed();
    let replayBut = document.createElement("button");
    replayBut.textContent = "Replay"; 
    replayBut.style.backgroundColor = bgcolor; 
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
    if(numberOfQuest>=questions.length){
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
    localStorage.setItem("numberOfQuest",numberOfQuest);
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
    document.getElementById("progress").value+=(100/questions.length);
    let but = document.getElementById("next");
    but.remove();
    tick=10;
    let timer = document.getElementById("time");
    timer.textContent = tick;
    Timer();
    localStorage.setItem("RghtAnswers",RghtAnswers);
}

function nextBut(){
    let but = document.createElement("button");
    but.textContent = "Next";
    but.onclick = function Next(){ButtonText();removeBut();};
    but.id = "next";
    but.style.backgroundColor = bgcolor; 
    ButtonCont.appendChild(but);
}

function CheckAnswer(number){
    if(buttons[number].value==="right"){
        RghtAnswers+=1/countRight;
        buttons[number].style.backgroundColor = colorRightAns;
    }
    else{
        buttons[number].style.backgroundColor = colorFalseAns;
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

function whatQuest(){
    if(localStorage.getItem("numberOfQuest")){
        numberOfQuest = parseInt(localStorage.getItem("numberOfQuest"));
        if(localStorage.getItem("Complex")){
            complChecked = localStorage.getItem("Complex");
        }
        if(localStorage.getItem("RghtAnswers")){
            RghtAnswers = parseInt(localStorage.getItem("RghtAnswers"));
        }
        document.getElementById("progress").value=(100/questions.length)*numberOfQuest;
        howItSHard();
        countRight = questions[numberOfQuest].rightAns.length;
        StartQuiz();
    }
}
