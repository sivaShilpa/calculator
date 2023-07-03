/*----- constants -----*/



/*----- state variables -----*/


/*----- cached elements  -----*/
const screenEl = document.querySelector('.screen')
const ACEl = document.querySelector('AC')
const plusOrMinusEl = document.querySelector('plusOrMinus')
const percentageEl = document.querySelector('percentage')
const divisionEl = document.querySelector('division')
const sevenEl = document.querySelector('seven')
const eightEl = document.querySelector('eight')
const nineEl = document.querySelector('nine')
const intoEl = document.querySelector('into')
const fourEl = document.querySelector('four')
const fiveEl = document.querySelector('five')
const sixEl = document.querySelector('six')
const minusEl = document.querySelector('minus')
const oneEl = document.querySelector('one')
const twoEl = document.querySelector('two')
const threeEl = document.querySelector('three')
const plusEl = document.querySelector('plus')
const zeroEl = document.querySelector('zero')
const decimalEl = document.querySelector('decimal')
const equaltoEl = document.querySelector('equalto')

ACEl.addEventListener('click', ACElFunc)
plusOrMinusEl.addEventListener('click', plusOrMinusElFunc)
percentageEl.addEventListener('click', percentageElFunc)
divisionEl.addEventListener('click', divisionElFunc)
sevenEl.addEventListener('click', sevenElFunc)
eightEl.addEventListener('click', eightElFunc)
nineEl.addEventListener('click', nineElFunc)
intoEl.addEventListener('click', intoElFunc)
fourEl.addEventListener('click', fourElFunc)
fiveEl.addEventListener('click', fiveElFunc)
sixEl.addEventListener('click', sixElFunc)
minusEl.addEventListener('click', minusElFunc)
oneEl.addEventListener('click', oneElFunc)
twoEl.addEventListener('click', twoElFunc)
threeEl.addEventListener('click', threeElFunc)
plusEl.addEventListener('click', plusElFunc)
zeroEl.addEventListener('click', zeroElFunc)
decimalEl.addEventListener('click', decimalElFunc)
equaltoEl.addEventListener('click', equaltoElFunc)

/*----- event listeners -----*/

// function handleClick(evt) {
//     let currentButton = evt.target

//     if (currentButton.tagName != 'DIV') {
//         return
//     } else {
//         if(gameOn === true){
//             if (currentPlayer === 1) {
//                 if (currentButton.textContent === "") {
//                     currentButton.textContent = choices[currentPlayer]
//                     currentPlayer--
//                     tieGame.push(1)
//                 }
//             } else {
//                 if (currentButton.textContent === "") {
//                     currentButton.textContent = choices[currentPlayer]
//                     currentPlayer++
//                     tieGame.push(1)
//                 }
//             }
//             checkForWinner()
//         }
//         else{
//             if(isBoardEmpty()){
//                 resultEl.textContent = "Click on 'START GAME' button to start the game."
//             }
//             else{
//                 resultEl.textContent = "Please reset the game and then click 'START GAME' button to start another round."
//             }
            
//         }
//     }
// }

// function handleClick1(evt) {
//     let resetButton = evt.target
//     if (resetButton.tagName != 'BUTTON') {
//         return
//     }
//     else {
//         squareEls.forEach(function (sqr) {
//             sqr.textContent = ""
//         })
//     }
//     currentPlayer = 0
//     tieGame = []
//     resultEl.textContent = ""
//     endGame = false
//     gameOn = false
// }

// function handleClick2(evt){
//     if(endGame === false){
//         gameOn = true
//         resultEl.textContent = `Player${currentPlayer + 1}, it's your turn!!! Put ${choices[currentPlayer]} on the board!`
//     }
    
// }

// function checkForWinner() {
//     if (((squareEls[0].textContent === squareEls[4].textContent) && (squareEls[4].textContent === squareEls[8].textContent) && (squareEls[0].textContent !== "")) ||
//         (squareEls[0].textContent === squareEls[3].textContent) && (squareEls[3].textContent === squareEls[6].textContent && (squareEls[0].textContent !== "")) ||
//         (squareEls[0].textContent === squareEls[1].textContent) && (squareEls[1].textContent === squareEls[2].textContent && (squareEls[0].textContent !== "")) ||
//         (squareEls[1].textContent === squareEls[4].textContent) && (squareEls[4].textContent === squareEls[7].textContent && (squareEls[1].textContent !== "")) ||
//         (squareEls[3].textContent === squareEls[4].textContent) && (squareEls[4].textContent === squareEls[5].textContent && (squareEls[3].textContent !== "")) ||
//         (squareEls[6].textContent === squareEls[7].textContent) && (squareEls[7].textContent === squareEls[8].textContent && (squareEls[6].textContent !== "")) ||
//         (squareEls[2].textContent === squareEls[5].textContent) && (squareEls[5].textContent === squareEls[8].textContent && (squareEls[2].textContent !== "")) ||
//         (squareEls[2].textContent === squareEls[4].textContent) && (squareEls[4].textContent === squareEls[6].textContent && (squareEls[2].textContent !== ""))) {
//         if (currentPlayer === 1) {
//             resultEl.textContent = `Player${currentPlayer} wins!!! Reset the game.`
//             endGame = true
//             gameOn = false
//         } else {
//             resultEl.textContent = `Player${currentPlayer + 2} wins!!! Reset the game.`
//             endGame = true
//             gameOn = false
//         }

//     }
//     else {
//         if (tieGame.length === 9) {
//             resultEl.textContent = "It is a tie!!! Reset the game."
//             endGame = true
//             gameOn = false
//         }
//         else {
//             resultEl.textContent = `Player${currentPlayer + 1}, it's your turn!!! Put ${choices[currentPlayer]} on the board!`
//         }
//     }

// }

// function isBoardEmpty(){
//     let i = 0;
//     while(squareEls[i].textContent===""){
//         i++
//         if(i===9){
//             return true
//         }
//     }
//     return false
// }


