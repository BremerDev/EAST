
for (let i = 0; i < 256; i++) {
let box = document.createElement("div");
canvas = document.getElementById("canvas");
box.style.width = "25px";
box.style.height = "25px";
// box.className = "pixel";
box.className = "pixel";

canvas.appendChild(box);
console.log(i);
  }

// Grab all elements with the class name of pixel
let getPixelClass = document.getElementsByClassName('pixel');
console.log(getPixelClass);

// Converted into an array
let pixelArray = Array.from(getPixelClass);
console.log(pixelArray);

//Loop through array with mouse over event listener
for (let i = 0; i < pixelArray.length; i++) {
    pixelArray[i].addEventListener("mouseover", function() {
      pixelArray[i].style.backgroundColor = "black";
    })};
