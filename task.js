const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');
const colorIndex = colors.length - 1;

let changeColor;

const addAt = function () {
  body.setAttribute(
    'bgcolor',
    colors[randomIntegerFromInterval(0, colorIndex)]
  );
};

startBtn.addEventListener('click', () => {
  changeColor = setInterval(addAt, 1000);
  startBtn.setAttribute('disabled', 'true');
});

stopBtn.addEventListener('click', () => {
  clearInterval(changeColor);
  startBtn.removeAttribute('disabled');
});
