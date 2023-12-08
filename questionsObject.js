let questions = [
    {
        question: "Which of these is a vegetable?",
        falseAns: ["Pineapple"],
        rightAns: ["Tomato","Cucumber","Carrot"]
    },
    {
        question: "What does seawater taste like?",
        falseAns: ["Sweet","Fresh","Sour"],
        rightAns: ["Salty"]
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
];
function howItSHard(){
    if(complChecked === "Easy"){
        questions = [
            {
                question: "Which of these is a vegetable?",
                falseAns: ["Pineapple"],
                rightAns: ["Tomato","Cucumber","Carrot"]
            },
            {
                question: "What does seawater taste like?",
                falseAns: ["Sweet","Fresh","Sour"],
                rightAns: ["Salty"]
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
        ];
    }
    else if(complChecked === "Medium"){
        questions = [
            {
                question: "The largest island on the planet?",
                falseAns: ["Madagaskar","Australia","Iceland"],
                rightAns: ["Greenland"]
            },
            {
                question: "The largest country on the planet?",
                falseAns: ["USA","China","Canada"],
                rightAns: ["Russia"]
            },
            {
                question: "The largest ocean on the planet?",
                falseAns: ["Indian","Atlantic","North Arctic"],
                rightAns: ["Pacific"]
            },
            {
                question: "In what year did WW1 start?",
                falseAns: ["1918","1913","1917"],
                rightAns: ["1914"]
            },
            {
                question: "The largest representative of mammals?",
                falseAns: ["Elephant","Lion","Bear"],
                rightAns: ["The blue whale"]
            },
        ];
    }
    else{
        questions = [
            {
                question: "There are no windows or doors a full room of guests?",
                falseAns: ["Apple","Melon","Carrot"],
                rightAns: ["Cucumber"]
            },
            {
                question: "It does not burn in fire and does not sink in water?",
                falseAns: ["Tree","House","Ship"],
                rightAns: ["Ice"]
            },
            {
                question: "Toothy, not biting?",
                falseAns: ["Shovel","Charging","Pen"],
                rightAns: ["Rake"]
            },
            {
                question: "The whole world dresses, and she is naked?",
                falseAns: ["Book","Pencil","Blanket"],
                rightAns: ["Needle"]
            },
            {
                question: "Five rooms one door?",
                falseAns: ["Hat","Trousers","Jacket"],
                rightAns: ["Gloves"]
            },
        ];
    }
}
