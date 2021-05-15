let squares = document.querySelectorAll(".squares");
let score = document.getElementById("score");
let result = 0;
let timeLeft = document.getElementById("time");
console.log(squares);
let currentTime = 60;
let Total = document.querySelector(".total-game-div");
let button = document.querySelector(".Play");

//For random position of mole
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let Randompos = squares[Math.trunc(Math.random() * 9)];
  Randompos.classList.add("mole");
  Hitpos = Randompos.id;
}

//Value of variable can be passed from one function to another like we did in code 11

//When clicked on right mole score is added
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == Hitpos) {
      result++;
      score.textContent = result;
    }
  });
});
//This function calls itself when event is placed
let posChng = setInterval(randomSquare, 500);
let timerId = setInterval(countDown, 1000);

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(posChng);
    clearInterval(timerId);
    alert("GAME OVER! Your final score is " + score.textContent);
    Total.classList.toggle("Removeall");
    button.classList.toggle("Removeall");
  }
}
//Replay
function Playagain() {
  //   score.textContent = 0;
  //   timeLeft.textContent = 60;
  //   posChng;
  //   timerId;
  Total.classList.toggle("Removeall");
  window.location.reload();
}
