let gameNumber = Math.floor(Math.random() * 20 + 1);

let highscore = 0;
let gameScore = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (gameScore > 1) {
    // when there is no input
    if (!guess) {
      document.querySelector(".message").textContent = "Not A Number ❌ ";
    }
    // when the guess is correct
    else if (guess === gameNumber) {
      document.querySelector(".message").textContent = "Correct Number 👏";
      document.querySelector(".number").textContent = gameNumber;
      document.body.style.backgroundColor = "#60b347";

      document.querySelector(".number").style.width = "30rem";
      if (gameScore > highscore) {
        highscore = gameScore;
        document.querySelector(".highscore").textContent = highscore;
      }
    }
    // when the guess is not correct
    else if (guess > gameNumber) {
      document.querySelector(".message").textContent = "Too High 😬";
      gameScore--;
      document.querySelector(".score").textContent = gameScore;
    } else if (guess < gameNumber) {
      document.querySelector(".message").textContent = "Too Low 😥";
      gameScore--;
      document.querySelector(".score").textContent = gameScore;
    }
  } else {
    document.querySelector(".message").textContent = "YOU LOSE 😖";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  gameScore = 20;
  gameNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
