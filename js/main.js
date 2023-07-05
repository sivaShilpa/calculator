/*----- constants -----*/

let operators = /\+|\-|\/|\x/
let digits = /[0-9]|\./

/*----- state variables -----*/


/*----- cached elements  -----*/
const screenEl = document.querySelector('.screen')
const aCEl = document.querySelector('.ac')
const plusOrMinusEl = document.querySelector('.plusOrMinus')
const percentageEl = document.querySelector('.percentage')
const divisionEl = document.querySelector('.division')
const sevenEl = document.querySelector('.seven')
const eightEl = document.querySelector('.eight')
const nineEl = document.querySelector('.nine')
const intoEl = document.querySelector('.into')
const fourEl = document.querySelector('.four')
const fiveEl = document.querySelector('.five')
const sixEl = document.querySelector('.six')
const minusEl = document.querySelector('.minus')
const oneEl = document.querySelector('.one')
const twoEl = document.querySelector('.two')
const threeEl = document.querySelector('.three')
const plusEl = document.querySelector('.plus')
const zeroEl = document.querySelector('.zero')
const decimalEl = document.querySelector('.decimal')
const equaltoEl = document.querySelector('.equalto')

aCEl.addEventListener('click', aCElFunc)
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
        screenEl.textContent = screenEl.textContent + 'x'
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



