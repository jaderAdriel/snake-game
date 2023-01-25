import { Snake } from "./abstract/snake.js";
import { Food } from "./abstract/food.js";

const canvas = document.getElementById("game-screen");
const ctx = canvas.getContext("2d");


const canvasWidth = 400;
const canvasHeight = 400;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const area = {
    x: 20, 
    y: 20
};


const initButton = document.getElementById('init-game');
const modal = document.getElementById('beginInfo');

initButton.addEventListener('click', () => {
    document.getElementById('score__data').innerText = 0;
    modal.classList.toggle('hide');
    const snake = new Snake({ 
        area, ctx, 
        border: {x: canvasWidth, y: canvasHeight} , 
        headColor : '#444c24'
    });
    
    const food = new Food({
        ctx, 
        border: {x: canvasWidth, y: canvasHeight},
        area,
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
        snake.setDirection(direction);
    });
    
    function animate() {

        if ( snake.dead ) {
            modal.classList.toggle('hide');
            return;
        };
    
        setTimeout(() => {
            requestAnimationFrame(animate);
            ctx.clearRect(0,0, canvas.width, canvas.height );
    
            food.update();
            snake.update( food );
    
        }, 150);
        
    }

    animate();
});


