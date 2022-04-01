quizStartBtn = document.querySelector("#quiz-start");
quizHolder = document.querySelector(".quiz-title");
quizContent = document.querySelector('.quiz-content');




var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans","alerts", "numbers"],
        choiceAnswer: 3
    },
    {
        question: "What is the first mathematical expression in the order of operations?",
        choices: ["addition", "parenthesis","division", "numbers"],
        choiceAnswer: 2
    }
];

function startQuiz(event){
    event.preventDefault();
    console.log("Button is called!");

    //Hide the title and populate the quiz
    quizHolder.style.visibility = "hidden";
    quizHolder.style.height = "0px";

    populateQuiz();
}

function populateQuiz(){



    //populate the questions and choices
    var h1Question = document.createElement("h1");
    var ulChoices = document.createElement("ul");

    var liChoice1 = document.createElement("li");
    var liChoice2 = document.createElement("li");
    var liChoice3 = document.createElement("li");
    var liChoice4 = document.createElement("li");


    h1Question.textContent = quizQuestions[0].question;

    quizContent.appendChild(h1Question);
    quizContent.appendChild(ulChoices);

    //create each button
    var choice1 = document.createElement("button");
    var choice2 = document.createElement("button");
    var choice3 = document.createElement("button");
    var choice4 = document.createElement("button");

    //set every attribute
    choice1.setAttribute("class","choiceButton");
    choice2.setAttribute("class","choiceButton");
    choice3.setAttribute("class","choiceButton");
    choice4.setAttribute("class","choiceButton");

    //gets the text out of each button
    choice1.textContent = quizQuestions[0].choices[0];
    choice2.textContent = quizQuestions[0].choices[1];
    choice3.textContent = quizQuestions[0].choices[2];
    choice4.textContent = quizQuestions[0].choices[3];

    ulChoices.appendChild(liChoice1);
    ulChoices.appendChild(liChoice2);
    ulChoices.appendChild(liChoice3);
    ulChoices.appendChild(liChoice4);

    liChoice1.appendChild(choice1);
    liChoice2.appendChild(choice2);
    liChoice3.appendChild(choice3);
    liChoice4.appendChild(choice4);

    //add and array of button choices
    quizChoiceBtn = document.querySelectorAll(".choiceButton");

    for(var i= 0; i<quizChoiceBtn.length; i++) {
        quizChoiceBtn[i].addEventListener('click', function(){

            var choiceKey = quizQuestions[0].choices.indexOf(this.textContent)+1;

            console.log(choiceKey);
            if(choiceKey === quizQuestions[0].choiceAnswer){
                console.log("Right!");
            }else{
                console.log("Wrong!");
            }

        });
    }

}

function choiceResult(event){
    console.log(event.target.textContent);
}

quizStartBtn.addEventListener('click', startQuiz);
//quizChoiceBtn.addEventListener('click', choiceResult);




