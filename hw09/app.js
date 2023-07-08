const generateBlocks = () => {
  const body = document.querySelector("body");
  const squares = document.createElement("div");
  body.appendChild(squares);
  squares.style.display = "grid";
  squares.style.gridTemplateColumns = "repeat(5, 50px)";
  squares.style.gridTemplateRows = "repeat(5, 50px)";

  for (let i = 1; i <= 25; i++) {
    const square = document.createElement("block");
    squares.appendChild(square);
    square.style.backgroundColor = getRandomColor();
  }
};
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const generateBlocksInterval = () => {
  generateBlocks();
  setInterval(() => {
    const randoomColor = document.querySelectorAll("block");
    randoomColor.forEach((item) => {
      return (item.style.backgroundColor = getRandomColor());
    });
  }, 1000);
};

generateBlocksInterval();
