var $ = window.jQuery

function getTimeOrHex (input) {
  var theDate = new Date()
  var time = new Date().toLocaleTimeString()
  var seconds = theDate.getSeconds()
  var hexSeconds = seconds.toString(16)
  var hex = '#' + hexSeconds + (Math.round((Math.random() * 50) + 1)) + (Math.round((Math.random() * 40) + 1))
  if (input === 'time') {
    return time
  } else if (input === 'seconds') {
    return seconds
  } else if (input === 'hex') {
    return hex
  }
}

function currentTime () {
  $('#time').html(getTimeOrHex('time'))
}

currentTime()

var everySecond = 1 * 1000

var clock = setInterval(intervals, everySecond)

function changeBackgroundToHex () {
  $('body').css('background', getTimeOrHex('hex'))
}
changeBackgroundToHex()

var changeColor = setInterval(changeBackgroundToHex, everySecond * 2)

function secondsToPercent () {
  var sec = getTimeOrHex('seconds')
  console.log(sec)
  var percent = ((sec * 100) / 60) + '%'
  console.log(percent)
  return percent
}

function fillProgressBar () {
  $('#progress-bar').css({ width: secondsToPercent() })
}

function intervals () {
  fillProgressBar()
  currentTime()
}

function whenHovered () {
  $('#time').html(getTimeOrHex('hex'))
  clearInterval(clock)
  clearInterval(changeColor)
}

function whenNotHovered () {
  $('#time').html(currentTime())
  clock = setInterval(intervals, everySecond)
  changeColor = setInterval(changeBackgroundToHex, everySecond * 2)
}

$('#time').hover(whenHovered, whenNotHovered)
