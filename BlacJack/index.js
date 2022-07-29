let firstCard = Math.floor(Math.random() * 11) + 2
let secondCard = Math.floor(Math.random() * 11) + 2
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let arrLength = 2
let message = ""

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let drawEl = document.querySelector("#draw-cards")
let zeroCards = document.querySelector("#zero-cards")

function startGame(){
  
  drawEl.textContent = "Remaining Cards: " + 2
  playGame()
}
 function playGame(){
  if(sum <= 20){
    message = "Do you want to draw another card?"
  }
  else if(sum === 21){
    message = "Hey! You got the BlackJack"
  }
  else{
    message = "Better luck Next time. You lost!"
  }
    messageEl.textContent = message
    sumEl.textContent ="Sum: " + sum
    cardEl.textContent = "Cards: " + cards
 }
 function drawCard(){
  if(arrLength>0)
  {
    let newCard = Math.floor(Math.random() * 11) + 2
    sum +=newCard
    cards.push(newCard)
    playGame()
    
    arrLength -= 1
  }
  else {
    sumEl.textContent ="Sum: " + sum
    cardEl.textContent = "Cards: " + cards
  }
  //let remainingCards = 4 - arrLength
  drawEl.textContent = "Remaining Cards: " + arrLength
  if(arrLength == 0){
  messageEl.textContent = "Better luck Next time. You lost!"
  zeroCards.textContent = "You cannot draw more Card!"
  }
 }