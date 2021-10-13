// * CSS

.modal {
  display: none; 
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  /* background: white;
  position: fixed;
  justify-content: center; */
}

.modal-content-win {
  /* display: none;  */
  color: black;
  text-align: center;
  position: fixed; 
  padding-top: 50px;
  background-color: white;
  padding: 20px; 
  margin-left: 50px;
  margin-top: 50px;
  height: 300px;
  width: 500px;
  border-radius: 5px;
  /* display: flex; */
  flex-direction: column;
  align-items: center;
}

div .modal-content-win p {
  /* display: none; */
  margin-top: 10px;
}
div .modal-content-lose p {
  /* display: none; */
  margin-top: 10px;
}

.play-again {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;
}
.modal-content-lose {
  display: none; 
  color: black;
  text-align: center;
  position: fixed; 
  padding-top: 50px;
  background-color: white;
  padding: 20px; 
  margin-left: 50px;
  height: 300px;
  width: 500px;
  border-radius: 5px;
  /* display: flex; */
  flex-direction: column;
  align-items: center;
}


.close-btn1 {
  float: right; 
  color: red;
  font-size: 24px;  
  font-weight: bold;
  cursor: pointer;
}
// * JAVASCRIPT 

const modal = document.querySelector('.modal')
const winGameModal = document.querySelector('.winGame') // defining a winGame function
console.log('winGameModal', winGameModal)
const loseGameModal = document.querySelector('.loseGame') // defining a loseGame function
console.log('loseGameModal', loseGameModal)

const closeModal = document.querySelector('.close-btn1')

function buttonModal() {
  // modal.style.display = 'block'
  // if (event.target === modal) {
  modal.style.display = 'none'
  // }
}

closeModal.addEventListener('click', buttonModal)

// * HTML

<div id="modalWin" class="winGame"> 
<div class="modal-content-win">
<span class="close-btn1">&times;</span>
<p>Congrats! </p>
<p>You've helped Kiki deliver all the bread! </p>
<img src="./assets/fe3271c2f92d9d098bd5a3281eb889e5.gif" alt="kiki-and-jiji" width="100px">
<button class="play-again">Play Again?</button>
  
</div> 

<div id="modalLose" class="loseGame">
  <div class="modal-content-lose">
  <span class="close-btn2">&times;</span>
  <p>Oh no! </p>
  <p>Kiki couldn't deliver all the bread in time ... </p>
  <img src="./assets/fe3271c2f92d9d098bd5a3281eb889e5.gif" alt="kiki-and-jiji" width="100px">
    <button class="play-again">Try again?</button>
  </div>