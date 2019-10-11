'use strict';

const STORE = [
  {
    question : 'How do you figure out how long it will take to double your money?',
    answer : ['The Rule of 72', 'Double your money and divide by months investing', 'Hard to determine', 'YOLO just wing it'],
    correctAnswer : 'The rule of 72. By dividing 72 by the annual rate of return you get a rough estiamte',
  },
  {
    question : 'What type of investment strategy gives the highest return?',
    answer : ['Savings', 'Mutual Funds', 'CD', 'Stocks'],
    correctAnswer : 'Stock',
  },
  {
    question : 'What is a maturity date?',
    answer : ['The day retirement fund is released', 'The date when debt is due for payment', 'When bond is due', 'Beginning of your grace period'],
    correctAnswer : 'The date when debt is due for payment',
  },
  {
    question : 'What is a dividend',
    answer : ['Your total stock value', 'Fee for stock broker', 'Stock share earnings', 'Value divided by time period to estimate value in a given time'],
    correctAnswer : 'Stock share earnings',
  },
  {
    question : 'When should you start saving for retirement',
    answer : ['As soon as you get your first paycheck', 'When you enter college', 'When you get advised by a broker', 'ASAP mang'],
    correctAnswer : 'ASAP mang',
  }
];
//global variables
let score = 0;
let questionNumber = 0;

function startQuiz() {
  //start quiz after pressing button
  $('#js-start-button').on('click', function() {
    $('.startQuiz').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.questionNumber').text(1);
    renderQuestion();
    console.log('quiz started');
  });
}

function generateQuestion() {
  //go through STORE to pull up questions
  //needs to update html to include form for question
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <h2>${STORE[questionNumber].question}</h2>
    <form class='form'>
    <fieldset class='answer-choices'>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answer[0]}" name="answer" required>
    <span>${STORE[questionNumber].answer[0]}</span>
    </label>
    <br>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answer[1]}" name="answer" required>
    <span>${STORE[questionNumber].answer[1]}</span>
    </label>
    <br>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answer[2]}" name="answer" required>
    <span>${STORE[questionNumber].answer[2]}</span>
    </label>
    <br>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answer[3]}" name="answer" required>
    <span>${STORE[questionNumber].answer[3]}</span>
    </label>
    </fieldset>
    <br>
    <button type="submit" class="submitButton">Submit</button>
    </form>
    </div>`;
  } else {
    return final();
  }
}

function renderQuestion() {
  $('.questionAnswerForm').html(generateQuestion());
  console.log('rendering');
}

function scoreUpdate() {
  //through each question updates the score if question is answered correctly
  score++;
}

function questionNumberUpdate() {
  //increases question 
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
  console.log('updated question number');
}

function checkAnswer() {
  //checks against correctAnswer to see if it's compatiable
}

function rightAnswer() {
  //when answer is answered correclty
  score ++;
}

function wrongAnswer() {
  //when answer is incorrect
  score;
}

function nextQuestion() {
  //next question
}

function final() {
  //displays final score\
}

function allFunctions() {
  startQuiz();
  scoreUpdate();
  checkAnswer();
  rightAnswer();
  wrongAnswer();
  nextQuestion();
}

$(allFunctions);