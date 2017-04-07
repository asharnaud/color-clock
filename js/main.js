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

function changeTimeToHex () {
  var theDate = new Date()
  var seconds = theDate.getSeconds()
  var hexSeconds = seconds.toString(16)
  var hex = '#' + hexSeconds + (Math.round((Math.random() * 50) + 1)) + (Math.round((Math.random() * 40) + 1))
  console.log(hex)
  $('body').css('background', hex)
}
changeTimeToHex()

var changeColor = setInterval(changeTimeToHex, everySecond * 2)

function whenHovered () {
  var theDate = new Date()
  var seconds = theDate.getSeconds()
  var hexSeconds = seconds.toString(16)
  var hex = '#' + hexSeconds + (Math.round((Math.random() * 50) + 1)) + (Math.round((Math.random() * 40) + 1))
  $('#time').html(hex)
  clearInterval(clock)
  clearInterval(changeColor)
}

function whenNotHovered () {
  $('#time').html(currentTime())
  var clock = setInterval(currentTime, everySecond)
  var changeColor = setInterval(changeTimeToHex, everySecond * 2)
}

$('#time').hover(whenHovered, whenNotHovered)
