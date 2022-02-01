const holes = document.querySelectorAll('.hole')
const moles = document.querySelectorAll('.mole')
const scoreBoard = document.querySelector('.score')
const game = document.querySelector('.body')
let level = document.querySelector('.level')
let nextLevl = document.querySelector('.start_game')
let level1 = document.querySelector('.level1')
let level2 = document.querySelector('.level2')
let level3 = document.querySelector('.level3')
let level4 = document.querySelector('.level4')
let lastHole;
let timeUp = false
let score = 0
let audio = new Audio("assets/mp3/1.mp3")
let audioStart = new Audio("assets/mp3/3.mp3")
let levl = 1
level1.textContent = localStorage.getItem('level 1')
level2.textContent = localStorage.getItem('level 2')
level3.textContent = localStorage.getItem('level 3')
level4.textContent = localStorage.getItem('level 4')

function RandomTime(min, max){
    return Math.round(Math.random()*(max-min)+min)
}

function randomHole(holes){
    const idx = Math.floor(Math.random()*holes.length)
    const hole = holes[idx]
    if(hole === lastHole){
        return randomHole(holes)
    }
    lastHole = hole
    return hole
}

function peep(x,c){
    const time = RandomTime(x, c)
    const hole = randomHole(holes)
    hole.classList.add('up')
    setTimeout(() =>{
        hole.classList.remove('up')
        if(!timeUp){
            peep(x,c)
        }
    }, time)

}
let x = 250
let c = 2500  




function startGame(){  
 
        level.textContent = 'level ' + levl
        scoreBoard.textContent = 0
        timeUp = false
        score = 0    
        peep(x,c)
        setTimeout(() => timeUp = true, 10000)
        audioStart.play()
        setTimeout(() =>  audioStart.pause() , 15000)
        

   
       
        setTimeout(() =>localStorage.setItem(`${level.textContent}`, `score:${score}`), 11000  )
        setTimeout(() =>level1.textContent = localStorage.getItem('level 1'), 11000  )
        setTimeout(() =>level2.textContent = localStorage.getItem('level 2'), 11000  )  
        setTimeout(() =>level3.textContent = localStorage.getItem('level 3'), 11000  )  
        setTimeout(() =>level4.textContent = localStorage.getItem('level 4'), 11000  )    
        setTimeout(() =>levl++, 11000  )  
        if(x < 60 || c < 600){
            x = 250
            c = 2500
            nextLevl.textContent = 'Start Game'
            levl = 1
            return
        }else{        
            x = x-70
            c = c-700
            nextLevl.textContent = 'Next Level'
        }      
            
   
}


function bonk(e){

    if(!e.isTrusted) return;
    this.parentNode.classList.remove('up')    
        score++
    scoreBoard.textContent = score
    audio.play()
    
}

moles.forEach(mole => mole.addEventListener('click', bonk))

console.log(`25/30
10 - код повторил
8 - обязательный функционал
7 - доп. функционал
пытался сделать за 1 день, да еще и отвлекаясь на другие дела, поэтому как есть))`


)