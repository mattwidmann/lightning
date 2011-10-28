var updateInterval = 50
var speedOfSound = 0.211446403

var timeout = null
var startTime

document.body.addEventListener('touchend', function (event) {
    if (timeout === null) { startTimer() } else { stopTimer() }
})

function updateTimer () {
    var currentTime = (new Date()).getTime()

    var timeDifference = currentTime - startTime
    document.getElementById('seconds').innerText = (timeDifference / 1000).toFixed(1).toString()
    document.getElementById('miles').innerText = ((timeDifference / 1000) * speedOfSound).toFixed(1).toString()

    timeout = window.setTimeout(updateTimer, updateInterval)
}

function startTimer () {
    startTime = (new Date()).getTime()
    document.getElementById('seconds').innerText = '0.0'
    document.getElementById('miles').innerText = '0.0'
    timeout = window.setTimeout(updateTimer, updateInterval)
}

function stopTimer () {
    window.clearTimeout(timeout)
    timeout = null
}
