function letsStart(){
    Qnumber.textContent = "Quiz!";
    quest.hidden = true;
    for(let i=0;i<4;i++){
        buttons[i].hidden = true;
    } 
    let startBut = document.createElement("button");
    startBut.textContent = "Start"; 
    startBut.style.backgroundColor = bgcolor; 
    startBut.id = "start";
    startBut.onclick = function showButtons(){StartQuiz();};  
    startBut.style.marginTop = "40px";
    document.getElementById("time").textContent = "Complex:"
    makeButton("Easy");
    makeButton("Medium");
    makeButton("Hard");
    ButtonCont.appendChild(startBut);
}

function makeButton(name){
    let p = document.createElement("p");
    p.style.height = "30px";
    p.id = "strt";
    let complBut = document.createElement("button");
    complBut.textContent = name; 
    if(name === "Easy"){
        complBut.style.backgroundColor = colorSelCompl; 
    }
    else{
        complBut.style.backgroundColor = bgcolor; 
    }
    complBut.id = name;
    complBut.onclick = function complexBut(){complexButClick(complBut);}; 
    p.appendChild(complBut);
    ButtonCont.appendChild(p);
}

function StartQuiz(){
    quest.hidden = false;
    for(let i=0;i<4;i++){
        buttons[i].hidden = false;
    };
    let startBut = document.getElementById("start"); 
    startBut.remove();
    ButtonText();
    tick=10;
    let timer = document.getElementById("time");
    timer.textContent = tick;
    Timer();
    complexFunc();
}

function complexFunc(){
    for(let i=0;i<3;i++){
        document.getElementById("strt").remove();
    }
    document.getElementById("Easy").remove();
    document.getElementById("Medium").remove();
    document.getElementById("Hard").remove();
}

function complexButClick(but){
    document.getElementById("Easy").style.backgroundColor = bgcolor;
    document.getElementById("Medium").style.backgroundColor = bgcolor;
    document.getElementById("Hard").style.backgroundColor = bgcolor;
    but.style.backgroundColor = colorSelCompl;
    complChecked = but.id;
    localStorage.setItem("Complex",complChecked);
    howItSHard();
    countRight = questions[numberOfQuest].rightAns.length;
}
