var $ = window.jQuery

function getTimeOrHex (input) {
  var theDate = new Date()
  var time = new Date().toLocaleTimeString()
  var seconds = theDate.getSeconds()
  var hexSeconds = seconds.toString(16)
  var hexnums = (Math.round((Math.random() * 50) + 1)) + (Math.round((Math.random() * 40) + 1))
  var hex = '#' + hexSeconds + hexnums
  if (input === 'time') {
    return time
  } else if (input === 'seconds') {
    return seconds
  } else if (input === 'hex') {
    return hex
  }
}

function setCurrentTime () {
  $('#time').html(getTimeOrHex('time'))
}

setCurrentTime()

var ONE_SECOND = 1 * 1000

var clock = setInterval(runProgressBarAndTime, ONE_SECOND)

function changeBackgroundToHex () {
  $('body').css('background', getTimeOrHex('hex'))
}
changeBackgroundToHex()

var changeColor = setInterval(changeBackgroundToHex, ONE_SECOND * 2)

function getCurrentPercent () {
  var sec = getTimeOrHex('seconds')
  var percent = ((sec * 100) / 60) + '%'
  return percent
}

function fillProgressBar () {
  $('#progressBar').css({ width: getCurrentPercent() })
}

function runProgressBarAndTime () {
  fillProgressBar()
  setCurrentTime()
}

function whenHovered () {
  $('#time').html(getTimeOrHex('hex'))
  clearInterval(clock)
  clearInterval(changeColor)
}

function whenNotHovered () {
  $('#time').html(setCurrentTime())
  clock = setInterval(runProgressBarAndTime, ONE_SECOND)
  changeColor = setInterval(changeBackgroundToHex, ONE_SECOND * 2)
}

$('#time').hover(whenHovered, whenNotHovered)
