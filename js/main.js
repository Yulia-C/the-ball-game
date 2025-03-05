'use strict'

function onBallClick() {
    const elBall = document.querySelector('.ball')
    var currWidth = parseInt(elBall.style.width) || 100
    var currHeight = parseInt(elBall.style.height) || 100

    var newWidth = currWidth + 50
    var newHeight = currHeight + 50

    elBall.style.width = `${newWidth}px`
    elBall.style.height = `${newHeight}px`
    
    elBall.innerText = newHeight + newWidth
 
}