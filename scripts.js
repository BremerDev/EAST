

const canvas = document.getElementById("canvas");

function makeRows(rows, cols) {
  canvas.style.setProperty('--grid-rows', rows);
  canvas.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let box = document.createElement("div");
    canvas.appendChild(box).className = "pixel";  
  };
};

makeRows(16, 16);

function colourBlack() {
// Grab all elements with the class name of pixel
let getPixelClass = document.getElementsByClassName('pixel');
// Converted into an array
let pixelArray = Array.from(getPixelClass);
//Loop through array with mouse over event listener
for (let i = 0; i < pixelArray.length; i++) {
    pixelArray[i].addEventListener("mouseover", function() {
      pixelArray[i].style.backgroundColor = "black";
    })};
}

colourBlack();

// Grab button
const gridButton = document.getElementById("newGrid");
// add an on click fuction to button
gridButton.addEventListener('click', function() {
    //clear old grid
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild);
      }

    let gridSize =  prompt("Create a new grid between 1 - 100.");

    if (isNaN(gridSize)) {
        gridSize = prompt("Please choose a number between 1 - 100.");
    } else if (gridSize > 100 || gridSize < 1) {
            gridSize = prompt("Please choose a number between 1 - 100.");
    } else if (gridSize <= 100 && gridSize >= 1) {
        makeRows(gridSize, gridSize);
        colourBlack();
    } else {
        console.log("It's not workikng.");
    };
    
}, false);

