/*
PacMan
Resolution of exercice proposed by John Williams (See LICENSE)
*/
var pos = 0;
const pacArray = [
  ["PacMan1.png", "PacMan2.png"],
  ["PacMan3.png", "PacMan4.png"],
];
var direction = 0;
var focus = 0;
var active = true;

function run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth);
  img.src = "img/" + pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + "px";
  } else {
    pos += 20;
    img.style.left = pos + "px";
  }
  setTimeout(run, 200);
}

function checkPageBounds(direction, imgWidth) {
  const windowWidth = window.innerWidth - 20;
  if (direction == 0 && pos + imgWidth >= windowWidth) {
    pos = windowWidth - imgWidth;
    return 1;
  }
  if (direction == 1 && pos <= 0) {
    pos = 0;
    direction = 0;
  }
  return direction;
}
