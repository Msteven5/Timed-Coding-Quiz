const timeOnScreen = document.querySelector(".timer");

const questionsOnScreen = document.querySelector(".questions");

const startQuiz = document.querySelector("#start")

const scoreboard = document.querySelector("#scoreboard")

const quizBegin = document.querySelector(".questions")
var secondsLeft = 60;
var timerInterval; 

//timer that allows the page to run, giving the player 60 seconds
function countDown() {
        timerInterval = setInterval(function() {
        secondsLeft--;
        timeOnScreen.textContent = "Time Left: " + secondsLeft;
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("You are out of time, this test is over. Please refresh to try again.");
            document.body.setAttribute("class","unseen")
        }
        
    }, 1000);
}

startQuiz.addEventListener("click", function() {
 startQuiz.setAttribute("class","unseen"),
 scoreboard.setAttribute("class","unseen")
 quizBegin.setAttribute("class","seen")
 countDown();
});

const responseOnScreen = document.querySelector(".response");
var wrongAnswers = document.getElementsByClassName("wrong")

for (var i = 0; i < wrongAnswers.length; i++) {
    wrongAnswers[i].addEventListener("click", function () {
        secondsLeft = Math.max(secondsLeft - 5, 0);
          responseOnScreen.textContent ="Wrong Answer - 5 second penalty"
            setTimeout(function() {
            responseOnScreen.textContent = "";   
    }, 1500);
    });
}

const correctAnswers = document.getElementsByClassName("correct");

const questions = [
 document.querySelector("#question1"),
 document.querySelector("#question2"),
 document.querySelector("#question3"),
 document.querySelector("#question4")]

 let shownQuestion = 0;

 var quizOver = document.getElementsByClassName("questions")
 
  for (var i = 0; i < correctAnswers.length; i++) { 
    correctAnswers[i].addEventListener("click", function() {
      responseOnScreen.textContent ="Correct! Next Question"
      setTimeout(function() {
        responseOnScreen.textContent = "";   
        }, 1000);
        questions[shownQuestion].setAttribute("class","unseen");
        shownQuestion++;
          if (shownQuestion < questions.length) {
            questions[shownQuestion].setAttribute("class","seen")
          } else {
            clearInterval(timerInterval)
            var submitInitials = prompt("Quiz Complete! Input Initials Here to Save High Score!");
            var finalScore = JSON.parse(localStorage.getItem("finalScore")) || [];
            finalScore.push({ initials: submitInitials, score: secondsLeft });
            localStorage.setItem("finalScore", JSON.stringify(finalScore));
            window.location.href = "scoreboard.html"
          }
      })
    }
