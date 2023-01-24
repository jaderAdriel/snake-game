import { Snake } from "./abstract/snake.js";

const canvas = document.getElementById("game-screen");
const ctx = canvas.getContext("2d");


const canvasWidth = 400;
const canvasHeight = 200;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const area = {
    x: 20, 
    y: 20
};

const snake = new Snake({ 
    area, ctx, 
    border: {x: canvasWidth, y: canvasHeight} , 
    headColor : '#83fa6b'

});

document.addEventListener('keydown', (e) => {

    let direction = {
        x: 0,
        y: 0
    }

    switch (e.key) {
        case 'ArrowUp': direction.y = -1;
          break;
        case 'ArrowDown': direction.y = 1;
          break;
        case 'ArrowLeft': direction.x = -1;
          break;
        case 'ArrowRight': direction.x = 1 
          break;
    }
    console.log(direction);
    snake.setDirection(direction);
});

(function drawGrid() {

    const background = document.getElementById('game-background');
    const ctx2 = background.getContext("2d");

    background.width = canvasWidth;
    background.height = canvasHeight;

    const {width, height} = background;
    const {x, y} = area;

    const lineWidth = 1;

    const drawLine = (width, height, color='#a3a3a3') =>  {
        ctx2.moveTo(width.from, height.from);
        ctx2.lineTo(width.to, height.to);
        ctx2.lineWidth = lineWidth;
        ctx2.strokeStyle = color;
        ctx2.stroke();
    }

    for (let position = 0; position <= width; position+= x) {
        drawLine(
            {from: position, to: position},
            {from: 0, to: height},
        );
        
    }

    for (let position = 0; position <= height; position+= y) {
        drawLine(
            {from: 0, to: width},
            {from: position, to: position}
        );
    }

})()

function animate() {

    setTimeout(() => {

        requestAnimationFrame(animate);
        ctx.clearRect(0,0, canvas.width, canvas.height );
        snake.update();
        console.log("Delayed for 1 second.");

    }, snake.speed);
    
}

animate();
