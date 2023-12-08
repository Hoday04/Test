function makeAnswers(){
    let ans = document.getElementById("answers");
    qnumber.textContent = "Answers";
    quest.remove();
    ans.remove();
    for(let i=0;i<questions.length;i++){
        let ul = document.createElement("ul");
        ul.textContent = questions[i].question;
        for(let j=0;j<questions[i].rightAns.length;j++){
            let li = document.createElement("li");
            li.textContent = questions[i].rightAns[j];
            ul.appendChild(li);
        }
        buttonCont.insertBefore(ul,document.getElementById("Replay"));
    }
}