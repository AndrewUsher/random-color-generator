const getColor = () => {
  const hexCode = Math.random()
    .toString(16)
    .slice(3, 9)
  return '#' + hexCode
}
const setColor = () => {
  const color = getColor()
  document.body.style.background = color
  let colorValue = document.getElementById('color')
  colorValue.innerHTML = color
}

document.body.onkeyup = event => {
  event.keyCode == 32 && setColor()
}
document.ready = setColor()
