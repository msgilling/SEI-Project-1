// have start button to start the game?
// make a header with 'logo' KIKI'S DELIVERY SERVICE
// need to make a grid for KIKI to cross to deliver bread -> maybe 8x8/9x9?
// get the grid div from the dom so can append new divs to it that we create
// define starting position for player
// Player needs to get KIKI to deliver 5 loaves of bread to customers across the grid
// the player has 3 lives before having to start from the beginning
// register key events so player can use the correct game controls to move KIKI
//! if player hits obstable -> COLLISION -> need to check if two things are inside that div class at the same time
// collision events on setInterval timer -> diff rows running at diff times for challenge -> diff speeds?
// maybe have the game on a time limit? -> show case last 10 second count down???
// if player gets across to other side they get points -> 100pts per loaf
// points and lives stored together -> at the top of the grid?
// maybe have a scoreboard? -> if so get player to input name at the beginning with window alert
// maybe add pixel theme music that can be turned on or off?

console.log('js running')

function init() {

  // * VARIABLES
  const grid = document.querySelector('.grid') // get the grid element
  const width = 10 // defining the width of my grid // could also be 10 but would be huge -> harder level/
  const cellCount = width * width // defining the number of cells in my grid
  const cells = [] // put an empty array that our divs we create will be put in
  let livesLeft = 3 // defining how many lives player has
  let score = 0 // defining score starts at 0
  const breadHeart = document.querySelectorAll('.hearts')
  console.log('breadheart', breadHeart)
  // let myInterval 

  const audio = document.querySelector('audio')
  const playAudio = document.querySelector('.play')
  console.log(audio)

  

  const kikiClass = 'kiki' // defining the class for our character
  const kikiStartPosition = 95 // starting position of KIKI which refers to index
  let kikiCurrentPosition = 95 // use let to track where KIKI is currently in terms of [index]

  const eagleClass = 'eagle' // defining the class for eagle obstacle
  const eagleStartPosition = [75, 76, 68, 69, 62, 63, 70, 71]
  let eagleCurrentPosition = [75, 76, 68, 69, 62, 63, 70, 71]
  // const eagleCurrentPosition = document.querySelectorAll('.eagle')
  // const eagleCurrentPosition = 0
  // let eaglePosition = 0

  const planeClass = 'plane' // defining the class for plane obstacle
  const planeStartPosition = [21, 22, 23, 33, 34, 35, 27, 28, 29, 38, 39]
  // const planeCurrentPosition = document.querySelectorAll('.plane')
  // let planePositions = 0

  const startButton = document.querySelector('.start') // making a button to click to start the game
  // const resetButton = document.querySelector('reset') // making a button to reset the game

  const currentScore = document.querySelector('.scoreSpan') // to access the current score span and update whilst playing
  console.log(currentScore)
  const currentHearts = document.querySelector('.lives')
  console.log(currentHearts)
  // const timeRemaining = document.querySelector('.timerSpan)
  // let timer = 0
  // let counter = 0

  const winGame = document.createElement('div') // defining a winGame function
  console.log('wingame', winGame)
  winGame.innerText = 'CONGRATS! YOU HELPED KIKI DELIVER ALL THE BREAD! PLAY AGAIN?' // what I wnt to somehow pop up
  const loseGame = document.createElement('div') // defining a loseGame function
  console.log('loseGame', loseGame)
  loseGame.innerText = 'OH NO! KIKI COULD NOT MAKE ALL HER DELIVERIES. TRY AGAIN?' // text I want to pop up

  // * MAKING THE GRID
  function createGrid(kikiStartPosition) {
    
    for (let i = 0; i < cellCount; i++) { // using a for loop to run through every cell
      const cell = document.createElement('div') // creates our new div
      cell.innerText = i // here we're saying we want the innerText of the div to be the index
      grid.appendChild(cell) // here we make the cell a child of the grid element we took from above ^
      cells.push(cell) // this adds our newly create div to our empty arrays from earlier ^ []
    }
    addKiki(kikiStartPosition) // call function to add KIKI to start position
    addEagle(eagleStartPosition[0]) // call function to add  to EAGLE in start position
    addEagle(eagleStartPosition[1]) 
    addEagle(eagleStartPosition[2]) 
    addEagle(eagleStartPosition[3]) 
    addEagle(eagleStartPosition[4]) 
    addEagle(eagleStartPosition[5]) 
    addEagle(eagleStartPosition[6]) 
    addEagle(eagleStartPosition[7]) 
    addPlane(planeStartPosition[0]) // call function to add PLANE to start position
    addPlane(planeStartPosition[1]) 
    addPlane(planeStartPosition[2]) 
    addPlane(planeStartPosition[3]) 
    addPlane(planeStartPosition[4]) 
    addPlane(planeStartPosition[5]) 
    addPlane(planeStartPosition[6]) 
    addPlane(planeStartPosition[7]) 
    addPlane(planeStartPosition[8]) 
    addPlane(planeStartPosition[9]) 
    addPlane(planeStartPosition[10]) 
    // const theCells = document.querySelectorAll('.cell')
    // console.log(theCells)
  }

  // * PLAY MUSIC?

  function handlePlayAudio() {
    audio.src = 'https://youtu.be/5vzw3LrnSro'
  }
  
  // * ADDING KIKI TO GRID

  function addKiki(position) { // takes the argument position so function is reusable
    // console.log('POSITION BEING PASSED IN --->', position)
    // console.log('CELL WE PICKING USING THE POSITION INDEX THATS PASSED IN --->', cells[position])
    cells[position].classList.add(kikiClass) // using position as an index to pick the correct div from array of cells + add the kikiClass
  }
  // * REMOVING KIKI
  function removeKiki(position) {
    cells[position].classList.remove(kikiClass)
  }

  // * ADDING EAGLES TO GRID
  function addEagle(position) {
    cells[position].classList.add(eagleClass)
  }
  // * ADDING PLANES TO GRID
  function addPlane(position) {
    cells[position].classList.add(planeClass)
  }


  // * MOVING KIKI 

  function handleMoveKiki(event) {
    // console.log('key press')
    const key = event.keyCode // storing the event.keyCode in a variable to save us repeatedly typing it out!
    // console.log('POSITION BEFORE REDEFINING --->', kikiCurrentPosition)
    removeKiki(kikiCurrentPosition)
    console.log('key', key) // use this and type on keys to find out what keyCodes we want to utilise (up down left right)

    if (key === 39 && kikiCurrentPosition % width !== width - 1) { // when right arrow is pressed & not right at the edge ->
      kikiCurrentPosition++ // -> we redefine KIKI's position index to be previous position plus 1
      // console.log('kikis current position', kikiCurrentPosition) 
    } else if (key === 37 && kikiCurrentPosition % width !== 0) { // when left arrow is pressed & not right at the edge ->
      kikiCurrentPosition-- // -> we redefine KIKI's position index to be previous position minus 1
    } else if (key === 38 && kikiCurrentPosition >= width) { // when up arrow is pressed & KIKI is not right at the top of grid ->
      kikiCurrentPosition -= width // -> we redefine KIKI's position index to be previous position minus the width
    } else if (key === 40 && kikiCurrentPosition + width <= width * width - 1) { // when down arrow is pressed & KIKI not on bottom row ->
      kikiCurrentPosition += width // -> we redefine KIKI's position index to be the previous position plus width
    } else {
      console.log('INVALID KEY') // any other key, we log invalid
    }
    console.log('POSITION AFTER REDEFINING --->', kikiCurrentPosition)
    addKiki(kikiCurrentPosition)

  }

  // * WINNING POINTS 
  function winPoints(event) {
    // console.log('EVENT', event)
    if (cells[11].classList.contains('kiki')) {
      currentScore.innerText = score += 100
      // currentScore.innerText = score
      console.log('SCORE --->', score)
      removeKiki(kikiCurrentPosition)
      addKiki(kikiStartPosition)
      
    } else if (cells[15].classList.contains('kiki')){
      currentScore.innerText = score += 100
      removeKiki(kikiCurrentPosition)
      addKiki(kikiStartPosition)
      // cells[95].classList.add(kikiClass)
      console.log('SCORE --->', score)
    } else if (cells[18].classList.contains('kiki') && score !== 300) {
      currentScore.innerText = score += 100
      removeKiki(kikiCurrentPosition)
      addKiki(kikiStartPosition)
      // cells[95].classList.add(kikiClass)
      console.log('SCORE --->', score)
    } else if (currentScore === 300) {
      cells[11, 15, 18].classList.remove(kikiClass)
      
      // console.log('winGame', winGame)
      
      // console.log('SCORE', score)
      // } else if (currentScore === 300) {
      //   // alert('ALL DELIVERED!', score)
      //   cells[15].classList.remove(kikiClass)
      
      //   // console.log('SCORE', score)
      // } else if (currentScore === 300) {
      //   // alert('ALL DELIVERED!', score)
      //   cells[18].classList.remove(kikiClass)
      
      // console.log('SCORE', score)
    }
      
  } 

  
  
  //* LOSING LIVES 
  function checkCollision(event) {
    
    if (cells[kikiCurrentPosition].classList.contains('eagle') && livesLeft > 0) {
      livesLeft--
      document.getElementById('one').src = './assets/brokenbread (1).png'
      // event.target.src = './assets/brokenbread (1).png'
      // console.log('breadHeart', breadHeart)
      // console.log('event.target.src', event.target.src)
      console.log('lives left', livesLeft)
      // event.target.classList.add('broke-heart')
      // console.log('livesLeft', livesLeft)
      
      // event.target
    } else if (cells[kikiCurrentPosition].classList.contains('plane') && livesLeft > 0) {
      livesLeft--
      console.log('lives left', livesLeft)
    }
  }
  
  
    
  
  // * MOVING OBSTACLES
  
  function handleClick(event) {

    setInterval(() => {
      eagleCurrentPosition++
    
    }, 1000)
  }

  //* TIMER
  const timeRemaining = document.querySelector('.timerSpan')
  let timerId = null
  let gameTime = 20


  function startTimer() {
    if (timerId) { 
      console.log('the timer was alreading running')
      clearInterval(timerId) 
      timerId = null 
    } else {
      console.log('the timer wasnt running, so a new one has been started')
      timerId = setInterval(() => { // set the timer to run every 1 second
        gameTime-- // reduce time remaining by one
        timeRemaining.innerHTML = gameTime // set the time remaining on the screen
        if (gameTime === 0) { // if time is up
          clearInterval(timerId) // clear the current timer
        }
      }, 1000)
    }
  }

  // * RESTARTING GAME
  // function restartGame() {
  // 
  // }

  // * EVENT LISTENERS

  document.addEventListener('keyup', handleMoveKiki) // this listens to what keys are pressed (up down left right)
  document.addEventListener('keyup', winPoints)
  document.addEventListener('keyup', checkCollision)
  startButton.addEventListener('click', handleClick)
  // eagleCurrentPosition.addEventListener('click', handleClick)
  startButton.addEventListener('click', startTimer)


  // breadHeart.forEach(button => {
  //   button.addEventListener('keyUp', checkCollision)
  // })
  handleClick(eagleCurrentPosition)

  createGrid(kikiStartPosition) // this pass function the starting position of Kiki

  playAudio.addEventListener('click', handlePlayAudio) // click to play music
  
  // console.log('CELLS', cells)
}

window.addEventListener('DOMContentLoaded', init)