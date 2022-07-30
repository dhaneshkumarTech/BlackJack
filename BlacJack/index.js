let cards = []
let sum = 0
let arrLength = 0
let message = ""
let hasBlackjack =false
let isAlive = false

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

function startGame(){
  if(sum != 0){
    cards = []
  }
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  arrLength = cards.length
  sum = firstCard + secondCard
  cards.push(firstCard,secondCard)
  playGame()
}
 function playGame(){
  if(sum <= 20){
    isAlive = true
    message = "Do you want to draw another card?"
  }
  else if(sum === 21){
    hasBlackjack = true
    message = "Hey! You got the BlackJack"
  }
  else{
    isAlive = false
    message = "Better luck Next time. You lost!"
  }
    messageEl.textContent = message
    sumEl.textContent ="Sum: " + sum
    cardEl.textContent = "Cards: " 
    for(let i = 0; i<cards.length; i++)
    {
      cardEl.textContent += cards[i] + "  "
    }
 }
 function drawCard(){
  if(hasBlackjack === false && isAlive)
  {
    let newCard = getRandomCard()
    sum +=newCard
    cards.push(newCard)
    playGame()
  }
  else {
    sumEl.textContent ="Sum: " + sum
    cardEl.textContent = "Cards: " 
    for(let i = 0; i<cards.length; i++)
    {
      cardEl.textContent += cards[i] + "  "
    }
  }
 }
 function getRandomCard(){
  return Math.floor(Math.random() * 10) + 2
 }