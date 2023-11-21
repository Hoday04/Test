function Timer(){
    ptime = setInterval ((x) => 
    {  
        let timer = document.getElementById("time");
        if(tick>1){
            tick--;
        }
        else{
            if(numberOfQuest===5){
                stopTimer();
                numberOfQuest++;
                ButtonText();
            }
            else{
                tick=10;
                ClearBut();
                ButtonText();
            }
        }
        timer.textContent = tick;
    },1000);
}

function stopTimer(){
    let timer = document.getElementById("time");
    clearInterval(ptime);
    timer.remove();
}
