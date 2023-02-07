

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
// add on click fuction to button
gridButton.addEventListener('click', function() {
    //clear old grid
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild);
      }

    let gridSize =  prompt("Create a new grid between 1 - 100.");

    //account for clicking cancel button
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



// Grab button
const rand = document.getElementById("randColour");
// add on click fuction to button
rand.addEventListener('click', function() {
    //clear old grid
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild);
      }

    let gridSize =  prompt("Create a new grid between 1 - 100.");

    //account for clicking cancel button
    if (isNaN(gridSize)) {
        gridSize = prompt("Please choose a number between 1 - 100.");
    } else if (gridSize > 100 || gridSize < 1) {
            gridSize = prompt("Please choose a number between 1 - 100.");
    } else if (gridSize <= 100 && gridSize >= 1) {
      makeRows(gridSize, gridSize);

      let getPixelClass = document.getElementsByClassName("pixel");

      let pixelArray = Array.from(getPixelClass);

      // random colour generator

      //Loop through array with mouse over event listener
      for (let i = 0; i < pixelArray.length; i++) {
        pixelArray[i].addEventListener("mouseover", function () {
          let r = Math.floor(Math.random() * 256);
          let g = Math.floor(Math.random() * 256);
          let b = Math.floor(Math.random() * 256);
          let colour = "rgb(" + r + "," + g + "," + b + ")";
          pixelArray[i].style.setProperty("background-color", colour);
        });
      }
    } else {
        console.log("It's not working.");
    };
    
}, false);



// Then try having each pass just add another 10% of black to it so that only after 
// 10 passes is the square completely black.

