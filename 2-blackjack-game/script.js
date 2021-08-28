// first state before the game started
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
//creating object called player
let player = {
  name: "Per",
  chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $" + player.chips // ngambil nama & chips dr object player

function startGame(){
  isAlive = true;
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  let cards = [firstCard, secondCard]
  let sum = cards[0]+cards[1]
  renderGame()
}

function renderGame(){
  cardsEl.textContent = "Cards: "
    for (let a=0; a<cards.length; a++){
    cardsEl.textContent += cards[a] + " "
  }
  sumEl.textContent = "Sum: " + sum // textnya si Sum

  if (sum<21){
    message = "Do you want to draw a new card?"
  } else if (sum === 21){
    message = "Congrats! you've got BlackJack!"
    hasBlackJack = true
  }
  else {
    message = "Whoops, sorry! You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function getRandomCard(){
  let randomNumber =  Math.floor(Math.random()*13) + 1
 if (randomNumber===1){
   return 11
 } else if (randomNumber>10) {
   return 10
 }
 else {
   return randomNumber
 }
}

function newCard(){
  if (isAlive===true && hasBlackJack ===false){
    console.log("Drawing a new card from the deck...")
  let newCardz = getRandomCard()
  sum += newCardz
  cards.push(newCardz)
  console.log(cards)
  renderGame()
  }

  else {
    console.log("sorry! you're not allowed to draw a new card.")
  }

}
