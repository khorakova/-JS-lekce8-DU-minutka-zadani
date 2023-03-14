console.log('funguju!');

let time = prompt("Zadej za kolik vteřin má budík zazvonit.")
let timeInMiliSecond = time * 1000

function ring () {
    let alarmClock = document.querySelector(".alarm")
    alarmClock.classList.add("alarm--ring")
    let audio = document.querySelector(".audio")
    audio.play()
}

const timerID = setTimeout(ring, timeInMiliSecond)

let canceledButton = document.querySelector(".canceled");
canceledButton.addEventListener('click', stopRing)

function stopRing () {
    clearTimeout(timerID)
}


