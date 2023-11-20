function LightTheme(){
    if(theme.checked){
        bg.classList.toggle('BG');
        bg.classList.toggle('light-theme');
        bgcolor = light;
        colorSelCompl = "olive";
        localStorage.setItem("theme","light-theme");
    }
    else{
        bg.classList.toggle('light-theme');
        bg.classList.toggle('BG');
        bgcolor = dark;
        colorSelCompl = "teal";
        localStorage.setItem("theme","BG");
    }
    let buts = document.querySelectorAll("button");
    for(let i=0;i<buts.length;i++){
        if(buts[i].style.backgroundColor!==colorFalseAns && buts[i].style.backgroundColor!==colorRightAns){
            if(buts[i].style.backgroundColor==="teal" || buts[i].style.backgroundColor==="olive"){
                buts[i].style.backgroundColor=colorSelCompl;
            }
            else{
                buts[i].style.backgroundColor = bgcolor;
            }
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
