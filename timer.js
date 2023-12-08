function Timer(){
    ptime = setInterval ((x) => 
    {  
        let timer = document.getElementById("time");
        if(tick>1){
            tick--;
        }
        else{
            if(numberOfQuest===5){
                document.getElementById("progress").value+=(100/questions.length);
                stopTimer();
                numberOfQuest++;
                ButtonText();
            }
            else{
                tick=10;
                ClearBut();
                ButtonText();
            }
            document.getElementById("progress").value+=(100/questions.length);
        }
        timer.textContent = tick;
    },1000);
}

function stopTimer(){
    let timer = document.getElementById("time");
    clearInterval(ptime);
    timer.remove();
}
