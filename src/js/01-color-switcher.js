const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('body')
}

let intervalColorID = null;


refs.btnStart.addEventListener('click', onClickStartRandomColor)
refs.btnStop.addEventListener('click', onClickStopRandomColor)


function onClickStartRandomColor() {
    intervalColorID = setInterval(changeColorOnBody,1000)
    refs.btnStart.disabled = true
    refs.btnStop.disabled = false
}

function onClickStopRandomColor() {
    clearInterval(intervalColorID)
    refs.btnStart.disabled = false
    refs.btnStop.disabled = true

}

function changeColorOnBody () {
    refs.bodyEl.style.backgroundColor = getRandomHexColor()
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }