let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
    name: "Raed",
    chips: 200
}

document.getElementById("player-el").textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push[firstCard]
    cards.push[secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true  
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    document.getElementById("message-el").textContent = message
    document.getElementById("sum-el").textContent = "Sum: " + sum
    let cardsEl = document.getElementById("cards-el")
    cardsEl.textContent = "Cards: " 
    for (let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard(){
    if (isAlive && !hasBlackJack){

    }
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

function getRandomCard(){
    // Generate a random number between 1 and 13
    let min = 1
    let max = 13
    let randomNumber = Math.floor(Math.random() * max) + min
    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10){
        return 10
    } else {
        return randomNumber
    }
}
