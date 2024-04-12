let mathrando = Math.floor(Math.random() * 3);
// this code will generate random number form 0 to 2
// my logic over here is that we will say that 
// 0=rock 
// or 1=paper
// or 2=scissor
// you can the name as you want 
// @baralanup
let computermove = "";
// so this computer move is the move of computer  

let outputka = "";
// this is for output
let r = document.getElementById("r");
// this is html id name
 // if (mathrando == 0) {
 //      computermove = "rock";
 //    } else if (mathrando == 1) {
 //      computermove = "paper";
 //    } else if (mathrando == 2) {
 //      computermove = "scissor";
 // }
// this is my logic for my rock paper scissor game i hope you understand it 
// basic thing to understand over here is that  there is only three possibly output like
// you won or computer won or you lose so this is the basic  thing to understand in this program 

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
    // thank you and have a good day bye 
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
