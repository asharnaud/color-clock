var $ = window.jQuery

function today () {
  return new Date().toLocaleTimeString()
}

function currentTime () {
  $('#time').html(today())
}

currentTime()

var everySecond = 1 * 1000
var clock = setInterval(currentTime, everySecond)


var theDate = new Date()
var seconds = theDate.getSeconds()
var hexSeconds = seconds.toString(16)
var hex = '#' + hexSeconds + (Math.round((Math.random() * 50) + 1)) + (Math.round((Math.random() * 40) + 1))

function changeTimeToHex () {
  console.log(hex)
  $('body').css('background', hex)
}
changeTimeToHex()

var changeColor = setInterval(changeTimeToHex, everySecond * 2)

function hoverTimeToHex () {
  $('#time').html(hex)
}

function whenTimeisHovered () {
  hoverTimeToHex()
  clearInterval(clock)
}

function whenNotHovered () {
  $('#time').html(currentTime())
}

$('#time').hover(whenTimeisHovered, whenNotHovered)
