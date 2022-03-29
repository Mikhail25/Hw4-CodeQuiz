quizStartBtn = document.querySelector("#quiz-start");
quizHolder = document.querySelector(".quiz-holder");

var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans","alerts", "numbers"],
        choiceAnswer: 3
    }
];

function startQuiz(event){
    event.preventDefault();
    console.log("Button is called!");

    quizHolder.style.visibility = "hidden";
}



quizStartBtn.addEventListener('click', startQuiz);





