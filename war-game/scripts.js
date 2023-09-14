let deckId 
let computerScore = 0
let playerScore = 0
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardsBtn = document.getElementById("draw-cards")
const header = document.getElementById("winner-text")
const remainingCardsText = document.getElementById("remaining-cards")
const computerScoreEl = document.getElementById("computer-score")
const playerScoreEl = document.getElementById("player-score")

function handleClick(){
    fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        remainingCardsText.textContent = `Remaining Cards: ${data.remaining}`
        deckId = data.deck_id
    })
}

newDeckBtn.addEventListener("click", handleClick)
drawCardsBtn.addEventListener("click", () => {
        console.log(deckId)
        fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            remainingCardsText.textContent = `Remaining Cards: ${data.remaining}`
            cardsContainer.children[0].innerHTML = `
            <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
            <img src=${data.cards[1].image} class="card" />
            `
            // <img src="${data.cards[1].image} class="card" />

            const winnerText = determineCardWinner(data.cards[0], data.cards[1])
            header.textContent = winnerText

            if (data.remaining === 0) {
                drawCardsBtn.disabled = true
                if (computerScore > playerScore) {
                    header.textContent = "The Computer Won the Game"
                } else if (playerScore > computerScore) {
                    header.textContent = "You Won the Game"
                } else {
                    header.textContent = "It's a Tie!"
                }
            }
    
    
    })
})

function determineCardWinner(card1, card2) {
    const valueOptions = [
        '2','3','4','5','6','7', '8','9','10','JACK','QUEEN','KING','ACE'
    ]

    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)

    // console.log('card 1:', card1ValueIndex)
    // console.log('card 2:', card2ValueIndex)


    if (card1ValueIndex > card2ValueIndex) {
        computerScore++
        computerScoreEl.textContent = `Computer Score: ${computerScore}`
        return 'Computer Wins'
    } else if (card1ValueIndex < card2ValueIndex){
        playerScore++
        playerScoreEl.textContent = `Player Score: ${playerScore}`
        return 'You Win'
    } else {
        return "It's a Tie!" 
    }
}