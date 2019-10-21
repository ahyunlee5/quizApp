'use strict';

const STORE = [
  {
    question : 'How do you figure out how long it will take to double your money?',
    answer : [
      'The Rule of 72', 
      'Double your money and divide by months investing', 
      'Hard to determine', 
      'YOLO just wing it'
    ],
    correctAnswer : 'The Rule of 72',
  },
  {
    question : 'What type of investment strategy gives the highest return?',
    answer : [
      'Savings', 
      'Mutual Funds', 
      'CD', 
      'Stocks'
    ],
    correctAnswer : 'Stocks',
  },
  {
    question : 'What is a maturity date?',
    answer : [
      'The day retirement fund is released', 
      'The date when debt is due for payment', 
      'When bond is due', 
      'Beginning of your grace period'
    ],
    correctAnswer : 'The date when debt is due for payment',
  },
  {
    question : 'What is a dividend',
    answer : [
      'Your total stock value', 
      'Fee for stock broker', 
      'Stock share earnings', 
      'Value divided by time period to estimate value in a given time'
    ],
    correctAnswer : 'Stock share earnings',
  },
  {
    question : 'When should you start saving for retirement',
    answer : [
      'As soon as you get your first paycheck', 
      'When you enter college', 
      'When you get advised by a broker', 
      'ASAP mang'
    ],
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
    $('.questionAnswer').css('display', 'block');
    $('.questionNumber').text(questionNumber + 1);
    $('body').css('background', '#fceeef');
    console.log('quiz started');
  });
}

function generateQuestion() {
  //go through STORE to pull up questions
  //needs to update html to include form for question
  if (questionNumber < STORE.length) {
    return `<div class="question">
    <h2>${STORE[questionNumber].question}</h2>
    <form class='form'>
    <fieldset class='answer-choices'>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answer[0]}" name="answer" required/>
    <span>${STORE[questionNumber].answer[0]}</span>
    </label>
    <br>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answer[1]}" name="answer" required/>
    <span>${STORE[questionNumber].answer[1]}</span>
    </label>
    <br>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answer[2]}" name="answer" required/>
    <span>${STORE[questionNumber].answer[2]}</span>
    </label>
    <br>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answer[3]}" name="answer" required/>
    <span>${STORE[questionNumber].answer[3]}</span>
    </label>
    </fieldset>
    <br>
    <button type="submit" class="submitButton">Submit</button>
    </form>
    </div>`;
  } else {
    final();
    restartQuiz();
    $('.questionNumber').text(5)
  }
}

function renderQuestion() {
  $('.questionAnswer').html(generateQuestion());
  console.log('rendering');
}

function scoreUpdate() {
  //through each question updates the score if question is answered correctly
  score++;
  $('.score').text(score);
  console.log('score updated');
}

function questionNumberUpdate() {
  //implements increased question number 
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
  console.log('updated question number');
}

function selectAnswer() {
  //checks against correctAnswer to see if it's compatiable
  $('.form').on('submit', function(event) {
    event.preventDefault();
    let selectedAnswer = $('input:checked').val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (selectedAnswer === correctAnswer) {
      console.log('answer checked right');
      rightAnswer();
    } else {
      // selectedAnswer.parent().addClass('wrong');
      console.log('answer checked wrong')
      wrongAnswer();
      ;
    }
  });
}
function answerFeedbackRight() {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswer').html(`
  <div class="correctFeedback">
      <img src="https://media.giphy.com/media/64QCNzUMHp79HPEx2B/giphy.gif" class="feedbackImg">
    <p>
      <h1>That's correct!</h1>
    </p><button type=button class="nextButton">Next</button>
  </div>`);
}

function rightAnswer() {
  //when answer is answered correclty
  answerFeedbackRight();
  scoreUpdate();
  console.log('answer was right');
}
function answerFeedbackWrong() {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswer').html(`<div class="correctFeedback"><img src="https://media.giphy.com/media/9jJQoJl5UR8kg/giphy.gif" class="feedbackImg"><p><h1>Wrong!</h1><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

function wrongAnswer() {
  //when answer is incorrect
  answerFeedbackWrong();
}

function nextQuestion() {
  //next question
  $('.questionAnswer').on('click', '.nextButton', function (event) {
    questionNumberUpdate();
    renderQuestion();
    selectAnswer();
    console.log('next question')
  });
}

function final() {
  //displays final score\
  if (score >= 3) {
    $('.questionAnswer').html(`<div class="results correctFeedback"><h3>Great Job!</h3><p>You got ${score} / 5</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswer').html(`<div class="results correctFeedback"><h3>Educate YoSelf and Try again!</h3><p>You got ${score} / 5</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}
function restartQuiz() {
  $('#mainContainer').on('click', '.restartButton', function(event) {
    location.reload();
  });
}

function allFunctions() {
  startQuiz();
  renderQuestion();
  nextQuestion();
  selectAnswer();
}

$(allFunctions);