
for (let i = 0; i < 256; i++) {
let box = document.createElement("div");
canvas = document.getElementById("canvas");
box.style.width = "25px";
box.style.height = "25px";
box.className = "pixel";

canvas.appendChild(box);
console.log(i);
  }

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
    let gridSize =  prompt("Create a new grid between 1 - 100.");
    if (isNaN(gridSize)) {
        gridSize = prompt("Please choose a number between 1 - 100.");
    } else if (gridSize > 100 || gridSize < 1) {
            gridSize = prompt("Please choose a number between 1 - 100.");
            console.log(gridSize);
    } else {

    }
    
}, false);


//input cannot exceed 100 or letters, only numbers.


