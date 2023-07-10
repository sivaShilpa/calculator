/*----- constants -----*/

let operators = /\+|\-|\/|\*|\(|\)/
let digits = /[0-9]+|\./

/*----- state variables -----*/
let memory = 0

/*----- cached elements  -----*/
const screenEl = document.querySelector('.screen')

const leftParanEl = document.querySelector('.leftParan')
const rightParanEl = document.querySelector('.rightParan')
const mcEl = document.querySelector('.mc')
const mPlusEl = document.querySelector('.mPlus')
const mMinusEl = document.querySelector('.mMinus')
const mrEl = document.querySelector('.mr')
const aCEl = document.querySelector('.ac')
const plusOrMinusEl = document.querySelector('.plusOrMinus')
const percentageEl = document.querySelector('.percentage')
const divisionEl = document.querySelector('.division')

const secondEl = document.querySelector('.second')
const xSquaredEl = document.querySelector('.xSquared')
const xCubedEl = document.querySelector('xCubed')
const xRaisedToYEl = document.querySelector('.xRaisedToY')
const eRaisedToXEl = document.querySelector('.eRaisedToX')
const tenRaisedToXEl = document.querySelector('.tenRaisedToX')
const sevenEl = document.querySelector('.seven')
const eightEl = document.querySelector('.eight')
const nineEl = document.querySelector('.nine')
const intoEl = document.querySelector('.into')

const oneByXEl = document.querySelector('.oneByX')
const squareRootOfXEl = document.querySelector('.squareRootOfX')
const cubeRootOfXEl = document.querySelector('.cubeRootOfX')
const YRootOfXEl = document.querySelector('.YRootOfX')
const lnEl = document.querySelector(".ln")
const logToBaseTenEl = document.querySelector('.logToBaseTen')
const fourEl = document.querySelector('.four')
const fiveEl = document.querySelector('.five')
const sixEl = document.querySelector('.six')
const minusEl = document.querySelector('.minus')

const xFactorialEl = document.querySelector(".xFactorial")
const sineEl = document.querySelector('.sine')
const cosEl = document.querySelector('.cos')
const tanSignEl = document.querySelector('.tanSign')
const eEl = document.querySelector('.e')
const EEEL = document.querySelector('.EE')
const oneEl = document.querySelector('.one')
const twoEl = document.querySelector('.two')
const threeEl = document.querySelector('.three')
const plusEl = document.querySelector('.plus')

const degreeEl = document.querySelector('.degree')
const sineHEl = document.querySelector('.sineH')
const cosHEl = document.querySelector('.cosH')
const tanHEl = document.querySelector('.tanH')
const pieEl = document.querySelector('.pie')
const randEl = document.querySelector('.rand')
const zeroEl = document.querySelector('.zero')
const decimalEl = document.querySelector('.decimal')
const equaltoEl = document.querySelector('.equalto')

leftParanEl.addEventListener('click', leftParanFunc)
rightParanEl.addEventListener('click', rightParanFunc)
mcEl.addEventListener('click', mcElFunc)
mPlusEl.addEventListener('click', mPlusElFunc)
mMinusEl.addEventListener('click', mMinusElFunc)
mrEl.addEventListener('click', mrElFunc)
aCEl.addEventListener('click', aCElFunc)
plusOrMinusEl.addEventListener('click', plusOrMinusElFunc)
percentageEl.addEventListener('click', percentageElFunc)
divisionEl.addEventListener('click', divisionElFunc)

// secondEl.addEventListener('click', secondElFunc)
// xSquaredEl.addEventListener('click', xSquaredElFunc)
// xCubedEl.addEventListener('click', xCubedElFunc)
// xRaisedToYEl.addEventListener('click', xRaisedToYElFunc)
// eRaisedToXEl.addEventListener('click', eRaisedToXElFunc)
// tenRaisedToXEl.addEventListener('click', tenRaisedToXElFunc)
sevenEl.addEventListener('click', sevenElFunc)
eightEl.addEventListener('click', eightElFunc)
nineEl.addEventListener('click', nineElFunc)
intoEl.addEventListener('click', intoElFunc)

// oneByXEl.addEventListener('click', oneByXElFunc)
// squareRootOfXEl.addEventListener('click',squareRootOfXElFunc)
// cubeRootOfXEl.addEventListener('click', cubeRootOfXElFunc)
// YRootOfXEl.addEventListener('click', YRootOfXElFunc)
// lnEl.addEventListener('click', lnElFunc)
// logToBaseTenEl.addEventListener('click', logToBaseTenElFunc)
fourEl.addEventListener('click', fourElFunc)
fiveEl.addEventListener('click', fiveElFunc)
sixEl.addEventListener('click', sixElFunc)
minusEl.addEventListener('click', minusElFunc)

// xFactorialEl.addEventListener('click', xFactorialElFunc)
// sineEl.addEventListener('click', sineElFunc)
// cosEl.addEventListener('click', cosElFunc)
// tanSignEl.addEventListener('click', tanSignElFunc)
// eEl.addEventListener('click', eElFunc)
// EEEL.addEventListener('click', EEELFunc)
oneEl.addEventListener('click', oneElFunc)
twoEl.addEventListener('click', twoElFunc)
threeEl.addEventListener('click', threeElFunc)
plusEl.addEventListener('click', plusElFunc)

// degreeEl.addEventListener('click', degreeElFunc)
// sineHEl.addEventListener('click', sineHElFunc)
// cosHEl.addEventListener('click', cosHElFunc)
// tanHEl.addEventListener('click', tanHElFunc)
// pieEl.addEventListener('click', pieElFunc)
// randEl.addEventListener('click', randElFunc)
zeroEl.addEventListener('click', zeroElFunc)
decimalEl.addEventListener('click', decimalElFunc)
equaltoEl.addEventListener('click', equaltoElFunc)

/*----- event listeners -----*/
function leftParanFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return 
    else{
        screenEl.textContent = screenEl.textContent + '('        
    }
}
function rightParanFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return 
    else{
        screenEl.textContent = screenEl.textContent + ')'        
    }
}
function mcElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return 
    else{
        memory = []        
    }
}
function mPlusElFunc(evt){
    let current = evt.target
    if(current.tagName != 'DIV') return 
    else{
        if((digits).test(screenEl.textContent)){
            memory = screenEl.textContent
        }        
    }
}
function mMinusElFunc(evt){
    let current = evt.target
    if(current.tagName != 'DIV') return 
    else{
        if((digits).test(screenEl.textContent)){
            memory = -screenEl.textContent
        }        
    }
}
function mrElFunc(evt){
    let current = evt.target
    if(current.tagName != 'DIV') return 
    else{
        screenEl.textContent = memory
    } 
}
function aCElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return 
    else{
        screenEl.textContent = ''
    }
}
function plusOrMinusElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return 
    else{
        let temp = parseInt(screenEl.textContent)
        if(temp > 0){screenEl.textContent = '-'+Math.abs(temp).toString()}
        else if(temp < 0) {screenEl.textContent = '+'+Math.abs(temp).toString()}
    }
}
function percentageElFunc(evt){
    let current = evt.target
    if(current.tagName != 'DIV') return 
    else{
        let temp = parseInt(screenEl.textContent)
        screenEl.textContent = (temp/100).toString()
    }
}
function divisionElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return 
    else{
        screenEl.textContent = screenEl.textContent + '/'        
    }
}
function sevenElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return 
    else{
        screenEl.textContent = screenEl.textContent + '7'
    }
}
function eightElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '8'
    }
}
function nineElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '9'
    }
}
function intoElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '*'
    }
}
function fourElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '4'
    }
}
function fiveElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '5'
    }
}
function sixElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '6'
    }
}
function minusElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '-'
    }
}
function oneElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '1'
    }
}
function twoElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '2'
    }
}
function threeElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '3'
    }
}
function plusElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '+'
    }
}
function zeroElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '0'
    }
}
function decimalElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        screenEl.textContent = screenEl.textContent + '.'
    }
}
function equaltoElFunc(evt){
    let current = evt.target

    if(current.tagName != 'DIV') return
    else{
        let temp = screenEl.textContent
        let numArr = temp.split(operators)
        let tempArr = temp.split(digits)
        tempArr = tempArr.join("").split("")
        let numOfOprtrs = tempArr.length
        let calculationArr = []
        
        numArr.forEach((el, i)=>{
            if(el === ''){
                calculationArr.push(tempArr[i])
            }else if(i<numOfOprtrs){
                calculationArr.push(el)
                calculationArr.push(tempArr[i])
            }else{
                calculationArr.push(el)
            }
           
        })      
        screenEl.textContent = eval(calculationArr.join(""))
    }    
}



