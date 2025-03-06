'use strict'

function onBallClick() {
    const elBall = document.querySelector('.ball')
    var currWidth = parseInt(elBall.style.width) || 100
    var currHeight = parseInt(elBall.style.height) || 100
    const randSize = getRandomInt(20,60)

    var newWidth = currWidth + randSize
    var newHeight = currHeight + randSize
    var elDiameter = newWidth + newHeight


    elBall.style.width = `${newWidth}px`
    elBall.style.height = `${newHeight}px`

    elBall.innerText = newHeight + newWidth


    if (elDiameter > 400) {
        elBall.style.width = 100 + `px`
        elBall.style.height = 100 + `px`
        elBall.innerText = 100
    }
}