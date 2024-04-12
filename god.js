let mathrando = Math.floor(Math.random() * 3);
let computermove = "";
let outputka = "";
let r = document.getElementById("r");
let rock = document
  .getElementById("rock")
  .addEventListener("click", function () {
    if (mathrando == 0) {
      computermove = "rock";
    } else if (mathrando == 1) {
      computermove = "paper";
    } else if (mathrando == 2) {
      computermove = "scissor";
    }
    if (computermove == "rock") {
      outputka = "draw bro play again";
      r.textContent += outputka;
    } else if (computermove == "paper") {
      outputka = "computer wins";
      r.textContent += outputka;
    } else if (computermove == "scissor") {
      outputka = "you win congrats ";
      r.textContent += outputka;
    }
  });
let paper = document
  .getElementById("paper")
  .addEventListener("click", function () {
    if (mathrando == 0) {
      computermove = "rock";
    } else if (mathrando == 1) {
      computermove = "paper";
    } else if (mathrando == 2) {
      computermove = "scissor";
    }
    if (computermove == "paper") {
      outputka = "draw";
      r.textContent += outputka;
    } else if (computermove == "scissor") {
      outputka = "computer wins try again";

      r.textContent += outputka;
    } else if (computermove == "rock") {
      outputka = "you win";
      r.textContent += outputka;
    }
  });
let scissor = document
  .getElementById("scissor")
  .addEventListener("click", function () {
    if (mathrando == 0) {
      computermove = "rock";
    } else if (mathrando == 1) {
      computermove = "paper";
    } else if (mathrando == 2) {
      computermove = "scissor";
    }
    if (computermove == "rock") {
      outputka = "you lose computer wins";
      r.textContent += outputka;
    } else if (computermove == "paper") {
      outputka = "you win nice one";
      r.textContent += outputka;
    } else if (computermove == "scissor") {
      outputka = "draw bro";
      r.textContent += outputka;
    }
  });
