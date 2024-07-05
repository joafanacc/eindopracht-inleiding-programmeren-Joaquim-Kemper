const winCounter = document.querySelector("#wincounter");
const playertext = document.querySelector("#playertext");
const computertext = document.querySelector("#computertext");
const resulttext = document.querySelector("#resulttext");
const choicebtn = document.querySelectorAll(".choicebtn");

let player;
let computer;
let result;
let sound;
let wins = 0;

choicebtn.forEach(button => button.addEventListener("click", function(){
  player = button.querySelector("img").alt;
  computerturn();

  playertext.textContent = "player: " + player;
  computertext.textContent = "computer: " + computer;
  result = checkwinner();
  resulttext.textContent = result;
  soundqueues();

  if (result.includes("win")) {
    wins++;
    winCounter.textContent = "Wins: " + wins;
    if (wins == 3) {
      winCounter.textContent = "Oh my days, you won tres!!"

    }
  
  }

  console.log("Button clicked!");
}));

function computerturn() {
  const randomnum = Math.floor(Math.random() * 3) + 1;

  switch (randomnum) {
    case 1:
        computer = "JAN!";
        console.log("JAN! you've selected rock!");
      break;
    case 2:
        computer = "KEN!";
        console.log("KEN! you've selected paper!");
      break;
    case 3:
        computer = "PON!";
        console.log("PON! you've selected scissors!");
      break;
  }
}

function checkwinner() {
  if (player == computer) {
    return "It's a draw! くそっ";
  } else if (computer == "JAN!") {
    return (player == "KEN!") ? "I can't believe it, you win! グッジョブ" : "Oh no, you've lost! ブーブー";
  } else if (computer == "KEN!") {
    return (player == "PON!") ? "I can't believe it, you win! グッジョブ" : "Oh no, you've lost! ブーブー";
  } else if (computer == "PON!") {
    return (player == "JAN!") ? "I can't believe it, you win! グッジョブ" : "Oh no, you've lost! ブーブー";
  }
}

function soundqueues() {
  if (player == computer) {
    sound = "music/yooo_audio_effect.mp3";
  } else if (computer == "JAN!") {
    sound = (player == "KEN!") ? "music/you_win.mp3" : "music/wompwompwomp.mp3";
  } else if (computer == "KEN!") {
    sound = (player == "PON!") ? "music/you_win.mp3" : "music/wompwompwomp.mp3";
  } else if (computer == "PON!") {
    sound = (player == "JAN!") ? "music/you_win.mp3" : "music/wompwompwomp.mp3";
  }

  const audio = new Audio(sound);
  audio.play();
}