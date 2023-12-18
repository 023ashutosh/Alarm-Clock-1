let playAlarm = document.getElementById("playAlarm")
let view = document.getElementById("view")
let view1 = document.getElementById("view1")
let enterTime = document.getElementById("enterTime")
let time = document.getElementById("time")

play = () => {
  var url = 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'
  var audio = new Audio(url);
  audio.play();
}

setInterval(() => {
  let d = new Date()
  time.innerHTML = d.toTimeString()
}, 1000)

const setAlarm = (seconds) => {
  let d = new Date().getTime()
  view.innerHTML = d
  
  setTimeout(() => {
    play()
  }, seconds * 1000)

  setInterval(() => {
    secondsLeft = - (new Date().getTime() - (d + seconds * 1000)); 
    if (secondsLeft > 0) {
      view1.innerHTML = "Alarm ringing in " + Math.floor(secondsLeft / 1000) + " seconds"
    }    
  })
}
  
playAlarm.addEventListener("click", () => {
  const seconds = parseInt(enterTime.value, 10) || 0

  if (seconds < 1) {
    view.innerHTML = "Enter a valid number again."
    return;
  }
  setAlarm(seconds)
})