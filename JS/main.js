const playButton = document.getElementById("play");
const gameBoard = document.getElementById("gameboard");
let gameLevel = document.getElementById("game-level");
generateGrid(gameBoard);

playButton.addEventListener("click", function () {
  generateGrid(gameBoard);
});

function generateGrid(gameBoard) {
  let cellsNumber = gameLevel.value;
  gameBoard.innerHTML = "";
  for (i = 1; i <= cellsNumber; i++) {
    const cell = generateCell(i, cellsNumber);
    gameBoard.append(cell);
  }
}
function generateCell(i, a) {
  const cell = document.createElement("div");
  cell.classList.add("box");
  cell.classList.add("box-" + a);
  cell.innerHTML = i;
  cell.addEventListener("click", function () {
    this.classList.toggle("clicked");
    console.log(i);
  });
  return cell;
}
