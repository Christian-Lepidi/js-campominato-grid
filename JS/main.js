const playButton = document.getElementById("play");
const gameBoard = document.getElementById("gameboard");

for (i = 1; i <= 100; i++) {
  const cell = generateCell(i);
  gameBoard.append(cell);
}

function generateCell(i) {
  const cell = document.createElement("div");
  cell.classList.add("box");
  cell.innerHTML = i;
  return cell;
}
