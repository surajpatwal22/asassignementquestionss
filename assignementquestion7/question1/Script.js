const quizDB =[
    {
        question : "Q1: What is the full form of HTML?",
        a:"Hello to my land",
        b:"Hey  text markup language",
        c:"Hyper text mark language",
        d: "Hyper text markup language",
        ans: "ans4"

    },
    {
        question : "Q2: What is the full form of Css?",
        a:"Come soon son",
        b:"cascading style sheet",
        c:"cascading style sheep",
        d:"cascading style son",
        ans: "ans3"

    },
    {
        question : "Q3: What is the full form of JS?",
        a:"java script",
        b:"Java sheep",
        c:"just son" ,
        d:"java style",
        ans: "ans1"

    },
    {
        question : "Q4: What is the full form of WWW?",
        a:"Worst world war",
        b:"Wrong world war",
        c:"World wid web",
        d:"world wide web",
        ans: "ans4"

    },
    
]

const Question = document.querySelector(".question");
const Option1 = document.querySelector("#option1");
const Option2 = document.querySelector("#option2");
const Option3 = document.querySelector("#option3");
const Option4 = document.querySelector("#option4");
const SubmitB = document.querySelector("#submit");

const Answers = document.querySelectorAll(".answer");
const ShowScore = document.querySelector("#showscore")

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

const questionList = quizDB[questionCount] ;
    Question.innerHTML = questionList.question;
    // console.log(quizDB[0].question);
    Option2.innerText = questionList.b;
    Option3.innerText = questionList.c;
    Option4.innerText = questionList.d;
    Option1.innerText = questionList.a;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
// console.log(Answers);
Answers.forEach((curAnsEl)=>{
    if (curAnsEl.checked) {
        answer = curAnsEl.id;
        }
})
return answer;
}
const deselectAll = () => {
    Answers.forEach((curAnsEl) => {curAnsEl.checked = false});
}
SubmitB.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    // console.log(checkedAnswer);
    if (quizDB[questionCount].ans === checkedAnswer ) {
        score++;
        
    }
    
    questionCount++;

    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    }else{
        ShowScore.innerHTML = `
        <h3 class="hd"> You Scored ${score}/${quizDB.length} </h3>
        <button class = "btn" onclick="location.reload()"> Play again</button>`;

        ShowScore.classList.remove("ScoreArea");

    }


});