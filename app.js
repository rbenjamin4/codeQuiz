// questions and possible answers with correct answer
const questionData = [
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

// select objects in the DOM
const questionEl = document.querySelector('#question')
submitButton = document.querySelector('#submit')
const answerEls = document.querySelectorAll('.answer')
const quizContainer = document.querySelector('#quizContainer')
const timerDisplay = document.querySelector('#timer')
const startButton = document.querySelector('#start')
const displayResults = document.querySelector('#results')
const questionContainer = document.querySelector('#questionContainer')

const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')

let currentQuiz = 0
let score = 0
let duration = 30

displayResults.classList.add('hide')
questionContainer.style.display="none"

// start quiz and load question data
function loadQuiz() {
    deselectRadio()
    questionContainer.style.display = "block"

    const currentQuestionData = questionData[currentQuiz]

    questionEl.textContent = currentQuestionData.question
    a_text.textContent = currentQuestionData.a
    b_text.textContent = currentQuestionData.b
    c_text.textContent = currentQuestionData.c

    const countdown = () => {
        duration--
        timerDisplay.textContent = 'time: ' + duration
        if (duration === 0){
            timerDisplay.textContent = 'Game over! You\'re time is up.'
            hideQuestion()
        }
    }

    let timer = window.setInterval(countdown, 1000)

}

function selectedRadio() {    
    let answer = undefined

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

function deselectRadio() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

submitButton.addEventListener('click', () => {
    const answer = selectedRadio()

    // Check answer, add to score for correct answer and deduct time if answer is wrong
    if(answer) {
        if(answer === questionData[currentQuiz].correct){
            score++
        }else {
            duration -= 5
            timerDisplay.textContent = 'time: ' + duration
        }
        
        currentQuiz++
        
        if(currentQuiz < questionData.length){
            loadQuiz()
        }
        else {
            hideQuestion()
        }
    }  

})

const hideQuestion = () => {
    displayResults.classList.remove('hide')
    questionContainer.style.display="none"
    clearInterval(timer)
}

startButton.addEventListener('click', loadQuiz)
