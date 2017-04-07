var $ = window.jQuery


function currentTime () {
  var today = new Date()
  var time = today.toLocaleTimeString()
  $('#time').html(time)
}

currentTime()

var everySecond = 1 * 1000
var clock = setInterval(currentTime, everySecond)

function changeTimeToHex () {
  var today = new Date()
  var seconds = today.getSeconds()
  var hexSeconds = seconds.toString(16)
  var hex = '#' + hexSeconds + (Math.round((Math.random() * 50) + 1)) + (Math.round((Math.random() * 40) + 1))
  console.log(hex)
  $('body').css('background', hex)
}
changeTimeToHex()

var changeColor = setInterval(changeTimeToHex, everySecond * 2)

function hoverTimeToHex () {
  var today = new Date()
  var seconds = today.getSeconds()
  var hexSeconds = seconds.toString(16)
  var hex = '#' + hexSeconds + (Math.round((Math.random() * 50) + 1)) + (Math.round((Math.random() * 40) + 1))
  $('#time').html(hex)
}

function whenTimeisHovered () {
  hoverTimeToHex ()
}

function whenNotHovered () {
  $('#time').html(currentTime())
}

$('#time').hover(whenTimeisHovered, whenNotHovered)
