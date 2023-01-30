
for (let i = 0; i < 257; i++) {
let box = document.createElement('div');
canvas = document.getElementById("canvas");
box.style.width = "25px";
box.style.height = "25px";
box.className = 'box';

canvas.appendChild(box);
console.log(i);
  }

