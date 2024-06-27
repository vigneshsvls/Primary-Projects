const data=[
    {
        question:"which service is used to convert Text to Speech?",
        a:"Amazon Polly",
        b:"Amazon polly And Amazon lambda",
        c:"BOTH a & b",
        d:"none",
        correct:"c",
    },
    {
        question:"What is the time complexity of a quick sort?",
        a:"O(n^2)",
        b:"O(log(n))",
        c:"O(n)",
        d:"O(n*log(n))",
        correct:"d",
    },
    {
        question:"Which of the following is generally used for performing tasks like creating the structure of the relations?",
        a:"DDL(Data Definition Language)",
        b:"Query",
        c:"DML(Data Manipulation Language)",
        d:"Relational Schema",
        correct:"a",
    },
];

const quiz=document.getElementById('quiz')
const question1=document.getElementById('question')
const answer1=document.querySelectorAll('.answer')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitbn=document.getElementById('submit')

let currentquiz=0
let score=0

loadquiz()

function loadquiz(){
    deselectAnswers()

    const currentquizdata=data[currentquiz]
    question1.innerText=currentquizdata.question
    a_text.innerText=currentquizdata.a
    b_text.innerText=currentquizdata.b
    c_text.innerText=currentquizdata.c
    d_text.innerText=currentquizdata.d
}

function deselectAnswers(){
    answer1.forEach(answer2 => answer2.checked=false)
}

function getSelected(){
    let answer
    answer1.forEach(answer2 => {
        if(answer2.checked){
            answer=answer2.id
        }
    })
    return answer
}

submitbn.addEventListener('click', () => {
    const answer=getSelected()
    if(answer){
        if(answer==data[currentquiz].correct){
            score++
        }
        currentquiz++
        if(currentquiz<data.length){
            loadquiz()
        }
        else{
            quiz.innerHTML=`
            <h1> &nbsp &nbsp you answered ${score}/${data.length} questions correctly</h1>
            <button onclick="location.reload()">RELOAD</button>`
        }
    }
})
