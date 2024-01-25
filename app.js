const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");
let isMouseDown = false;
let radius = 10
const clearAll = document.getElementById('clearAll_button')
let userColor = 'black';


canvas.addEventListener('mousedown', function(){
    isMouseDown = true;
})

canvas.addEventListener('mouseup', function(){
    isMouseDown = false;
    context.beginPath();
})

canvas.addEventListener('mousemove', function(event){
    if( isMouseDown){
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
        context.lineWidth = radius * 2;

        context.beginPath();
        context.arc(event.offsetX, event.offsetY, radius, 0, Math.PI * 2);
        context.fillStyle = userColor;
        context.strokeStyle = userColor;
        context.fill();

        context.beginPath();
        context.moveTo(event.offsetX, event.offsetY);
    } 
})


canvas.addEventListener('mouseout', function(event){
    isMouseDown = false;
    context.beginPath();
})

function clear(){
context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height); 

context.beginPath();
context.fillStyle = 'black';
};

clearAll.addEventListener('click', () => {
    clear();
  });

document.getElementById('palette').oninput = function(){
userColor = this.value;
};

document.getElementById('thickness_button').oninput = function(){
    radius = this.value
}