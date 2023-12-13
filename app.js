// click button to start game

// const button = document.querySelector('#start')
// let quizContainer = document.querySelector('#questionsContainer');
// let answerOptions = document.querySelector('#answerOptions')
// let resultsContainer = document.querySelector('#results');
// let timer = document.querySelector('#timer')

let submitButton = document.querySelector('#submit');

const questionEl = document.querySelector('#question')

const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')

let currentQuiz = 0

// questions and answer options

const quizData = [
    {
        question: "What does HTML stand for?",
        a: 'Hyper Tension Maker Limited',
        b: 'HyperText Markup Language',
        c: 'How The Markup Loads',
        correct: 'b'
    },
    {
        question: "What does CSS stand for?",
        a: 'Centralized Style System',
        b: 'Class System Sheet',
        c: 'Cascading Style Sheet',
        correct: 'c'
    }
]

let score = 0



// function to start timer and present question
const startQuiz = () => {

const currentQuizData = quizData[currentQuiz]    
questionEl.textContent = currentQuizData.question
a_text.textContent = currentQuizData.a
b_text.textContent = currentQuizData.b
c_text.textContent = currentQuizData.c

currentQuiz++

// timer
    // let duration = 10
    // const countdown = () => {
    //     duration --
    //     if (duration === 0){
    //         alert('You\'re out of time!')
    //     }
    // }
    // let timerInterval = window.setInterval(countdown, 1000)

// display questions
    // let quizPageEl = document.querySelector('#quizContainer') 
    // quizPageEl.setAttribute("class", "hide")
    // questionsEl.removeAttribute("class") 
    // getQuestion()




}


// create event listener to start quiz and load next question
submitButton.addEventListener('click', () => {

currentQuiz++

startQuiz()


})





//create event listener for when user selects answer



// check to see if answer is right or wrong



// display "Correct!" or "Incorrect!" and subtract time on timer if answer is wrong



//game is over when all questions are answered or timer reaches 0



//user can save initials and score 



