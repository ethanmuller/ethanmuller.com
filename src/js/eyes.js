const throttle = require('lodash/throttle');
const eyes = document.querySelector('.c-eyes');
let eyesRect;
let eyeCenterX;
let eyeCenterY;

function setup() {
  eyesRect = eyes.getBoundingClientRect();
  eyeCenterX = eyesRect.x + eyesRect.width / 2;
  eyeCenterY = eyesRect.y + eyesRect.height / 2;
}

function setEyePos(dx, dy) {
  const radians = Math.atan2(dy, dx);
  const eyeX = Math.cos(radians);
  const eyeY = Math.sin(radians);
  document.body.style.setProperty('--eye-x', eyeX);
  document.body.style.setProperty('--eye-y', eyeY);
}

function touchStart(e) {
  const dx = e.touches[0].pageX - eyeCenterX;
  const dy = e.touches[0].pageY - eyeCenterY;
  setEyePos(dx, dy);
}

function mouseMove(e) {
  const dx = e.clientX - eyeCenterX;
  const dy = e.clientY - eyeCenterY;
  setEyePos(dx, dy);
}

function bindForMouse() {
  // This throttle number value is the amount of delay to add
  // between rapid calls to this function. These values are smoothed
  // out over in the CSS using a `transition` property
  document.addEventListener('mousemove', throttle(mouseMove, 250));
}

function bindForTouch() {
  document.addEventListener('touchstart', touchStart);
  document.addEventListener('touchmove', throttle(touchStart, 250));
}

if ('ontouchstart' in document.documentElement) {
  bindForTouch();
} else {
  bindForMouse();
}

window.addEventListener('resize', () => {
  setup()
});

setup()
