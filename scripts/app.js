// have start button to start the game?
// make a header with 'logo' KIKI'S DELIVERY SERVICE
// need to make a grid for KIKI to cross to deliver bread -> maybe 8x8/9x9?
// get the grid div from the dom so can append new divs to it that we create
// define starting position for player
// Player needs to get KIKI to deliver 3 loaves of bread to customers across the grid
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

  // * VARIABLES =========================================================================================
  const grid = document.querySelector('.grid') // get the grid element
  const width = 10 // defining the width of my grid // could also be 10 but would be huge -> harder level/
  const cellCount = width * width // defining the number of cells in my grid
  const cells = [] // put an empty array that our divs we create will be put in
  let livesLeft = 3 // defining how many lives player has
  let score = 0 // defining score starts at 0
  // const breadHeart = document.querySelectorAll('.hearts')
  // console.log('breadheart', breadHeart)
  // let myInterval 

  const audio = document.querySelector('audio')
  const playAudio = document.querySelector('.play')
  console.log(audio)

  const breadHeartOne = document.querySelector('#bread-one')
  // const breadHeartTwo = document.querySelector('#two')
  // const breadHeartThree = document.querySelector('#three')

  function removeBreadHeart() {
    if (livesLeft === 2) {
      breadHeartOne.style.display = 'none'
    }
  }

  // * * *

  const kikiClass = 'kiki' // defining the class for our character
  const kikiStartPosition = 95 // starting position of KIKI which refers to index
  let kikiCurrentPosition = 95 // use let to track where KIKI is currently in terms of [index]

  const eagleClass = 'eagle' // defining the class for eagle obstacle
  const eagleStartPosition = [75, 76, 68, 69, 62, 63, 70, 71]
  const eagleCurrentPosition = [75, 76, 68, 69, 62, 63, 70, 71]

  const planeClass = 'plane' // defining the class for plane obstacle
  const planeStartPosition = [21, 22, 23, 33, 34, 35, 27, 28, 29, 38, 39]
  planeStartPosition.reverse()
  // const planeStartPosition = [21]
  const planeCurrentPosition = [21, 22, 23, 33, 34, 35, 27, 28, 29, 38, 39]
  planeCurrentPosition.reverse()
  // const planeCurrentPosition = [21]

  // * * *

  const houseOneClass = 'house-one' //defining class for first house
  const houseOnePosition = 1 // defining position the house will sit in

  const houseTwoClass = 'house-two'
  const houseTwoPosition = 5

  const houseThreeClass = 'house-three'
  const houseThreePosition = 8

  const floatingClass = 'floating'
  const floatingPosition = [11, 15, 18]
 
  // * * *

  const startButton = document.querySelector('.start') // making a button to click to start the game

  const currentScore = document.querySelector('.scoreSpan') // to access the current score span and update whilst playing
  // console.log(currentScore)
  const currentHearts = document.querySelector('.lives')
  console.log(currentHearts)


  const winGameScreen = document.querySelector('.winGame') // defining a winGame function pop up
  console.log('winGameModal', winGameScreen)
  const loseGameScreen = document.querySelector('.loseGame') // defining a loseGame function pop up
  console.log('loseGameModal', loseGameScreen)
  
  
  const tryAgainBtn = document.querySelector('.try-again') // try again if you lose

  const playAgainBtn = document.querySelector('.play-again') // play again if you win


  // * MAKING THE GRID =========================================================================================
  function createGrid(kikiStartPosition) {
    
    for (let i = 0; i < cellCount; i++) { // using a for loop to run through every cell
      const cell = document.createElement('div') // creates our new div
      cell.innerText = i // here we're saying we want the innerText of the div to be the index
      grid.appendChild(cell) // here we make the cell a child of the grid element we took from above ^
      cells.push(cell) // this adds our newly create div to our empty arrays from earlier ^ []
    }
    addKiki(kikiStartPosition) // call function to add KIKI to start position
    addHouseOne(houseOnePosition)
    addHouseTwo(houseTwoPosition)
    addHouseThree(houseThreePosition)
    addFloatingIsland(floatingPosition[0])
    addFloatingIsland(floatingPosition[1])
    addFloatingIsland(floatingPosition[2])
  }

  // * PLAY MUSIC? =========================================================================================
  const isPlaying = false

  function handlePlayAudio() {
    audio.src = './assets/a-town-with-an-ocean-view-kiki-39-s-delivery-service-lo-fi-scloudtomp3downloader.com.mp3' 
    isPlaying ? audio.pause() : audio.play() //!  ONLY PLAY 
   
    audio.volume = 0.2
    
  }

  // * ADDING KIKI TO GRID =========================================================================================
  function addKiki(position) { // takes the argument position so function is reusable
    // console.log('POSITION BEING PASSED IN --->', position)
    // console.log('CELL WE PICKING USING THE POSITION INDEX THATS PASSED IN --->', cells[position])
    cells[position].classList.add(kikiClass) // using position as an index to pick the correct div from array of cells + add the kikiClass
  }
  // * REMOVING KIKI =========================================================================================
  function removeKiki(position) {
    cells[position].classList.remove(kikiClass)
  }

  // * ADDING HOUSES TO GRID ???? =========================================================================================
  function addHouseOne(position) {
    cells[position].classList.add(houseOneClass)
  } 
  function addHouseTwo(position) {
    cells[position].classList.add(houseTwoClass)
  } 
  function addHouseThree(position) {
    cells[position].classList.add(houseThreeClass)
  } 

  //* REMOVING HOUSES ==================================================================================================
  function removeHouseOne(position) {
    cells[position].classList.remove(houseOneClass)
  } 
  function removeHouseTwo(position) {
    cells[position].classList.remove(houseTwoClass)
  } 
  function removeHouseThree(position) {
    cells[position].classList.remove(houseThreeClass)
  } 

  // *  FLOATING ISLANDS =====================
  function addFloatingIsland(position) {
    cells[position].classList.add(floatingClass)
  } 
  function removeFloatingIsland(position) {
    cells[position].classList.remove(floatingClass)
  } 

  // * ADDING EAGLES TO GRID =========================================================================================
  function addEagle(position) {
    cells[position].classList.add(eagleClass)
  } 

  // * ADDING PLANES TO GRID =========================================================================================
  function addPlane(position) {
    cells[position].classList.add(planeClass)
  }

  // * MOVING KIKI =========================================================================================

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
    // console.log('POSITION AFTER REDEFINING --->', kikiCurrentPosition)
    addKiki(kikiCurrentPosition)
    
  }

  // * WINNING POINTS  =========================================================================================
  function winPoints() {
    
    // console.log('EVENT', event)
    if (cells[11].classList.contains('kiki')) {
      currentScore.innerText = score += 100
      // currentScore.innerText = score
      console.log('SCORE --->', score)
      removeKiki(kikiCurrentPosition)
      kikiCurrentPosition = kikiStartPosition
      addKiki(kikiStartPosition)
      removeHouseOne(houseOnePosition) //removes house once visited
      removeFloatingIsland(floatingPosition[0]) // removes floating island beneath it
    } else if (cells[15].classList.contains('kiki')){
      currentScore.innerText = score += 100
      removeKiki(kikiCurrentPosition)
      kikiCurrentPosition = kikiStartPosition
      addKiki(kikiStartPosition)
      removeHouseTwo(houseTwoPosition)
      removeFloatingIsland(floatingPosition[1])
      console.log('SCORE --->', score)
    } else if (cells[18].classList.contains('kiki') && score !== 300) {
      currentScore.innerText = score += 100
      removeKiki(kikiCurrentPosition)
      kikiCurrentPosition = kikiStartPosition
      addKiki(kikiStartPosition)
      removeHouseThree(houseThreePosition)
      removeFloatingIsland(floatingPosition[2])
      console.log('SCORE --->', score)
    } else if (currentScore === 300) {
      removeKiki(kikiCurrentPosition)
      kikiCurrentPosition = kikiStartPosition
      addKiki(kikiStartPosition)
    
      // console.log()
    }
      
  }   
  
  //* LOSING LIVES =========================================================================================
  function checkCollision() {
    if (cells[kikiCurrentPosition].classList.contains('eagle') && livesLeft > 0) {
      livesLeft-- // taking away a life
      // changeHeart()
      removeBreadHeart()
      removeKiki(kikiCurrentPosition) // this just removes the class if you moves she still appears in the next cells so we do this >>
      kikiCurrentPosition = kikiStartPosition // >> which makes it so KIKI goes back to the start position ONLY
      addKiki(kikiStartPosition) // KIKI back at the start ONLY
      console.log('lives left', livesLeft)
    } else if (cells[kikiCurrentPosition].classList.contains('plane') && livesLeft > 0) {
      livesLeft--
      // removeBreadHeart()
      removeKiki(kikiCurrentPosition)
      kikiCurrentPosition = kikiStartPosition
      addKiki(kikiStartPosition)
      console.log('lives left', livesLeft)
    } else if (livesLeft === 0) {
      // removeBreadHeart()
      gameOverBad()
    } else if (gameTime === 0 && currentScore !== 300){
      gameOverBad()
    }
  }

  // function removeBreadHeart() {
  //   if (livesLeft === 2) {
  //     breadHeartOne.style.display = 'none'
  //   } else if (livesLeft === 1) {
  //     breadHeartTwo.style.display = 'none'
  //   } else if (livesLeft === 0) {
  //     breadHeartThree.style.display = 'none'
  //     gameOverBad()
  //   }
  // }



  // * GAME OVER ==========================================================================================
  function gameOverBad() {
    console.log('game over')
    if (livesLeft === 0) {
      clearInterval(timerId)
      loseGameScreen.style.display = 'block'
      
    } else if (gameTime === 0 && currentScore !== 300) {
      clearInterval(timerId)
      loseGameScreen.style.display = 'block'
    }
  }

  function gameOverGood() {
    winGameScreen.style.display = 'block'
      
    
  }
  // * RESET THE GAME ======================================================================================
  function tryAgain() {
    location.reload()
  }

  tryAgainBtn.addEventListener('click', tryAgain)

  function playAgain() {
    location.reload()
  }
  playAgainBtn.addEventListener('click', playAgain)
  
  // * MOVING OBSTACLES =========================================================================================
  
  function moveEagles() {
    addEagle(eagleStartPosition[0]) // call function to add  to EAGLE in start position
    addEagle(eagleStartPosition[1]) 
    addEagle(eagleStartPosition[2]) 
    addEagle(eagleStartPosition[3]) 
    addEagle(eagleStartPosition[4]) 
    addEagle(eagleStartPosition[5]) 
    addEagle(eagleStartPosition[6]) 
    addEagle(eagleStartPosition[7]) 

    // console.log('plane current position', planeCurrentPosition)
    setInterval(() => {
      for (let i = 0; i < eagleCurrentPosition.length; i++) {
        // console.log('eagle current position', eagleCurrentPosition)
        if (livesLeft > 0 && score < 300 && gameTime !== 0) { // stops eagles moving if any of these are true
          cells[eagleCurrentPosition[i]].classList.remove('eagle')
          if (eagleCurrentPosition[i] % width !== 0) {
            eagleCurrentPosition[i]--
          } else {
            eagleCurrentPosition[i] += width - 1
          }
          cells[eagleCurrentPosition[i]].classList.add('eagle')
          continue
        }
      }
      // console.log('eagle position after redefining', eagleCurrentPosition)
    }, 2000)
  }
  function movePlanes() {
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

    setInterval(() => {
      for (let i = 0; i < planeCurrentPosition.length; i++) {
        // console.log('plane current position', planeCurrentPosition)
        if (livesLeft > 0 && score !== 300 && gameTime !== 0) {
          cells[planeCurrentPosition[i]].classList.remove('plane')
          if (planeCurrentPosition[i] % width !== width - 1) {
            planeCurrentPosition[i]++
          } else {
            console.log('before', planeCurrentPosition[i])
            planeCurrentPosition[i] -= width - 1
            console.log('after', planeCurrentPosition[i])
          }
          cells[planeCurrentPosition[i]].classList.add('plane')
          continue
        }
      }
      // console.log('plane position after redefining', planeCurrentPosition)
    }, 2000)
  }


  //* TIMER =========================================================================================
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
        if (score === 300) {
          clearInterval(timerId)
          gameOverGood()
        }
        if (gameTime === 0 && score !== 300) { // if time is up
          clearInterval(timerId) // clear the current timer
          gameOverBad() // when timer runs out game over
          return
        }
      }, 1000)
    }
  }



  // * EVENT LISTENERS =========================================================================================

  document.addEventListener('keyup', handleMoveKiki) // this listens to what keys are pressed (up down left right)
  document.addEventListener('keyup', winPoints)
  document.addEventListener('keyup', checkCollision)
  // document.addEventListener('keyup', gameOverBad)
  // document.addEventListener('keyup', gameOverGood)
  // startButton.addEventListener('click', handleClick)
  startButton.addEventListener('click', startTimer)
  startButton.addEventListener('click', moveEagles)
  startButton.addEventListener('click', movePlanes)
  startButton.addEventListener('click', eagleStartPosition)
  startButton.addEventListener('click', planeStartPosition)
  // resetButton.addEventListener('click', )

  

  createGrid(kikiStartPosition) // this pass function the starting position of Kiki


  playAudio.addEventListener('click', handlePlayAudio) // click to play music
  
  // console.log('CELLS', cells)
}

window.addEventListener('DOMContentLoaded', init)