const bg = document.getElementById("BG");
const theme = document.getElementById("switch");
const ButtonCont = document.getElementById("ButtonCont");
const Qnumber = document.querySelector("h1");
const quest = document.getElementById("question");
const buttons = document.querySelectorAll("button");
const dark = "DarkSlateGray";
const light = "Sienna";

let questions = [
    {
        question: "Which of these is a vegetable?",
        falseAns: ["Pineapple"],
        rightAns: ["Tomato","Cucumber","Carrot"]
    },
    {
        question: "In what year did WW1 start?",
        falseAns: ["1918","1913","1917"],
        rightAns: ["1914"]
    },
    {
        question: "Where is Norway located?",
        falseAns: ["America","Africa","Asia"],
        rightAns: ["Europe"]
    },
    {
        question: "25+3=?",
        falseAns: ["26","27","29"],
        rightAns: ["28"]
    },
    {
        question: "Where can I buy the cheapest flights?",
        falseAns: ["Kufar","Wildberries","Ozon"],
        rightAns: ["Aviasales"]
    },

]