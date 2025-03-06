'use strict'

function onBallClick(ev,maxDiameter) {
    const elBall = ev.target
    const randSize = getRandomInt(20,60)
    const randColor = getRandomColor()
    elBall.style.backgroundColor = randColor
    
    var currWidth = parseInt(elBall.style.width) || 100
    var currHeight = parseInt(elBall.style.height) || 100

    var newWidth = currWidth + randSize
    var newHeight = currHeight + randSize
    var elDiameter = newWidth + newHeight


    elBall.style.width = `${newWidth}px`
    elBall.style.height = `${newHeight}px`

    elBall.innerText = newHeight + newWidth


    if (elDiameter > maxDiameter) {
        elBall.style.width = 100 + `px`
        elBall.style.height = 100 + `px`
        elBall.innerText = 100
    }
}