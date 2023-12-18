
let playAlarm = document.getElementById("playAlarm")
let view = document.getElementById("view")
let enterTime = document.getElementById("enterTime")

function play() {
  var audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
  audio.play();
}

playAlarm.addEventListener("click", () => {
  const timeInSeconds = parseInt(enterTime.value, 10)||0

  if (timeInSeconds < 1) {
    view.innerHTML = "Enter a valid number again."
    return;
  }
  alarm(timeInSeconds)
})

const alarm = (timeInSeconds) => {
  setTimeout(() => {
    play()
    view.innerHTML = `Alarm Ringing after ${timeInSeconds} seconds`
    console.log(`Alarm Ringing after ${timeInSeconds} seconds`)
  }, timeInSeconds * 1000)
}

