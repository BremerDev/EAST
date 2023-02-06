


for (let i = 0; i < 256; i++) {
let box = document.createElement("div");
let canvas = document.getElementById("canvas");
box.style.width = "1rem";
box.style.height = "1rem";
box.className = "pixel";
canvas.appendChild(box);
  };

// Grab all elements with the class name of pixel
let getPixelClass = document.getElementsByClassName('pixel');

// Converted into an array
let pixelArray = Array.from(getPixelClass);

//Loop through array with mouse over event listener
for (let i = 0; i < pixelArray.length; i++) {
    pixelArray[i].addEventListener("mouseover", function() {
      pixelArray[i].style.backgroundColor = "black";
    })};

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
         // Take input from gridSize and spit out new divs onto canvas
         for (let i = 0; i < gridSize * gridSize; i++) {
            let gridSquare = document.createElement("div");
            canvas = document.getElementById("canvas");
            gridSquare.style.width = "1rem";
            gridSquare.style.height = "1rem";
            gridSquare.className = "pixel";
            console.log(gridSquare);
            canvas.appendChild(gridSquare);
              };

              // Grab all elements with the class name of pixel
let getPixelClass = document.getElementsByClassName('pixel');

// Converted into an array
let pixelArray = Array.from(getPixelClass);

//Loop through array with mouse over event listener
for (let i = 0; i < pixelArray.length; i++) {
    pixelArray[i].addEventListener("mouseover", function() {
      pixelArray[i].style.backgroundColor = "black";
    })};


    } else {
        console.log("It's not workikng.");
    };
    
}, false);


function createGrid(gridSize) {
    for (let i = 0; i < 256; i++) {
        let box = document.createElement("div");
        canvas = document.getElementById("canvas");
        box.style.width = "1rem";
        box.style.height = "1rem";
        box.className = "pixel";
        canvas.appendChild(box);
          };
}