//alert("javascript works rn")
function magic8ball() {
    askAQuestion();
    shake();
    getAFortune();
}

function askAQuestion() {
    alert("ASK A YES OR NO QUESTION AND RECIEVE YOUR ANSWER")
}
function shake() {
    alert("I'm shaking")
}
function getAFortune(){
var fortunes = ["yes","no","maybe"]
var num = randomNumber(fortunes.length)
  displayFortune(fortunes[num])  
}

function displayFortune(fortune) {
document
    .getElementById("fortune")
    .innerHTML = fortune
}

function randomNumber(n) {
    return Math.floor(Math.random() * n)
}