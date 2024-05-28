let secondsElapsed = 0;
let interval = null;
const time = document.getElementById('time')


function padStart(value) {
   return String(value).padStart(2, '0')
}

function setTime() {
   let minutes = Math.floor(secondsElapsed / 60)
   let seconds = secondsElapsed % 60
   time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`
}

function timer() {
   secondsElapsed++;
   setTime()
}

function startTimer() {
   if(!interval) {
      interval = setInterval(timer, 1000)
   }
   
}

function stopTimer() {
   clearInterval(interval)
   interval = null;
}

function resetTimer() {
   stopTimer()
   secondsElapsed = 0
   setTime()
}