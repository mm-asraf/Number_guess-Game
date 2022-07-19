"use strict";

let random = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".reset_btn").addEventListener("click", function () {
  document.querySelector(".message").textContent = "guess the number pls";
  score = 20;
  random = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".scores").textContent = score;
  document.querySelector(".num").value = "";
  document.querySelector(".random").textContent = "?";
  document.querySelector(".container").style.backgroundColor = "";
});

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const checkScore = function () {
  const guessNum = Number(document.querySelector(".num").value);
  console.log(guessNum);

  if (!guessNum) {
    displayMessage("guess the number pls");
  } else if (guessNum === random) {
    displayMessage("Congrats You Guess the right!");
    document.querySelector(".random").textContent = random;
    document.querySelector(".container").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high").textContent = highScore;
    }
  } else if (guessNum !== random) {
    if (score > 1) {
      displayMessage(guessNum > random ? "Too High" : "Too low");

      score--;
      document.querySelector(".scores").textContent = score;
    } else {
      displayMessage("Game Over you score is zero");
      document.querySelector(".scores").textContent = 0;
    }
  }
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", checkScore());
