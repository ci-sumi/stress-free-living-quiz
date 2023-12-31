// Add  questions
const questions = [
    {
        question: "What is the primary hormone released during the body's fight or flight response to stress?",
        answers: [
            { text: "Insulin", correct: false },
            { text: "Dopamine", correct: false },
            { text: "Cortisol", correct: true },
            { text: "Serotonin", correct: false },
        ]
    },
    {
        question: "Which of the following is a healthy coping mechanism for stress?",
        answers: [
            { text: "Smoking", correct: false },
            { text: "Regular exercise", correct: true },
            { text: "Excessive alcohol consumption", correct: false },
            { text: "Avoiding social interactions", correct: false },
        ]
    },
    {
        question: "What is mindfulness meditation primarily focused on?",
        answers: [
            { text: "Ignoring emotions", correct: false },
            { text: "Staying in the past", correct: false },
            { text: "Being present in the moment", correct: true },
            { text: "Multitasking", correct: false },
        ]
    },
    {
        question: "Which of the following strategies can help in time management and reduce stress?",
        answers: [
            { text: "Procrastination", correct: false },
            { text: "Multitasking", correct: false },
            { text: "Prioritizing tasks", correct: true },
            { text: "Avoiding planning", correct: false },
        ]
    },
    {
        question: "What is one way to promote a healthy work-life balance and reduce stress?",
        answers: [
            { text: "Working long hours without breaks", correct: false },
            { text: "Setting clear boundaries between work and personal time", correct: true },
            { text: "Checking emails and messages at all hours", correct: false },
            { text: "Avoiding vacations and time off", correct: false },
        ]
    },
    {
        question: "Deep breathing exercises are often recommended for stress relief. Which technique is commonly used in deep breathing?",
        answers: [
            { text: "Shallow rapid breaths", correct: false },
            { text: "Diaphragmatic breathing", correct: true },
            { text: "Holding your breath", correct: false },
            { text: "Hyperventilation", correct: false },
        ]
    },
    {
        question: "What is the role of a support system in managing stress?",
        answers: [
            { text: "Isolating individuals from social interactions", correct: false },
            { text: "Creating additional stress", correct: false },
            { text: "Providing emotional and practical support", correct: true },
            { text: "Ignoring personal challenges", correct: false },
        ]
    },
    {
        question: "Chronic stress is linked to an increased risk of which health issues?",
        answers: [
            { text: "Improved immune function", correct: false },
            { text: "Weight loss", correct: false },
            { text: "Cardiovascular problems", correct: true },
            { text: "Better sleep", correct: false },
        ]
    },
    {
        question: "Which lifestyle factor is associated with chronic stress?",
        answers: [
            { text: "Healthy Diet", correct: false },
            { text: "Adequate Sleep", correct: false },
            { text: "Regular Exercise", correct: false },
            { text: " Poor Time Management", correct: true },
        ]
    },
    {
        question: "What is the recommended approach when facing a stressful situation that cannot be changed?",
        answers: [
            { text: "Ignoring the situation", correct: false },
            { text: "Denying the stress", correct: false },
            { text: "Acceptance and adapting", correct: true },
            { text: "Blaming others", correct: false },
        ]
    },
];
// Define variables for quiz elements in JavaScript

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");
const timeDisplay = document.getElementById("time-display");

//  Initialize quiz variables
let currentQuestionIndex = 0;
let score = 0;


// Implement startQuiz function to reset variables and display the first question
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
// Implement showQuestion function to display current quiz question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    //   Dynamically create answer buttons in the quiz UI
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerElement.appendChild(button);
        // Add correct answer indication and click event listener to answer
        if (answer.correct) {
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);

    });



}
// Add resetState function to hide next button and clear answer options
function resetState() {
    nextButton.style.display = "none";
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
}
//Implement answer highlighting logic based on user selection
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    //  Disable answer buttons and highlight correct answers on user selection
    Array.from(answerElement.children).forEach(Button => {
        if (Button.dataset.correct === "true") {
            Button.classList.add("correct");
           
        }
        Button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
// implement handleNextButton function
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();

    }
    else{
    showScore();
        }
    }


// add event listener for next button
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
    startQuiz();
    }
});

startQuiz();


// Your existing JavaScript code

// Timer logic
let timer;
let seconds = 0;
let minutes = 0;

// Function to start the timer
function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    const formattedTime = `${padZero(minutes)}:${padZero(seconds)}`;
    document.getElementById('time-display').textContent = formattedTime;
}

// Function to pad zero to single-digit values
function padZero(value) {
    return value < 10 ? `0${value}` : value;
}

// Call startTimer() when you want to start the timer, e.g., at the beginning of the quiz
startTimer();



