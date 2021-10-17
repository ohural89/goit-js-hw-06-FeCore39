const divWidget = document.querySelector('.widget');
const spanColor = document.querySelector('.color');
divWidget.addEventListener('click', onBtnClick)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnClick (event) {
  spanColor.textContent = getRandomHexColor();
  if(!event.target.classList.contains('change-color')) {
    return;
  } return (document.body.style.background = getRandomHexColor());
};