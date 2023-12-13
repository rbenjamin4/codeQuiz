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

const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')

let currentQuiz = 0
let score = 0


loadQuiz()

// start quiz and load question data
function loadQuiz() {
    deselectRadio()

    const currentQuestionData = questionData[currentQuiz]

    questionEl.textContent = currentQuestionData.question
    a_text.textContent = currentQuestionData.a
    b_text.textContent = currentQuestionData.b
    c_text.textContent = currentQuestionData.c

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
    const answer = selectedRadio

    if(answer) {
        if(answer === questionData[currentQuiz].correct){
            score++
        }
        
        currentQuiz++
        
        if(currentQuiz < questionData.length){
            loadQuiz()
        }
        else {
            alert('Game over!')
        }
    }  

})