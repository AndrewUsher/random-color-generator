function getColor () {
  return '#' + Math.random().toString(16).slice(3,9);
}

function setColor() {
  var color = getColor();
  document.body.style.background = color;
  var colorValue = document.getElementById('color');
  colorValue.innerHTML = color;
}

document.body.onkeyup = function(e) {
  if(e.keyCode == 32){
    setColor();
  }
}
document.ready = setColor();