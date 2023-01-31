
for (let i = 0; i < 257; i++) {
let box = document.createElement("div");
canvas = document.getElementById("canvas");
box.style.width = "25px";
box.style.height = "25px";
// box.className = "pixel";
box.id = "pixel";

canvas.appendChild(box);
console.log(i);
  }


document.getElementById("pixel").addEventListener("mouseover", changeBlack);

  function changeBlack() {
    document.getElementById("pixel").classList.add("black");
  };
  
