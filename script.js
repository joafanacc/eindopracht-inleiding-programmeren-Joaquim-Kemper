console.log("testing...");

const playertext = document.querySelector("#playertext");
const computertext = document.querySelector("#computertext");
const resulttext = document.querySelector("#resulttext");
const choicebtn = document.querySelectorAll(".choicebtn");

let player;
let computer;
let result;

choicebtn.forEach(button => button.addEventListener("click", () => {
player = button.querySelector("img").alt;
computerturn();

  playertext.textContent = "player: " + player;
  computertext.textContent = "computer: " + computer;
  resulttext.textContent = checkwinner();
  soundqueues(); crowd();

  console.log("Button clicked!");
}));

function computerturn() {
  const randomnum = Math.floor(Math.random() * 3) + 1;

  switch (randomnum) {
    case 1:
        computer = "JAN!";
        console.log("JAN! you've selected rock!")
      break;
    case 2:
        computer = "KEN!";
        console.log("KEN! you've selected paper!")
      break;
    case 3:
        computer = "PON!";
        console.log("PON! you've selected scissors!")
      break;
  }

}

function checkwinner(){
  if(player == computer){
    return "It's a draw! くそっ";
  }
  else if(computer == "JAN!"){
    return (player == "KEN!") ? "I can't believe it, you win! グッジョブ" : "Oh no, you've lost! ブーブー"
  }
  else if(computer == "KEN!"){
    return (player == "PON!") ? "I can't believe it, you win! グッジョブ" : "Oh no, you've lost! ブーブー"
  }
  else if(computer == "PON!"){
    return (player == "JAN!") ? "I can't believe it, you win! グッジョブ" : "Oh no, you've lost! ブーブー"
  }
  console.log("The unavoidable outcome!")
}

//JAN! = rock
//KEN! = paper
//PON! = scissors

function soundqueues() {
  let sound;
  if (player === computer) {
      sound = "music/yooo_audio_effect.mp3";
  } else if (computer === "JAN!") {
      sound = (player === "KEN!") ? "music/you_win.mp3" : "music/wompwompwomp.mp3";
  } else if (computer === "KEN!") {
      sound = (player === "PON!") ? "music/you_win.mp3" : "music/wompwompwomp.mp3";
  } else if (computer === "PON!") {
      sound = (player === "JAN!") ? "music/you_win.mp3" : "music/wompwompwomp.mp3";
  }

  const audio = new Audio(sound);
  audio.play();
  console.log("Audio")
}