// questions and possible answers with correct answer
const questionData = [
    {
        question: "When was JavaScript first released?",
        a: '1990',
        b: '1995',
        c: '2001',
        correct: 'b'
    },
    {
        question: "What are variables used for?",
        a: 'To compare values',
        b: 'To do math',
        c: 'To store data',
        correct: 'c'
    },
    {
        question: "Which of the following is a comparison operator?",
        a: '>',
        b: '===',
        c: '{}',
        correct: 'a'
    }
]

// select objects in the DOM
const questionEl = document.querySelector('#question')
const submitButton = document.querySelector('#submit')
const answerEls = document.querySelectorAll('.answer')
const quizContainer = document.querySelector('#quizContainer')
const timerDisplay = document.querySelector('#timer')
const startButton = document.querySelector('#start')
const displayResults = document.querySelector('#results')
const questionContainer = document.querySelector('#questionContainer')
const submitScore = document.querySelector('#submitScore')
const scoreDashboard = document.querySelector('#scoreDashboard')
const timeOut = document.querySelector('#timeOut')

const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')

let currentQuiz = 0
let score = 0
let duration = 60

// set initial visibility 
displayResults.classList.add('hide')
questionContainer.style.display="none"
scoreDashboard.classList.add('hide')
timeOut.classList.add('hide')

// start quiz and load question data
function loadQuiz() {
    deselectRadio()
    questionContainer.style.display = "block"

    const currentQuestionData = questionData[currentQuiz]

    questionEl.textContent = currentQuestionData.question
    a_text.textContent = currentQuestionData.a
    b_text.textContent = currentQuestionData.b
    c_text.textContent = currentQuestionData.c

// timer
    const countdown = () => {
        duration--
        timerDisplay.textContent = 'time: ' + duration
        if (duration === 0){
            timeOut.classList.remove('hide')
            startButton.classList.add('hide')
            hideQuestion()
        }
    }

    let timer = window.setInterval(countdown, 1000)

}

// radio buttons 
function selectedRadio() {    
    let answer = undefined

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

//reset radio buttons from question to question
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
            duration -= 10
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

// hide question function
const hideQuestion = () => {
    clearInterval(timer)
    displayResults.classList.remove('hide')
    questionContainer.style.display='none'
    document.getElementById("score").innerText = score
}

// set up score dashboard and visibility
const saveScore = () => {
    let userInitials = document.getElementById('userInitials').value
    let previousScore = JSON.parse(localStorage.getItem('previousScore')) ||[]
    previousScore.push({user:userInitials, score:score})
    localStorage.setItem('previousScore', JSON.stringify(previousScore))
    displayResults.classList.add('hide')
    questionContainer.style.display='none'
    scoreDashboard.classList.remove('hide')
    timerDisplay.classList.add('hide')
    startButton.classList.add('hide')
    for(let i = 0; i < previousScore.length; i++){
        let h4El = document.createElement("h4")
        h4El.textContent = `${previousScore[i].user} --- ${previousScore[i].score}`
        scoreDashboard.appendChild(h4El)
    }
}

// button functionality 
submitScore.addEventListener('click', saveScore)
startButton.addEventListener('click', loadQuiz)