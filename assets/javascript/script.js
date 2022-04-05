quizStartBtn = document.querySelector("#quiz-start");
quizHolder = document.querySelector(".quiz-title");
quizContent = document.querySelector('.quiz-content');
quizResult = document.querySelector('#result');
quizAnswer = document.querySelector('#answer');
quizTimer = document.querySelector('#timer-count');

var n = 0;
var secondsLeft = quizTimer.textContent;

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

        startTimer();
        populateQuiz();
        // viewHighScore();
}

function populateQuiz(){
        
        //populate the questions and choices
        var h1Question = document.createElement("h1");
        var ulChoices = document.createElement("ul");

        var liChoice1 = document.createElement("li");
        var liChoice2 = document.createElement("li");
        var liChoice3 = document.createElement("li");
        var liChoice4 = document.createElement("li");


        h1Question.textContent = quizQuestions[n].question;

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
        choice1.textContent = quizQuestions[n].choices[0];
        choice2.textContent = quizQuestions[n].choices[1];
        choice3.textContent = quizQuestions[n].choices[2];
        choice4.textContent = quizQuestions[n].choices[3];

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

                var choiceKey = quizQuestions[n].choices.indexOf(this.textContent)+1;

                console.log(choiceKey);


                quizResult.style.visibility = 'visible';
                
                if(choiceKey === quizQuestions[n].choiceAnswer){
                    quizAnswer.textContent = "Right!";
                    console.log("Right!");
                }else{
                    quizAnswer.textContent = "Wrong!"
                    console.log("Wrong!");
                    secondsLeft -= 10;
                }

                setTimeout(rehideAnswer, 2500);
                
                n++;
                quizContent.innerHTML = "";

                if(n < quizQuestions.length){
                    populateQuiz();
                }
            });
        }

}

//Timer for the quiz 
function startTimer(){

    var timerInterval = setInterval(function(){
        secondsLeft--;
        quizTimer.textContent = secondsLeft;

        //Timer stops when time is up or all questions are answered
        if(secondsLeft === 0 || n >= quizQuestions.length){
            clearInterval(timerInterval);
            gameOverPage();
        }

    },1000);

}

function gameOverPage(){
    quizContent.innerHTML ='<h1>All Done!</h1>'+
    '<p>Your final Score is <span id="score"></span>.</p>'+
    '<div>'+
        '<label>Enter Initials:</label>'+
        '<input type="text" id="initials">'+
        '<button id="highScoreSubmit">Submit</button>'+
    '</div>';

    finalScore = document.querySelector('#score');
    scoreSubmitBtn = document.querySelector('#highScoreSubmit');
    initialTextInput = document.querySelector('#initials');

    console.log(quizTimer.textContent);
    finalScore.textContent = quizTimer.textContent;


    
    scoreSubmitBtn.addEventListener('click',function(){

        var highScore = [initialTextInput.value.trim()+" - "+quizTimer.textContent];
        var scoreStorage;

        //check if array is empty
        if(localStorage.getItem("highScore") == null){
            scoreStorage = [];
        }else{
            scoreStorage = JSON.parse(localStorage.getItem("highScore"));
        }

        scoreStorage.push(highScore);
        
        localStorage.setItem("highScore", JSON.stringify(scoreStorage));
        // viewHighScore();

        console.log(localStorage.getItem("highScore"));
    });
}

function viewHighScore(){
    quizHolder.style.visibility = "hidden";

    quizContent.innerHTML ='<h1>Highscore!</h1>'+
    '<ol id="highScoreContainer">'+
    '</ol>'+
    '<div>'+
        '<button id="highScoreSubmit">Go Back</button>'+
        '<button id="highScoreSubmit">Clear HighScores</button>'+
    '</div>';

    highScoreContainer = document.querySelector('#highScoreContainer');
    var highScoreList = JSON.parse(localStorage.getItem('highScore'));

    console.log(highScoreList);
    console.log(highScoreList[0]);


        for(var i = 0; i < highScoreList.length; i++){
            var liTag = document.createElement("li");
            console.log(highScoreList[i].initial);
            console.log(highScoreList[i].score);
            liTag.textContent = highScoreList[i].initial + " - "+highScoreList[i].score; 

            highScoreContainer.appendChild(liTag);
        
    }
}

function rehideAnswer(){
    quizResult.style.visibility = 'hidden';
}

quizStartBtn.addEventListener('click', startQuiz);
//quizChoiceBtn.addEventListener('click', choiceResult);




