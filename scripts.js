
for (let i = 0; i < 256; i++) {
let box = document.createElement("div");
canvas = document.getElementById("canvas");
box.style.width = "25px";
box.style.height = "25px";
box.className = "pixel";

canvas.appendChild(box);
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
    } else if (gridSize <= 100 && gridSize >= 1) {
         console.log("This option should output the new grid.")
         // Take input from gridSize and spit out new divs onto canvas

         for (let i = gridSize; i < gridSize.length; i++) {
            let gridSquare = document.createElement("div");
            console.log(gridSquare);
            canvas = document.getElementById("canvas");
            gridSquare.style.width = "25px";
            gridSquare.style.height = "25px";
            gridSquare.className = "pixel";
            console.log(gridSquare);
            canvas.appendChild(box);
              };


    } else {
        console.log('else');
    };
    
}, false);



