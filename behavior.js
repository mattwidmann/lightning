var updateInterval = 50
var speedOfSound = 0.211446403

var timeout = null
var startTime

document.body.addEventListener('touchend', function (event) {
    if (timeout === null) { startTimer() } else { stopTimer() }
})

document.body.addEventListener('mouseup', function (event) {
    if (timeout === null) { startTimer() } else { stopTimer() }
})

function updateTimer () {
    var currentTime = (new Date()).getTime()

    var timeDifference = (currentTime - startTime) / 1000
    var seconds = timeDifference.toFixed(1)
    var miles = (timeDifference * speedOfSound).toFixed(1)

    if (seconds == 1.0) {
        document.getElementById('secondsText').innerText = 'second'
    } else {
        document.getElementById('secondsText').innerText = 'seconds'
    }

    if (miles == 1.0) {
        document.getElementById('milesText').innerText = 'mile'
    } else {
        document.getElementById('milesText').innerText = 'miles'
    }

    document.getElementById('seconds').innerText = seconds.toString()
    document.getElementById('miles').innerText = miles.toString()

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
