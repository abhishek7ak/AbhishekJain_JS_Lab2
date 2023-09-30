

function Quiz (questions){
    this.score =0;
    this.questions = questions
    this.questionIndex =0
}
function Question(text, options, answer){
    this.text =text;
    this.options = options
    this.answer = answer
}
Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex]
}
Quiz.prototype.checkOptionWithAnswer = function(ans){
    if (this.getQuestionByIndex().answer == ans){
        this.score++
    }
    this.questionIndex++
}
quiz.prototype.isEnded = function (){
    return this.questionIndex == this.questions.length
}
/** Javascript supports -> Functions, XHTML, CSS, HTML --> Functions
Which language used for styling web pages --> HTML, JQuery, CSS, XML --> CSS
Which is not a Javascript Framework -> Python, JQuery, Django, NodeJS → Django
Which is used to connect to Database -> PHP, HTML, JS, ALL --> PHP
Javascript is a --> Language, Programming Language, Development, All →→→ Programming Language
*/

let questions = {
new Question ("Javascript supports", ["Functions", "XHTML", "CSS", "HTML"], "Function"),
new Question ("hich language used for styling web pages", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
new Question ("Which is not a Javascript Framework", ["Python", "JQuery", "Django", "NodeJS"], "Django"),
new Question ("JWhich is used to connect to Database", ["PHP", "HTML", "JS", "ALL"], "PHP"),
new Question ("Javascript is a", ["Language", "Programming Language", "Development", "All"], "Programming Language"),
}

let quiz = new quiz (questions)
function displayquestions(){
    if (quiz.isEnded()){
        showScores()
    }else {
    let questionElem = document.getElementById("question")
    questionElem.innerText = quiz.getQuestionByIndex().text

    let choices = quiz.getQuestionByIndex().options
    for (let i=0; i < choices.length; i++){
        let elem = document.getElementById("choice"+1)
        elem.innerText = choices[i]
        handelClickOnBtn("btn"+1, choice[i])
    } 
showProgress()
}
}
function showProgress(){
    let curr = quiz.questionIndex +1
    let elem = document.getElementById("progres")
    elem.innerText = 'question ${curr} of ${quiz.questions.length}'
}
function handelClickOnBtn (id, choice){
    let buttonElen = document.getElementById(id)
    buttonElen.oneclick = function(){
        quiz.checkOptionWithanswer(choice)
        displayquestions()
    }
}
function showScores() {
    let Result = '<h1>Result</h1><h2 id="score">Your scores: ${quiz.score}.And mark percentage is: ${(quiz.score/questions.length)*100}</h2>'
    let quizElem = document.getElementById("quiz")
    quizElem.innerHTML = Result
    
}
displayquestions()